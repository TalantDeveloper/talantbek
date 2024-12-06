from django.db import models
from ckeditor_uploader.fields import RichTextUploadingField


class About(models.Model):
    full_name = models.CharField(max_length=100, verbose_name="Full name")  # Multilanguage
    content = RichTextUploadingField(verbose_name='Content')  # Multilanguage
    cv_file = models.FileField(upload_to='./cvfile/')
    image = models.ImageField(upload_to='./image/')

    create_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.full_name


class Science(models.Model):  # Science model for Home page animation text
    name = models.CharField(max_length=100, verbose_name="Name")  # Multilanguage

    create_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


class Service(models.Model):  # Service model for Services page
    name = models.CharField(max_length=100, verbose_name="Name")  # Multilanguage
    icon_class = models.CharField(max_length=100, verbose_name="Boxicons icon class")
    content = RichTextUploadingField(verbose_name='Content')  # Multilanguage
    link = models.URLField(verbose_name='Link')

    create_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


class Page(models.Model):  # Page model for Resume Page Card, Skill and About Me section
    name = models.CharField(max_length=100, verbose_name="Name")  # Multilanguage
    content = models.TextField(verbose_name="Content")  # Multilanguage

    create_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


class Card(models.Model):  # Card model for Resume page Experience and Education sections
    page = models.ForeignKey(Page, on_delete=models.SET_NULL, null=True, verbose_name="Experience or Education")
    date_time = models.CharField(max_length=100, verbose_name="Date day")  # Multilanguage
    direction = models.CharField(max_length=100, verbose_name="Yo'nalish")  # Multilanguage
    company = models.CharField(max_length=100, verbose_name="Company")  # Multilanguage
    content = models.TextField(verbose_name="Content")  # Multilanguage

    create_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.date_time


class Skill(models.Model):  # Skills model for Resume page Skills section
    name = models.CharField(max_length=100, verbose_name="Skills Name")
    icon_class = models.CharField(max_length=100, verbose_name="Boxicons Icon Class")
    skill = models.ForeignKey(Page, on_delete=models.SET_NULL, null=True, verbose_name="Skill")

    create_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


class AboutMe(models.Model):  # About Me models for Resume page About Me section
    name = models.CharField(max_length=100, verbose_name="Type")  # Multilanguage
    result = models.CharField(max_length=100, verbose_name="Content")  # Multilanguage
    about_me = models.ForeignKey(Page, on_delete=models.SET_NULL, null=True, verbose_name="About Me")

    create_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


class Project(models.Model):  # Project Models for Portfolio Page
    pro_id = models.CharField(max_length=50, verbose_name="Project Number")
    name = models.CharField(max_length=200, verbose_name="Project Name")  # Multilanguage
    content = models.TextField(verbose_name="Content")  # Multilanguage
    technology = models.CharField(max_length=100, verbose_name="Technology")
    live_link = models.CharField(max_length=300, verbose_name="Project live link")
    github_link = models.CharField(max_length=300, verbose_name="Project Github link", null=True)
    image = models.ImageField(upload_to='./project/')

    create_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


class Language(models.Model):
    base = models.CharField(max_length=20)
    base_url = models.CharField(max_length=20)
    base_img = models.ImageField(upload_to='images/', null=True)
    first = models.CharField(max_length=20)
    first_url = models.CharField(max_length=20)
    first_img = models.ImageField(upload_to='images/', null=True)
    second = models.CharField(max_length=20)
    second_url = models.CharField(max_length=20)
    second_img = models.ImageField(upload_to='images/', null=True)

    create_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.base


class SectionPage(models.Model):
    name = models.CharField(max_length=200, verbose_name="Section Name")
    content = RichTextUploadingField(verbose_name='Content')

    create_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
