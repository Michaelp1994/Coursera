from . import models
from django import forms


class BookingForm(forms.ModelForm):
    class Meta:
        model = models.Booking
        fields = "__all__"
