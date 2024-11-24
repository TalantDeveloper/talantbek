from .models import About, Science, Service, Page, Card, AboutMe, Project
from modeltranslation.translator import TranslationOptions, register


@register(About)
class AboutTranslationOptions(TranslationOptions):
    fields = ('full_name', 'content')


@register(Science)
class ScienceTranslationOptions(TranslationOptions):
    field = ('name',)


@register(Service)
class ServiceTranslationOptions(TranslationOptions):
    fields = ('name', 'content')


@register(Page)
class PageTranslationOptions(TranslationOptions):
    fields = ('name', 'content')


@register(Card)
class CardTranslationOptions(TranslationOptions):
    fields = ('date_time', 'direction', 'company', 'content')


@register(AboutMe)
class AboutMeTranslationOptions(TranslationOptions):
    fields = ('name', 'result')


@register(Project)
class ProjectTranslationOptions(TranslationOptions):
    fields = ('name', 'content')
