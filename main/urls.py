from django.urls import path, include
from . import views

app_name = 'main'

urlpatterns = [
    path('', views.welcome, name='welcome'),

    path('ckeditor/', include('ckeditor_uploader.urls')),
]
