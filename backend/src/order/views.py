from rest_framework import viewsets, mixins, permissions

from .models import Order, Gift
from .serializers import CheckoutSerializer, GiftSerializer, OrderSerializer


class OrdersViewSet(mixins.RetrieveModelMixin,
                    viewsets.GenericViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    permission_classes = [permissions.AllowAny]


class DashOrdersViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer


class GiftsViewSet(mixins.ListModelMixin,
                   viewsets.GenericViewSet):
    queryset = Gift.objects.all()
    serializer_class = GiftSerializer
    permission_classes = [permissions.AllowAny]

    def get_serializer_context(self):
        return {'request': self.request}


class DashGiftsViewSet(viewsets.ModelViewSet):
    queryset = Gift.objects.all()
    serializer_class = GiftSerializer


class CheckoutViewset(mixins.CreateModelMixin,
                      viewsets.GenericViewSet):
    queryset = Order.objects.all()
    serializer_class = CheckoutSerializer
    permission_classes = [permissions.AllowAny]
    authentication_classes = []
