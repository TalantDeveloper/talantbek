from django.shortcuts import render
from .models import About, Language


def welcome(request):
    experience = About.objects.all()
    context = {'experiences': experience}
    return render(request, 'base.html')
