from django.conf.urls import url

from .views import OrderDetailView

urlpatterns = [
    url(r'^orders/(?P<hashed_id>[0-9]+)/$', OrderDetailView.as_view(), name='order-detail-view'),
]
