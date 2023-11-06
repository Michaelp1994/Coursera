from django.shortcuts import render

# Create your views here for Home, Menu, About and Booking


def home(request):
    data = {}
    return render(request, "index.html", data)


def menu(request):
    data = {}
    return render(request, "menu.html", data)


def about(request):
    data = {}
    return render(request, "about.html", data)


def book(request):
    data = {}
    return render(request, "book.html", data)
