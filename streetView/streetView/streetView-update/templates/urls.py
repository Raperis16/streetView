from django.contrib import admin
from django.urls import include, path
from templates import views

app_name = 'templates'
urlpatterns = [
    path('freegame', views.index, name = 'index'),
    path('timet/', views.timet, name = 'timet'),
    path('', views.mainmenu, name = 'mainmenu'),
    path('search', views.search, name = 'search'),
    path('meme', views.meme, name = 'meme'),
]

