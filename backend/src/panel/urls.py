from django.conf.urls import url

from .views import DashboardView, OrdersView, OrderDetailView

urlpatterns = [
    url(r'^$', DashboardView.as_view(), name='dashboard-view'),
    url(r'^orders/$', OrdersView.as_view(), name='orders-view'),
    url(r'^orders/(?P<hashed_id>[0-9]+)/$', OrderDetailView.as_view(), name='order-detail-view'),
]
