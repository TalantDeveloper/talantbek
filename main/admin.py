from django.contrib import admin
from .models import About, Language
from modeltranslation.admin import TranslationAdmin


@admin.register(About)
class AboutAdmin(TranslationAdmin):
    list_display = ['id', 'name', 'work_time', 'position']
    list_display_links = ['id', 'name', 'work_time', 'position']


admin.site.register(Language)
