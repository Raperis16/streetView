from django.contrib import admin
from django.urls import include, path
from . import views

app_name = 'templates'
urlpatterns = [
    path('', views.index, name = 'index'),
    path('timet/', views.timet, name = 'timet')
]

