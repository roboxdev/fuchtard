import json

from django.contrib.auth.models import User
from django.contrib.postgres.fields import JSONField
from django.db import models
from django.db.models import Sum, F

from food.models import FoodItem
from order.helpers import shifthash


class Cart(models.Model):
    class Meta:
        verbose_name = 'Корзина'
        verbose_name_plural = 'Корзины'

    @property
    def total_price(self):
        total = self.cartitem_set.aggregate(cart_total_price=Sum(F('history_price') * F('quantity'))) \
            .get('cart_total_price', 0)
        return total

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
                                       history_price=food_item.price, ))
        CartItem.objects.bulk_create(cart_items)


class CartItem(models.Model):
    class Meta:
        verbose_name = 'Содержимое корзины'
        verbose_name_plural = 'Содержимое корзины'

    cart = models.ForeignKey(Cart)
    product = models.ForeignKey(FoodItem)
    quantity = models.IntegerField()
    history_price = models.IntegerField(null=True)

    @property
    def price(self):
        return self.product.price


class OrderManager(models.Manager):
    def get_by_hash(self, hashed_id):
        return self.get(id=shifthash(hashed_id))


class Order(models.Model):
    class Meta:
        verbose_name = 'Заказ'
        verbose_name_plural = 'Заказы'
    objects = OrderManager()
    email = models.CharField(verbose_name='Email', max_length=60)
    user = models.CharField(verbose_name='Имя', max_length=60)
    phone = models.CharField(verbose_name='Телефон', max_length=20)
    address = JSONField(verbose_name='Адрес')
    cart = models.OneToOneField(Cart)
    deliver_at = models.DateTimeField(verbose_name='Доставка ко времени', null=True, blank=True)
    comment = models.TextField(verbose_name='Комментарий', blank=True)
    gift_food_item = models.ForeignKey(FoodItem, null=True, blank=True)

    @property
    def hashed_id(self):
        return shifthash(self.id)


class Gift(models.Model):
    class Meta:
        verbose_name = 'Подарок'
        verbose_name_plural = 'Подарки'
        ordering = ('requirement', )
    food_item = models.ForeignKey(FoodItem)
    requirement = models.IntegerField()

    def __str__(self):
        return self.food_item.title

    def json_repr(self):
        return json.dumps({
            'food_item__title': self.food_item.title,
            'requirement': self.requirement
        })
