from django.db import models
from ckeditor_uploader.fields import RichTextUploadingField


class Science(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class About(models.Model):
    full_name = models.CharField(max_length=100)
    sciences = models.ManyToManyField(Science)
    content = RichTextUploadingField(verbose_name='Content')
    cv_file = models.FileField(upload_to='cv_files/')
    image = models.ImageField(upload_to='images/')

    def __str__(self):
        return self.full_name


class Service(models.Model):
    name = models.CharField(max_length=100)
    icon_class = models.CharField(max_length=100)
    content = RichTextUploadingField(verbose_name='Content')
    link = models.URLField(verbose_name='Link')

    def __str__(self):
        return self.name


class Experience(models.Model):
    name = models.CharField(max_length=100)
    content = models.TextField()

    def __str__(self):
        return self.name


class Card(models.Model):
    experience = models.ForeignKey(Experience, on_delete=models.SET_NULL, null=True)
    date_time = models.CharField(max_length=100)
    direction = models.CharField(max_length=100)
    company = models.CharField(max_length=100)
    content = models.TextField()

    def __str__(self):
        return self.date_time


class Skill(models.Model):
    name = models.CharField(max_length=100)
    content = models.TextField()

    def __str__(self):
        return self.name


class Course(models.Model):
    name = models.CharField(max_length=100)
    icon_class = models.CharField(max_length=100)
    skill = models.ForeignKey(Skill, on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return self.name


class AboutMe(models.Model):
    name = models.CharField(max_length=100)
    content = models.TextField()

    def __str__(self):
        return self.name


class Engine(models.Model):
    name = models.CharField(max_length=100)
    result = models.CharField(max_length=100)
    about_me = models.ForeignKey(AboutMe, on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return self.name


class Project(models.Model):
    pro_id = models.CharField(max_length=50)
    name = models.CharField(max_length=100)
    content = models.TextField()
    technology = models.CharField(max_length=100)
    live_link = models.CharField(max_length=300)
    github_link = models.CharField(max_length=300)
    image = models.ImageField(upload_to='./project_image')

    def __str__(self):
        return self.name