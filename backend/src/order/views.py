from rest_framework import viewsets, mixins, permissions

from .models import Order, Gift
from .serializers import CheckoutSerializer, GiftSerializer, OrderSerializer


class OrdersViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    permission_classes = [permissions.AllowAny]


class GiftsViewSet(viewsets.ModelViewSet):
    queryset = Gift.objects.all()
    serializer_class = GiftSerializer
    permission_classes = [permissions.AllowAny]

    def get_serializer_context(self):
        return {'request': self.request}


class CheckoutViewset(mixins.CreateModelMixin,
                      viewsets.GenericViewSet):
    queryset = Order.objects.all()
    serializer_class = CheckoutSerializer
    permission_classes = [permissions.AllowAny]
    authentication_classes = []
