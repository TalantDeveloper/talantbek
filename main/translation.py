from .models import About, Experience, Project
from modeltranslation.translator import TranslationOptions, register


@register(About)
class AboutTranslationOptions(TranslationOptions):
    fields = ('content',)


@register(Experience)
class ExperienceTranslationOptions(TranslationOptions):
    fields = ('name', 'position', 'date', 'content')


@register(Project)
class ProjectTranslationOptions(TranslationOptions):
    fields = ('name', 'content')

