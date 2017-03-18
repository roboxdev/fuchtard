from django.conf.urls import url

from .views import AppView

urlpatterns = [
    url(r'(^$|^cart/|^checkout/)', AppView.as_view(), name='app-view')
]

