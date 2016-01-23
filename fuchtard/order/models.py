import json

from django.contrib.auth.models import User
from django.contrib.postgres.fields import JSONField
from django.db import models

from food.models import FoodItem
from order.helpers import shifthash


class Cart(models.Model):
    # cart_total_price = IntegerField()

    # @property
    # def total_price:
    #     return self

    def json_repr(self):
        serialized = json.dumps({cart_item.product.id: cart_item.quantity for cart_item in self.cartitem_set.all()})
        return serialized

    def json_update(self, json_cart):
        dicted_cart = json.loads(json_cart)
        cart_items = []
        self.cartitem_set.all().delete()
        for food_item_id, quantity in dicted_cart.items():
            try:
                food_item = FoodItem.objects.get(id=int(food_item_id))
            except FoodItem.DoesNotExist:
                continue
            cart_items.append(CartItem(cart=self,
                                       product=food_item,
                                       quantity=quantity,
                                       price=0, ))
        CartItem.objects.bulk_create(cart_items)


class CartItem(models.Model):
    cart = models.ForeignKey(Cart)
    product = models.ForeignKey(FoodItem)
    quantity = models.IntegerField()
    price = models.IntegerField()


class OrderManager(models.Manager):
    def get_by_hash(self, hashed_id):
        return self.get(id=shifthash(hashed_id))


class Order(models.Model):
    objects = OrderManager()
    email = models.CharField(verbose_name='Email', max_length=60)
    user = models.CharField(verbose_name='Имя', max_length=60)
    phone = models.CharField(verbose_name='Телефон', max_length=20)
    address = JSONField(verbose_name='Адрес', )
    cart = models.OneToOneField(Cart)
    deliver_at = models.DateTimeField(verbose_name='Доставка ко времени', null=True)
    comment = models.TextField(verbose_name='Комментарий', )

    @property
    def hashed_id(self):
        return shifthash(self.id)


