from rest_framework.viewsets import ModelViewSet
from .models import UsersRegistrModel
from .serializetors import Users_serializers


# Create your views here.
# class CustomAuthenticationView(LoginView):
#   template_name = 'users/authorization.html'
#   authentication_form = CustomAuthenticationForm
#   def from_valid(self, form):
#     # Add your authentication logic
#     return super().form_valid(form)

class UsersAutorizationViews(ModelViewSet):
    queryset = UsersRegistrModel.objects.all()
    serializer_class = Users_serializers