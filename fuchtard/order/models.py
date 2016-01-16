import json

from django.contrib.auth.models import User
from django.db import models

from food.models import FoodItem


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
        return self.get(id=Order.hash(hashed_id))


class Order(models.Model):
    objects = OrderManager()
    user = models.ForeignKey(User)
    # phone = models.ForeignKey()
    # address = models.
    cart = models.ForeignKey(Cart)
    deliver_at = models.DateTimeField(null=True)
    comment = models.TextField()


    @property
    def hashed_id(self):
        return self._hash(self.id)

    @staticmethod
    def hash(n):
        return ((0x000FFF & n) << 12) + ((0xFFF000 & n) >> 12)
