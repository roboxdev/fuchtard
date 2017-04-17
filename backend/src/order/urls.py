from django.conf.urls import url

from .views import OrderDetailRedirectView

urlpatterns = [
    url(r'^o/(?P<hashed_id>[0-9]+)/$',
        OrderDetailRedirectView.as_view(), name='order-detail-redirect-view'),
]
