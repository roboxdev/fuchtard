from django.conf.urls import url
from .views import OrderCheckoutView, CartUpdateView, ThankYouView

urlpatterns = [
    url(r'^order/$', OrderCheckoutView.as_view(), name='order-checkout-view'),
    url(r'^cart/update/$', CartUpdateView.as_view(), name='cart-update-view'),
    url(r'^thanks/(?P<hashed_id>[0-9]+)/$', ThankYouView.as_view(), name='thank-you-view'),
]
