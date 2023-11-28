from django.http import JsonResponse
from django.shortcuts import render
from .models import MenuItem, Cart, Order, OrderItem
from django.contrib.auth.models import User, Group
from rest_framework.response import Response
from .serializers import (
    MenuItemSerializer,
    CartSerializer,
    OrderSerializer,
    ManagerOrderUpdateSerializer,
    CrewOrderUpdateSerializer,
    UserSerializer,
)
from rest_framework import generics
from django.shortcuts import get_object_or_404
from rest_framework.permissions import IsAuthenticated, BasePermission, AllowAny
from django.contrib.auth.models import User
from rest_framework.throttling import UserRateThrottle, AnonRateThrottle


class IsManager(BasePermission):
    def has_permission(self, request, view):
        isManager = request.user.groups.filter(name="Manager").exists()
        return isManager


class IsDeliveryCrew(BasePermission):
    def has_permission(self, request, view):
        return request.user.groups.filter(name="Delivery Crew").exists()


# Create your views here.
class MenuItemsView(generics.ListCreateAPIView):
    queryset = MenuItem.objects.all()
    throttle_classes = [AnonRateThrottle, UserRateThrottle]
    serializer_class = MenuItemSerializer
    ordering_fields = ["title", "price"]
    search_fields = ["title"]
    filterset_fields = ["title", "price"]

    def get_permissions(self):
        if self.request.method == "POST":
            return [IsManager()]
        return [AllowAny()]


class SingleMenuItemView(generics.RetrieveUpdateDestroyAPIView):
    queryset = MenuItem.objects.all()
    throttle_classes = [AnonRateThrottle, UserRateThrottle]
    serializer_class = MenuItemSerializer

    def get_permissions(self):
        if self.request.method == "GET":
            return [AllowAny()]
        return [IsManager()]


class CartView(generics.ListCreateAPIView, generics.DestroyAPIView):
    serializer_class = CartSerializer
    throttle_classes = [AnonRateThrottle, UserRateThrottle]
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        queryset = Cart.objects.filter(user=self.request.user)
        return queryset

    def delete(self, request, *args, **kwargs):
        cart_items = Cart.objects.filter(user=request.user)
        for cart_item in cart_items:
            cart_item.delete()
        return Response(status=200)

    def perform_create(self, serializer):
        id = self.request.data.get("menuitem_id")
        quantity = self.request.data.get("quantity")
        unit_price = MenuItem.objects.get(pk=id).price
        quantity = int(quantity)
        price = quantity * unit_price
        serializer.save(user=self.request.user, price=price, unit_price=unit_price)


class OrdersView(generics.ListCreateAPIView):
    # queryset = Order.objects.all()
    serializer_class = OrderSerializer
    throttle_classes = [AnonRateThrottle, UserRateThrottle]
    permission_classes = [IsAuthenticated]
    ordering_fields = ["date", "total" "status"]
    search_fields = ["date", "status", "total"]
    filterset_fields = ["date", "total", "status"]

    def get_queryset(self):
        user = self.request.user
        if user.groups.filter(name="Manager").exists():
            return Order.objects.all()
        if user.groups.filter(name="Delivery crew").exists():
            return Order.objects.all(delivery_crew=user)
        return Order.objects.filter(user=user)

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        cart_items = Cart.objects.filter(user=request.user)
        if len(cart_items) == 0:
            return Response(status=400)
        total = 0
        for cart_item in cart_items:
            total += cart_item.price

        order = serializer.save(user=request.user, total=total)
        for cart_item in cart_items:
            OrderItem.objects.create(
                menuitem=cart_item.menuitem,
                quantity=cart_item.quantity,
                unit_price=cart_item.unit_price,
                price=cart_item.price,
                order=order,
            )
            cart_item.delete()
        headers = self.get_success_headers(serializer.data)
        return JsonResponse(serializer.data, status=201, headers=headers)


class SingleOrderView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = OrderSerializer
    throttle_classes = [AnonRateThrottle, UserRateThrottle]
    # permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        if user.groups.filter(name="Manager").exists():
            return Order.objects.all()
        return Order.objects.filter(user=user)

    def update(self, request, *args, **kwargs):
        user = request.user
        order = get_object_or_404(Order, pk=kwargs["pk"])
        if user.groups.filter(name="Manager").exists():
            serializer = ManagerOrderUpdateSerializer(data=request.data)
            serializer.is_valid()
            crew = get_object_or_404(User, pk=serializer.data["delivery_crew"])
            if "status" in serializer.data:
                order.status = serializer.data["status"]
            if "delivery_crew" in serializer.data:
                order.delivery_crew = crew
            order.save()
        elif user.groups.filter(name="Delivery crew").exists():
            serializer = CrewOrderUpdateSerializer(Data=request.data)
            serializer.is_valid()
            status = serializer.data["status"]
            order.status = status
        return Response(serializer.data, status=200)

    def get_permissions(self):
        order = Order.objects.get(pk=self.kwargs["pk"])
        if self.request.user == order.user and self.request.method == "GET":
            permission_classes = [IsAuthenticated]
        if self.request.method == "DELETE":
            permission_classes = [IsManager]
        else:
            permission_classes = [IsAuthenticated, IsManager | IsDeliveryCrew]
        return [permission() for permission in permission_classes]


class ManagersView(generics.ListCreateAPIView):
    queryset = User.objects.all()

    serializer_class = UserSerializer
    permission_classes = [IsManager]

    def post(self, request, *args, **kwargs):
        manager_group = Group.objects.get(name="Manager")
        username = request.data.get("username")
        user = User.objects.get(username=username)
        user.groups.add(manager_group)
        return Response(status=201)

    def get_queryset(self):
        group = Group.objects.get(name="Manager")
        queryset = User.objects.filter(groups=group)
        return queryset


class SingleManagerView(generics.DestroyAPIView):
    queryset = MenuItem.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsManager]

    def get_queryset(self):
        group = Group.objects.get(name="Manager")
        queryset = User.objects.filter(groups=group)
        return queryset

    def delete(self, request, *args, **kwargs):
        manager_group = Group.objects.get(name="Manager")
        pk = kwargs["pk"]
        user = get_object_or_404(User, pk=pk)
        user.groups.remove(manager_group)
        return Response(status=200)


class DeliveryCrewsView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsManager]

    def get_queryset(self):
        group = Group.objects.get(name="Delivery crew")
        queryset = User.objects.filter(groups=group)
        return queryset


class SingleDeliveryCrewView(generics.DestroyAPIView):
    queryset = MenuItem.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsManager]

    def get_queryset(self):
        group = Group.objects.get(name="Delivery crew")
        queryset = User.objects.filter(groups=group)
        return queryset

    def delete(self, request, *args, **kwargs):
        deliveryCrewGroup = Group.objects.get(name="Manager")
        pk = kwargs["pk"]
        user = get_object_or_404(User, pk=pk)
        user.groups.remove(deliveryCrewGroup)
        return Response(status=200)
