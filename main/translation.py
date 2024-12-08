from .models import About, Science, Service, Page, Card, AboutMe, Project, Language, SectionPage
from modeltranslation.translator import TranslationOptions, register


@register(About)
class AboutTranslationOptions(TranslationOptions):
    fields = ('full_name', 'content')


@register(Science)
class ScienceTranslationOptions(TranslationOptions):
    fields = ('name',)


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


@register(Language)
class LanguageTranslationOptions(TranslationOptions):
    fields = ('base', 'base_url', 'base_img', 'first', 'first_url', 'first_img', 'second', 'second_url', 'second_img')


@register(SectionPage)
class SectionTranslationOptions(TranslationOptions):
    fields = ('name', 'content')
