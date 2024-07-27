from django.http import Http404, HttpResponse
from django.template import TemplateDoesNotExist
from django.template.loader import get_template
''' 404 code '''

def account_other_page(request, page):
  try:
    pass
    template = get_template(r'account/' + page + '.html')
  except TemplateDoesNotExist:
    raise Http404
  return HttpResponse(template.render(request=request))

def other_page(request, page):
  try:
    template = get_template(page + '.html')
  except TemplateDoesNotExist:
    raise Http404
  return HttpResponse(template.render(request=request))
