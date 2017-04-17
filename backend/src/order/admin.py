from django.contrib import admin
from django.utils.html import format_html

from .models import Order, OrderDetails, Gift


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    exclude = ['deliver_at', 'cart']
    list_display = [
        'hashed_id',
        'order_created_timestamp',
        'name',
        'email',
        'phone',
        'street',
        'building',
        'apartment',
        'comment',
    ]


@admin.register(OrderDetails)
class OrderDetailsAdmin(admin.ModelAdmin):
    actions = None
    list_display = []
    fields = [
        'order_number',
        'order_created_timestamp',
        'name',
        'email',
        'phone',
        'street',
        'building',
        'apartment',
        'floor',
        'comment',
        'total',
        'gift_food_item',
        'cart_items',
    ]

    def get_readonly_fields(self, request, obj=None):
        return self.fields

    def get_queryset(self, request):
        qs = super(OrderDetailsAdmin, self).get_queryset(request)
        return qs.prefetch_related(
            'cart__cartitem_set__product__tags__discount',
            'cart__cartitem_set__product__category__discount',
            'cart__cartitem_set__product__discount',
        )

    def has_add_permission(self, request):
        return False

    def has_delete_permission(self, request, obj=None):
        return False

    def order_number(self, obj):
        return format_html(
            '<a href="{}">{}</a>',
            obj.edit_url,
            obj.hashed_id,
        )
    order_number.short_description = 'Номер заказа'

    def total(self, obj):
        return '{}₸'.format(obj.cart.total_price)
    total.short_description = 'Итого'

    def cart_items(self, obj):
        return obj.cart.cart_items
    cart_items.short_description = 'Корзина'


@admin.register(Gift)
class GiftAdmin(admin.ModelAdmin):
    list_display = ['food_item', 'requirement']
