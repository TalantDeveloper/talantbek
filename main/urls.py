from django.urls import path, include
from . import views

app_name = 'main'

urlpatterns = [
    path('', views.welcome, name='welcome'),
    path('services/', views.services, name='services'),
    path('resume/', views.resume, name='resume'),
    path('portfolio/', views.portfolio, name='portfolio'),
    path('contact/', views.contact, name='contact'),
]
