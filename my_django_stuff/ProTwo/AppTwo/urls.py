from django.conf.urls import include
from django.conf.urls import url
from AppTwo import views
from django.urls import path


urlpatterns = [
# path('hist/',views.help, name='help'),
url(r'^$',views.help, name='help')
]
