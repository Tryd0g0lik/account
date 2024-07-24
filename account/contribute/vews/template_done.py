from django.views.generic.base import  TemplateView

class RegisterDoneView(TemplateView):
  template_name = "user/register_done.html"