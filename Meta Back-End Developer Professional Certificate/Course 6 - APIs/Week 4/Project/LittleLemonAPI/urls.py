from django.urls import path
from . import views

urlpatterns = [
    path("menu-items", views.MenuItemsView.as_view()),
    path("menu-items/<int:pk>", views.SingleMenuItemView.as_view()),
    path("cart/menu-items", views.CartView.as_view()),
    path("orders", views.OrdersView.as_view()),
    path("orders/<int:pk>", views.SingleOrderView.as_view()),
    path("groups/manager/users", views.ManagersView.as_view()),
    path("groups/manager/users/<int:pk>", views.SingleManagerView.as_view()),
    path("groups/delivery-crew/users", views.DeliveryCrewsView.as_view()),
    path("groups/delivery-crew/users/<int:pk>", views.SingleDeliveryCrewView.as_view()),
]
