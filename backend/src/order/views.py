from rest_framework import viewsets, mixins

from .models import Order, Gift
from .serializers import OrderSerializer, GiftSerializer


class GiftsViewSet(mixins.ListModelMixin,
                   viewsets.GenericViewSet):
    queryset = Gift.objects.all()
    serializer_class = GiftSerializer

    def get_serializer_context(self):
        return {'request': self.request}


class OrdersViewSet(mixins.CreateModelMixin,
                    viewsets.GenericViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    permission_classes = []

    def perform_create(self, serializer):
        super(OrdersViewSet, self).perform_create(serializer)
        # TODO: fire notifications self.object.notify_restaurant()
        # TODO: check gift
