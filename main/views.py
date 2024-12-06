from django.shortcuts import render
from .models import About, Science, Service, Page, Card, Skill, AboutMe, Project, Language
from .function import get_languages


def welcome(request):
    sciences = Science.objects.first()
    about = About.objects.first()
    language = get_languages()
    context = {
        'sciences': sciences,
        'about': about,
        'language': language,
    }
    return render(request, 'index.html', context)


def services_views(request):
    services = Service.objects.all()
    language = get_languages()
    context = {
        'services': services,
        'language': language,
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
    language = get_languages()
    context = {
        'experience': experience,
        'education': education,
        'skill': skill,
        'about_me': about_me,
        'experiences': experiences,
        'educations': educations,
        'skills': skills,
        'abouts_me': abouts_me,
        'language': language,
    }
    return render(request, 'resume.html', context)


def portfolio(request):
    projects = Project.objects.all()
    language = get_languages()
    context = {
        'projects': projects,
        'language': language,
    }
    return render(request, 'portfolio.html', context)


def contact(request):
    language = get_languages()
    context = {
        'language': language,
    }
    return render(request, 'contact.html', context)


def page_views(request):
    language = get_languages()
    context = {
        'language': language,
    }
    return render(request, 'page.html', context)
