from django.conf.urls import url
from .views import OrderCheckoutView

urlpatterns = [
    url(r'^order/', OrderCheckoutView.as_view(), name='order-checkout-view'),
]
