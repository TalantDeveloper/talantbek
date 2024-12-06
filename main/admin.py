from django.contrib import admin
from .models import About, Science, Service, Page, Card, Skill, AboutMe, Project, Language, SectionPage
from modeltranslation.admin import TranslationAdmin


@admin.register(About)
class AboutAdmin(TranslationAdmin):
    list_display = ('id', 'full_name', 'cv_file', 'image', 'create_at', 'update_at')
    list_display_links = ('id', 'full_name', 'cv_file', 'image')


@admin.register(Science)
class ScienceAdmin(TranslationAdmin):
    list_display = ('id', 'name', 'create_at', 'update_at')
    list_display_links = ('id', 'name')


@admin.register(Service)
class ServiceAdmin(TranslationAdmin):
    list_display = ('id', 'name', 'icon_class', 'link', 'create_at', 'update_at')
    list_display_links = ('id', 'name', 'icon_class')


@admin.register(Page)
class PageAdmin(TranslationAdmin):
    list_display = ('id', 'name', 'content', 'create_at', 'update_at')
    list_display_links = ('id', 'content')

    class Metia:
        js = (
            'https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js',
            'https://ajax.googleapis.com/ajax/libs/jqueryui/1.10.2/jquery-ui.min.js',
            'modeltranslation/js/tabbed_translation_fields.js',
        )
        css = {
            'screen': ('modeltranslation/css/tabbed_translation_fields.css',),
        }


@admin.register(Card)
class CardAdmin(TranslationAdmin):
    list_display = ('id', 'page', 'date_time', 'direction', 'company')
    list_display_links = ('id', 'page', 'date_time', 'direction', 'company')


@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'icon_class', 'skill', 'create_at', 'update_at')
    list_display_links = ('id', 'name', 'icon_class', 'skill')


@admin.register(AboutMe)
class AboutMeAdmin(TranslationAdmin):
    list_display = ('id', 'name', 'result', 'about_me', 'create_at', 'update_at')
    list_display_links = ('id', 'name', 'result', 'about_me')


@admin.register(Project)
class ProjectAdmin(TranslationAdmin):
    list_display = ('id', 'name', 'technology', 'live_link', 'github_link', 'create_at', 'update_at')
    list_display_links = ('id', 'name', 'technology', 'live_link', 'github_link')


@admin.register(Language)
class LanguageAdmin(TranslationAdmin):
    list_display = ('id', 'base', 'base_url', 'first', 'first_url', 'second', 'second_url')
    list_display_links = ('id', 'base', 'base_url')


@admin.register(SectionPage)
class SectionPageAdmin(TranslationAdmin):
    list_display = ('id', 'name', 'create_at', 'update_at')
    list_display_links = ('id', 'name')