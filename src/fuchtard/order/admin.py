from django.contrib import admin
from .models import Order, Gift


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    readonly_fields = ['cart']
    exclude = ['deliver_at']


@admin.register(Gift)
class GiftAdmin(admin.ModelAdmin):
    list_display = ['food_item', 'requirement']
