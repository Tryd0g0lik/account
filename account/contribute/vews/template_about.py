from django.shortcuts import render

def get_about_page(request, *args, **kwargs):
  return render(request, template_name='about.html', context={})