from django.urls import path
from django.conf.urls import url
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
  path('', views.index)
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)


urlpatterns += [

    # match the root
    url(r'^$', views.index),]
    # # match all other pages
    # url(r'^(?:.*)/?$', views.index),]
   