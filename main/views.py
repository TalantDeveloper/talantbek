from django.shortcuts import render
from .models import About


def welcome(request):
    about = About.objects.all()
    context = {'about': about[0]}
    return render(request, 'base.html', context)
