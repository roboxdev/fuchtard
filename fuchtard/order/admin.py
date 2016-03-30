from django.contrib import admin
from .models import Order, Gift


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    pass


@admin.register(Gift)
class GiftAdmin(admin.ModelAdmin):
    pass
