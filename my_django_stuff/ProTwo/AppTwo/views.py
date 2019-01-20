from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.
def html_content(request):
    html = '<em> My Second App</em>'
    return HttpResponse(html)
