from django.shortcuts import render
from django.http import HttpResponse #TODO:  this line was imported by me --1

# Create your views here.
def index(request):
    return HttpResponse("Hello World")
