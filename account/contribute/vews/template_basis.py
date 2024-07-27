from django.shortcuts import render


def get_basis_page(request, *args, **kwargs):
  return render(request, template_name='layout/basis.html', context={})

