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


class OrderSerializer(serializers.ModelSerializer):
    id = HashidSerializerCharField(source_field='order.Order.id')
    cart = CartItemSerializer(source='cart.cartitem_set', many=True)

    class Meta:
        model = Order
        fields = (
            'id',
            'hashed_id',
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
            'hashed_id',
            'order_created_timestamp',
            'email',
            'name',
            'phone',
            'street',
            'building',
            'apartment',
            'floor',
            'cart',
            'comment',
            'gift_food_item',
        )
        extra_kwargs = {
            'order_created_timestamp': {'read_only': True},
            'hashed_id': {'read_only': True},
        }

    def create(self, validated_data):
        cart_data = validated_data.pop('cart')
        cart = Cart.objects.create_from_dict(cart_data=cart_data)
        order = Order.objects.create(cart=cart, **validated_data)
        order.notify_restaurant()
        # TODO: check gift
        return order


class GiftSerializer(serializers.ModelSerializer):
    class Meta:
        model = Gift
        fields = (
            'id',
            'food_item',
            'requirement',
        )
