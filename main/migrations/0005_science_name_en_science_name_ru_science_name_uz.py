# Generated by Django 5.0.6 on 2024-12-08 07:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0004_sectionpage'),
    ]

    operations = [
        migrations.AddField(
            model_name='science',
            name='name_en',
            field=models.CharField(max_length=100, null=True, verbose_name='Name'),
        ),
        migrations.AddField(
            model_name='science',
            name='name_ru',
            field=models.CharField(max_length=100, null=True, verbose_name='Name'),
        ),
        migrations.AddField(
            model_name='science',
            name='name_uz',
            field=models.CharField(max_length=100, null=True, verbose_name='Name'),
        ),
    ]
