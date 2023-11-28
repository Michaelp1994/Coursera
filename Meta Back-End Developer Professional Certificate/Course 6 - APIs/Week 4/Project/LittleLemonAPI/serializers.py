from .models import MenuItem, Cart, Order, OrderItem, Category
from rest_framework import serializers
from django.contrib.auth.models import User


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ["id", "title"]


class MenuItemSerializer(serializers.ModelSerializer):
    category = serializers.StringRelatedField(read_only=True)
    # category = CategorySerializer(read_only=True)
    category_id = serializers.IntegerField(write_only=True)

    class Meta:
        model = MenuItem
        fields = ["id", "title", "price", "featured", "category", "category_id"]
        # extra_kwargs = {"price": {"min_value": 2}, "inventory": {"min_value": 0}}


class CartSerializer(serializers.ModelSerializer):
    menuitem = MenuItemSerializer(read_only=True)
    menuitem_id = serializers.IntegerField(write_only=True)

    class Meta:
        model = Cart
        fields = [
            "id",
            "menuitem",
            "quantity",
            "price",
            "unit_price",
            "menuitem_id",
        ]
        read_only_fields = ["price", "unit_price"]
        extra_kwargs = {
            "quantity": {"min_value": 1},
        }


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            "id",
            "username",
            "email",
        ]


class OrderItemSerializer(serializers.ModelSerializer):
    menuitem = MenuItemSerializer(read_only=True)
    menuitem_id = serializers.IntegerField(write_only=True)

    class Meta:
        model = Cart
        fields = [
            "id",
            "menuitem",
            "quantity",
            "price",
            "unit_price",
            "menuitem_id",
        ]
        read_only_fields = ["price", "unit_price"]
        extra_kwargs = {
            "quantity": {"min_value": 1},
        }


class OrderSerializer(serializers.ModelSerializer):
    order_items = serializers.SerializerMethodField()

    class Meta:
        model = Order
        fields = ["id", "delivery_crew", "status", "total", "date", "order_items"]
        read_only_fields = ["total", "orderitems"]

    def get_order_items(self, order):
        order_items = OrderItem.objects.filter(order=order)
        serializer = OrderItemSerializer(
            order_items, many=True, context={"request": self.context["request"]}
        )
        return serializer.data


class ManagerOrderUpdateSerializer(serializers.ModelSerializer):
    status = serializers.BooleanField(required=False)
    delivery_crew_id = serializers.IntegerField(write_only=True, required=False)

    class Meta:
        model = Order
        fields = ["delivery_crew", "status", "delivery_crew_id"]


class CrewOrderUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ["status"]
