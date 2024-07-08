from .models import About, Experience
from modeltranslation.translator import TranslationOptions, register


@register(About)
class AboutTranslationOptions(TranslationOptions):
    fields = ('content',)


@register(Experience)
class ExperienceTranslationOptions(TranslationOptions):
    fields = ('name', 'position', 'date', 'content')


