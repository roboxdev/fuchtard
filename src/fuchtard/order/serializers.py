from rest_framework import serializers

from food.serializers import FoodItemSerializer
from .models import Cart, Order, Gift


class OrderSerializer(serializers.ModelSerializer):
    cart = serializers.JSONField(write_only=True)

    class Meta:
        model = Order
        fields = (
            'email',
            'name',
            'phone',
            'address',
            'cart',
            'deliver_at',
            'comment',
            'gift_food_item',
        )

    def create(self, validated_data):
        cart_data = validated_data.pop('cart')
        cart = Cart.objects.create_from_dict(cart_data=cart_data)
        order = Order.objects.create(cart=cart, **validated_data)
        return order


class GiftSerializer(serializers.ModelSerializer):
    class Meta:
        model = Gift
        fields = (
            'id',
            'food_item',
            'requirement',
        )
