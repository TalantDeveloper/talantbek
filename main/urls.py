from django.urls import path, include
from . import views

app_name = 'main'

urlpatterns = [
    path('', views.welcome, name='welcome'),
    path('services/', views.services_views, name='services'),
    path('resume/', views.resume, name='resume'),
    path('portfolio/', views.portfolio, name='portfolio'),
    path('contact/', views.contact, name='contact'),
    path('page/', views.page_views, name='page'),
]
