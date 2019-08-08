from django.shortcuts import render



# Create your views here.




def index(request):
    return render (request, 'test.html')

def timet(request):
    return render (request, 'start.html')

def mainmenu(request):
    return render (request, 'mainmenu.html')

def search(request):
    return render (request, 'search.html')

def meme(request):
    return render (request, 'meme.html')
