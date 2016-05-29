from django.contrib.contenttypes.fields import GenericForeignKey, GenericRelation
from django.contrib.contenttypes.models import ContentType
from django.db import models
from adminsortable.models import SortableMixin
from adminsortable.fields import SortableForeignKey


class Discount(models.Model):
    class Meta:
        verbose_name = 'Скидка'
        verbose_name_plural = 'Скидки'

    _content_type_limit = models.Q(app_label='food', model='foodtag') | \
                          models.Q(app_label='food', model='foodcategory') | \
                          models.Q(app_label='food', model='fooditem')

    amount = models.DecimalField('Значение', max_digits=7, decimal_places=2,
                                 help_text='Значение <=1 — проценты, значение >1 — абсолютное значение')
    content_type = models.ForeignKey(ContentType, limit_choices_to=_content_type_limit, verbose_name='Применяется к')
    object_id = models.PositiveIntegerField('Идентификатор')
    content_object = GenericForeignKey()


class FoodTag(models.Model):
    class Meta:
        verbose_name = 'Тег'
        verbose_name_plural = 'Теги'
        ordering = ('position',)

    visible = models.BooleanField('Видимый', default=True)
    enabled = models.BooleanField('Включено', default=True)
    position = models.IntegerField('Позиция')
    title = models.CharField('Название', max_length=60)
    slug = models.SlugField()
    discount = GenericRelation(Discount, related_query_name='food_tags')

    def __str__(self):
        return self.title


class FoodCategoryManager(models.Manager):
    def get_query_set(self):
        return super(FoodCategoryManager, self).get_query_set().prefetch_related(
            'fooditem_set__discount',
            'fooditem_set__category__discount',
            'fooditem_set__tags__discount',
        )


class FoodCategory(SortableMixin):
    class Meta:
        verbose_name = 'Категория'
        verbose_name_plural = 'Категории'
        ordering = ('position',)

    # objects = FoodCategoryManager()
    visible = models.BooleanField('Видимая', default=True)
    enabled = models.BooleanField('Включено', default=True)
    position = models.PositiveIntegerField('Позиция', default=0, editable=False, db_index=True)
    expanded = models.BooleanField('Развёрнута', default=True)
    title = models.CharField('Название', max_length=60)
    slug = models.SlugField()
    discount = GenericRelation(Discount, related_query_name='food_categories')

    def __str__(self):
        return self.title


class FoodItem(SortableMixin):
    class Meta:
        verbose_name = 'Блюдо'
        verbose_name_plural = 'Блюда'
        ordering = ('position',)

    visible = models.BooleanField('Видимое', default=True)
    enabled = models.BooleanField('Включено', default=True)
    position = models.PositiveIntegerField('Позиция', default=0, editable=False, db_index=True)
    title = models.CharField('Название', max_length=60)
    photo = models.ImageField('Фотография')
    description = models.TextField('Описание')
    raw_price = models.IntegerField('Первоначальная цена')
    category = SortableForeignKey(FoodCategory, verbose_name='Категории')
    tags = models.ManyToManyField(FoodTag, blank=True, related_name='fooditems', verbose_name='Теги')
    discount = GenericRelation(Discount)

    def __str__(self):
        return self.title

    @property
    def price(self):
        discounts = [i.amount for i in self.discount.all()]
        discounts.extend([i.amount for i in self.category.discount.all()])
        for tag in self.tags.all():
            discounts.extend([i.amount for i in tag.discount.all()])
        if discounts:
            discounts_amount = [d * self.raw_price if d <= 1 else d for d in discounts]
            max_discount = max(discounts_amount)
            return max(0, self.raw_price - max_discount)
        return self.raw_price
