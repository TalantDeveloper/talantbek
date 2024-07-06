from django.db import models
from ckeditor_uploader.fields import RichTextUploadingField


class Language(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class About(models.Model):
    name = models.CharField(max_length=200, verbose_name="Name")
    work_time = models.CharField(max_length=200, verbose_name="Work Time")
    position = models.CharField(max_length=200, verbose_name="Position", null=True, blank=True)
    content = RichTextUploadingField()
    languages = models.ManyToManyField(Language, verbose_name="Languages", through='LanguageShip')

    def __str__(self):
        return self.name


class LanguageShip(models.Model):
    language = models.ForeignKey(Language, verbose_name="Language", on_delete=models.CASCADE)
    about = models.ForeignKey(About, verbose_name="About", on_delete=models.CASCADE)

    def __str__(self):
        return self.language.name

