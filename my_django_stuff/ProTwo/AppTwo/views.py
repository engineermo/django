from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.
def html_content(request):
    html = '<em> My Second App</em>'
    return HttpResponse(html)


def help(request):
    helddist = {'help_insert':'HELP PAGE'}
    return render(request,'appTwo/help.html',context=helddist)
