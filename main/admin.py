from django.contrib import admin
from .models import About, Program, Experience, Project
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


@admin.register(Project)
class ProjectAdmin(TranslationAdmin):
    list_display = ('id', 'name', 'image', 'url')
    list_display_links = ('id', 'name', 'image', 'url')

    class Metia:
        js = (
            'https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js',
            'https://ajax.googleapis.com/ajax/libs/jqueryui/1.10.2/jquery-ui.min.js',
            'modeltranslation/js/tabbed_translation_fields.js',
        )
        css = {
            'screen': ('modeltranslation/css/tabbed_translation_fields.css',),
        }


admin.site.register(Program, ProgramAdmin)
admin.site.register(Experience, ExperienceAdmin)
