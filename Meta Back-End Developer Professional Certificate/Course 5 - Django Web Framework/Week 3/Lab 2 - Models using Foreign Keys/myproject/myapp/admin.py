from django.contrib import admin
from .models import Drinks, DrinksCategory

# Import the models from models.py

# Register your models here.
admin.site.register(Drinks)
admin.site.register(DrinksCategory)
