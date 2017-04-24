from adminsortable.models import SortableMixin
from django.db import models


class Banner(SortableMixin):
    class Meta:
        verbose_name = 'Баннер'
        verbose_name_plural = 'Баннеры'
        ordering = ('position',)

    position = models.PositiveIntegerField('Позиция', default=0, editable=False, db_index=True)
    image = models.ImageField('Изображение', upload_to='promo_images/')
    heading = models.CharField('Заголовок', max_length=60)
    subheading = models.CharField('Подзаголовок', max_length=255)
    url = models.CharField('Ссылка', max_length=255, blank=True)

    def __str__(self):
        return self.heading
