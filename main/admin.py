from django.contrib import admin
from .models import About, Program, Experience
from modeltranslation.admin import TranslationAdmin


@admin.register(About)
class AboutAdmin(TranslationAdmin):
    list_display = ('id',)
    list_display_links = ('id',)


class ProgramAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    list_display_links = ('id', 'name')


class ExperienceAdmin(TranslationAdmin):
    list_display = ('id', 'name', 'position', 'date')
    list_display_links = ('id', 'name', 'position', 'date')
    list_filter = ('position', 'date')


admin.site.register(Program, ProgramAdmin)
admin.site.register(Experience, ExperienceAdmin)
