from django.contrib import admin
from django.urls import include, path
from . import views

app_name = 'templates'
urlpatterns = [
    path('', views.index, name = 'index'),
    path('start', views.start, name = 'start')
]

