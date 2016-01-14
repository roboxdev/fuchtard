from django.conf.urls import url
from .views import OrderCheckoutView, CartUpdateView

urlpatterns = [
    url(r'^order/', OrderCheckoutView.as_view(), name='order-checkout-view'),
    url(r'^cart/update/', CartUpdateView.as_view(), name='cart-update-view'),
]
