from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.


def home(request):
    response = "<html><body><h1> Welcome to Little Lemon! </h1></body></html>"
    return HttpResponse(response)
