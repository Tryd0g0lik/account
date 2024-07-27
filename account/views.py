from django.contrib.auth.views import LoginView, LogoutView
from django.contrib.auth.decorators import login_required
from django.contrib.auth.mixins import LoginRequiredMixin
from django.shortcuts import render

from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status
from rest_framework.viewsets import ModelViewSet

from .models import UsersRegistrModel
from .serializers import Users_serializers
# Note!!:Others is by path 'account/contribute'

class ALogoutView(LoginRequiredMixin, LogoutView):
    template_name = "users/logout.html"

@login_required
def profile(request):
    return render(request, 'users/profile.html')


class ALoginView(LoginView):
    template_name = "users/login.html"

# That is API db- User ['GET/list', 'CREATE', 'PUT', 'DELETE']
class UsersAccountViews(ModelViewSet):
    queryset = UsersRegistrModel.objects.all()
    serializer_class = Users_serializers

    @action(detail=True, methods=['DELETE'])
    def remove(self):
        try:
            user = self.get_object()
            user.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except UsersAccountViews.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
