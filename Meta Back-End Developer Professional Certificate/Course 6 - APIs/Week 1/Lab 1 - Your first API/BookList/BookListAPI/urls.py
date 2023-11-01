from django.urls import path
from . import views


urlpatterns = [
    path("books/", views.books)
    # Add URL configuration for the path() function here
]
