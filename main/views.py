from django.shortcuts import render
from .models import About, Experience, Project, Program


def welcome(request):
    about = About.objects.all()
    experience = Experience.objects.all()
    project = Project.objects.all()
    context = {
        'about': about[0],
        'experiences': experience,
        'projects': project,
    }
    return render(request, 'base.html', context)


def index(request):
    return render(request, 'index.html')


def about(request):
    return render(request, 'about.html')


def service(request):
    return render(request, 'service.html')
