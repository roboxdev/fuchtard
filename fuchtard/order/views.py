from django.shortcuts import render
from django.views.generic import FormView

from .forms import OrderCheckoutForm


class OrderCheckoutView(FormView):
    form_class = OrderCheckoutForm
    template_name = 'order/order_checkout.html'
