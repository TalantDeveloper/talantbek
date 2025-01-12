from django.shortcuts import render, redirect, get_object_or_404
from .models import About, Science, Service, Page, Card, Skill, AboutMe, Project, Language, SectionPage
from .function import get_languages


def welcome(request):
    about = About.objects.first()
    language = get_languages()
    context = {
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
    project_first = Project.objects.first()
    projects = Project.objects.all()
    projects_check = projects[1:]
    language = get_languages()
    context = {
        'project_first': project_first,
        'projects_check': projects_check,
        'projects': projects,
        'language': language,
    }
    return render(request, 'portfolio.html', context)


def contact(request):
    if request.method == 'POST':
        return redirect('main:welcome')
    language = get_languages()
    context = {
        'language': language,
    }
    return render(request, 'contact.html', context)


def page_views(request, pk):
    try:
        page = SectionPage.objects.get(pk=pk)
    except SectionPage.DoesNotExist:
        return redirect('main:welcome')
    language = get_languages()
    context = {
        'language': language,
        'page': page,
    }
    return render(request, 'page.html', context)


def not_fount(reqeust, name):
    return render(reqeust, 'notFound.html', {'name': name})
