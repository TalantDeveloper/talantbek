from django.shortcuts import render
# from .models import About, Experience, Project, Program


def welcome(request):
    return render(request, 'index.html')


def services(request):
    return render(request, 'services.html')


def resume(request):
    return render(request, 'resume.html')


def portfolio(request):
    return render(request, 'portfolio.html')


def contact(request):
    return render(request, 'contact.html')
