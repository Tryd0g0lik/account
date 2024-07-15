from rest_framework.routers import DefaultRouter

from account.views import UsersAutorizationViews

router = DefaultRouter()


router.register(r'accounts', UsersAutorizationViews, basename='register')
