from django.contrib.contenttypes.fields import GenericForeignKey, GenericRelation
from django.contrib.contenttypes.models import ContentType
from django.db import models


class Discount(models.Model):
    amount = models.DecimalField(max_digits=7, decimal_places=2)
    content_type = models.ForeignKey(ContentType)
    object_id = models.PositiveIntegerField()
    content_object = GenericForeignKey()


class FoodTag(models.Model):
    class Meta:
        verbose_name = 'Тег'
        verbose_name_plural = 'Теги'
        ordering = ('position', )
    visible = models.BooleanField(default=True)
    enabled = models.BooleanField(default=True)
    position = models.IntegerField()
    slug = models.SlugField()
    title = models.CharField(max_length=60)
    discount = GenericRelation(Discount, related_query_name='food_tags')

    def __str__(self):
        return self.title


class FoodCategory(models.Model):
    class Meta:
        verbose_name = 'Категория'
        verbose_name_plural = 'Категории'
        ordering = ('position', )
    visible = models.BooleanField(default=True)
    enabled = models.BooleanField(default=True)
    position = models.IntegerField()
    expanded = models.BooleanField(default=True)
    # slug = models.SlugField()
    title = models.CharField(max_length=60)
    discount = GenericRelation(Discount, related_query_name='food_categories')

    def __str__(self):
        return self.title


class FoodItem(models.Model):
    class Meta:
        verbose_name = 'Блюдо'
        verbose_name_plural = 'Блюда'
        ordering = ('position', )
    visible = models.BooleanField(default=True)
    enabled = models.BooleanField(default=True)
    position = models.IntegerField()
    title = models.CharField(max_length=60)
    photo = models.ImageField()
    description = models.TextField()
    raw_price = models.IntegerField()
    category = models.ManyToManyField(FoodCategory)
    tags = models.ManyToManyField(FoodTag, blank=True)
    discount = GenericRelation(Discount)

    def __str__(self):
        return self.title

    @property
    def price(self):
        discounts = [i.amount for i in self.discount.all()]
        for cat in self.category.all():
            discounts.extend([i.amount for i in cat.discount.all()])
        for tag in self.tags.all():
            discounts.extend([i.amount for i in tag.discount.all()])
        # discounts = list(self.discount.values_list('amount', flat=True))
        # discounts.extend(list(self.category.values_list('discount__amount', flat=True)))
        # discounts.extend(list(self.tags.values_list('discount__amount', flat=True)))
        if discounts:
            discounts_amount = [d*self.raw_price if d <= 1 else d for d in discounts]
            max_discount = max(discounts_amount)
            return max(0, self.raw_price-max_discount)
        return self.raw_price
