from rest_framework import viewsets, mixins

from .models import Order, Gift
from .serializers import CheckoutSerializer, GiftSerializer, OrderSerializer


class OrdersViewSet(mixins.RetrieveModelMixin,
                    viewsets.GenericViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer


class GiftsViewSet(mixins.ListModelMixin,
                   viewsets.GenericViewSet):
    queryset = Gift.objects.all()
    serializer_class = GiftSerializer

    def get_serializer_context(self):
        return {'request': self.request}


class CheckoutViewset(mixins.CreateModelMixin,
                      viewsets.GenericViewSet):
    queryset = Order.objects.all()
    serializer_class = CheckoutSerializer
    permission_classes = []
