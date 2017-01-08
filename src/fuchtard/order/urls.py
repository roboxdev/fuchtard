from django.conf.urls import url
from django.views.generic import TemplateView

from .views import OrderCheckoutView, CartUpdateView

urlpatterns = [
    url(r'^order/$', OrderCheckoutView.as_view(), name='order-checkout-view'),
    url(r'^cart/update/$', CartUpdateView.as_view(), name='cart-update-view'),
    url(r'^thanks/(?P<hashed_id>[0-9]+)/$', TemplateView.as_view(template_name='order/thank_you.html'), name='thank-you-view'),
]
