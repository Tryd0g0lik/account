"""
URL configuration for project project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include, re_path
from django.views.decorators.cache import never_cache
from django.contrib.staticfiles.views import serve

from account.contribute.vews.other_page import other_page, account_other_page
from account.contribute.vews.template_about import get_about_page
from account.contribute.vews.template_basis import get_basis_page
from account.contribute.vews.template_index import get_index_page
from account.routers import router_account
from . import settings
from .rest_routers import router

# 'admin/' Here a page of superadmin
urlpatterns = [
    path('admin/', admin.site.urls),
    path('account/', include(router_account.urlpatterns)),
    path('api/v1/', include(router.urls)),
    
    path('', get_index_page, name='index'),
    path('<str:page>/', other_page, name='other'),
    path('about/', get_about_page,  name="about"),
    
    # re_path(r'*', get_basis_page, name="main"),
]
#
# if settings.DEBUG:
#     urlpatterns.append(path('static/<path:path>', never_cache(serve)))