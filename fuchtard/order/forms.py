from django.forms import Form, ModelForm
from .models import Order


class OrderCheckoutForm(ModelForm):
    class Meta:
        model = Order
        fields = [
            'email',
            'user',
            'phone',
            'address',
            'cart',
            'deliver_at',
            'comment',
        ]
