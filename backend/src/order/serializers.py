from hashid_field.rest import HashidSerializerCharField
from rest_framework import serializers

from .models import Cart, Order, Gift, CartItem


class CartItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = CartItem
        fields = (
            'product',
            'quantity',
            'history_price',
        )


class CartSerializer(serializers.ModelSerializer):
    items = CartItemSerializer(source='cartitem_set', many=True)

    class Meta:
        model = Cart
        fields = (
            'items',
        )


class OrderSerializer(serializers.ModelSerializer):
    id = HashidSerializerCharField(source_field='order.Order.id')
    cart = CartSerializer()

    class Meta:
        model = Order
        fields = (
            'id',
            'order_created_timestamp',
            'cart',
            'gift_food_item',
        )


class CheckoutSerializer(serializers.ModelSerializer):
    id = HashidSerializerCharField(source_field='order.Order.id', read_only=True)
    cart = serializers.JSONField(write_only=True)

    class Meta:
        model = Order
        fields = (
            'id',
            'order_created_timestamp',
            'email',
            'name',
            'phone',
            'street',
            'building',
            'apartment',
            'floor',
            'cart',
            'deliver_at',
            'comment',
            'gift_food_item',
        )
        extra_kwargs = {
            'order_created_timestamp': {'read_only': True},
        }

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
