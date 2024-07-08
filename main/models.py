from django.db import models
from ckeditor_uploader.fields import RichTextUploadingField


class About(models.Model):
    content = RichTextUploadingField(verbose_name='content')

    def __str__(self):
        return str(self.id)


class Program(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Experience(models.Model):
    name = models.CharField(max_length=200)
    position = models.CharField(max_length=200, null=True, blank=True)
    date = models.CharField(max_length=200)
    content = RichTextUploadingField(verbose_name='content')
    programs = models.ManyToManyField(Program, null=True, blank=True)
    url = models.URLField(verbose_name='url', null=True, blank=True)

    def __str__(self):
        return self.name
