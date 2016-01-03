from django.contrib.auth.models import User
from django.db import models

from food.models import FoodItem


class Cart(models.Model):
    pass


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
