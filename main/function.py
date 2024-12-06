from .models import Language


def get_languages():
    return Language.objects.first()

