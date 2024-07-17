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
from django.contrib.auth.views import LogoutView
from django.urls import path, include
from account.admin import account_users_site
from .rest_routers import router
from account.views import form_authorisation_onPage, user_get_checking_andRegistration, user_get_uthorization  # , register


# app_name = 'account'
urlpatterns = [
    path('admin/', admin.site.urls),
    path('account/', form_authorisation_onPage, name='account'), # account_users_site.urls),
    path('profile/<int:id>/', user_get_checking_andRegistration, name= 'profile' ), # account_users_site.urls),
    path('profile/page/', user_get_uthorization, name= 'profilepage' ), # account_users_site.urls),
    # path('profile/', LogoutView.as_view(), name='profile' ), # next_page='account:authorization'
    path('api/v1/', include(router.urls)) # ,  namespace='accountApi'
]


