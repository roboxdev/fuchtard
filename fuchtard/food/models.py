from django.db import models


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
    price = models.IntegerField()
    category = models.ManyToManyField(FoodCategory)
    tags = models.ManyToManyField(FoodTag, blank=True)

    def __str__(self):
        return self.title
