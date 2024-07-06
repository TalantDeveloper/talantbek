from .models import About, Language
from modeltranslation.translator import TranslationOptions, register


@register(About)
class AboutTranslationOptions(TranslationOptions):
    fields = ('name', 'work_time', 'position', 'content')

