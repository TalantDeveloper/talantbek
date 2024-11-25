from django.shortcuts import render
from .models import About, Science, Service, Page, Card, Skill, AboutMe, Project


def welcome(request):
    sciences = Science.objects.first()
    about = About.objects.first()
    context = {
        'sciences': sciences,
        'about': about,
    }
    return render(request, 'index.html', context)


def services_views(request):
    services = Service.objects.all()
    context = {
        'services': services,
    }
    return render(request, 'services.html', context)


def resume(request):
    experience = Page.objects.first()
    education = Page.objects.all()[1]
    skill = Page.objects.all()[2]
    about_me = Page.objects.all()[3]
    experiences = Card.objects.filter(page=experience)
    educations = Card.objects.filter(page=education)
    skills = Skill.objects.filter(skill=skill)
    abouts_me = AboutMe.objects.all()
    context = {
        'experience': experience,
        'education': education,
        'skill': skill,
        'about_me': about_me,
        'experiences': experiences,
        'educations': educations,
        'skills': skills,
        'abouts_me': abouts_me,
    }
    return render(request, 'resume.html', context)


def portfolio(request):
    projects = Project.objects.all()
    context = {
        'projects': projects,
    }
    return render(request, 'portfolio.html', context)


def contact(request):
    return render(request, 'contact.html')
