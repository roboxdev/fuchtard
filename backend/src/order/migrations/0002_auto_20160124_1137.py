# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2016-01-24 05:37
from __future__ import unicode_literals

import django.contrib.postgres.fields.jsonb
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('order', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='address',
            field=django.contrib.postgres.fields.jsonb.JSONField(default='{}', verbose_name='Адрес'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='order',
            name='email',
            field=models.CharField(default='', max_length=60, verbose_name='Email'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='order',
            name='phone',
            field=models.CharField(default='', max_length=20, verbose_name='Телефон'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='order',
            name='cart',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='order.Cart'),
        ),
        migrations.AlterField(
            model_name='order',
            name='comment',
            field=models.TextField(blank=True, verbose_name='Комментарий'),
        ),
        migrations.AlterField(
            model_name='order',
            name='deliver_at',
            field=models.DateTimeField(blank=True, null=True, verbose_name='Доставка ко времени'),
        ),
        migrations.AlterField(
            model_name='order',
            name='user',
            field=models.CharField(max_length=60, verbose_name='Имя'),
        ),
    ]