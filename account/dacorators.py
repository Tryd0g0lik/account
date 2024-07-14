from account.validators import min_length_validators
from django.core.exceptions import ValidationError

def decorators_min_length_validators(fun: object):
  '''
  :param fun: This's for a validator 'min_length_validators'. \
   That is change the minimum value. Default minimum quantity is three/3. \
   Do change the less when int 3 is not possible
  :return: True or Error
  '''
  
  def wrapper(**kwargs):
	'''
	:param kwargs: It's template `kwarqs = {'text': string, 'quantity': integer}`. \
	 `kwargs.text` that is simple string. \
	 `kwargs.quantity` that is a new minimum values. It must be >= 3
	:return: True or Error
	'''
	message = '[decorators_min_length_validators]: Check data'
	try:
	  if 'text' in kwargs.keys() and type(kwargs.text) == str:
		fun(kwargs.text)
	  
	except AttributeError:
		print(message)
	 
	if ('quantity' not in kwargs.keys() or  type(kwargs.quantity) != int) or \
	  len(kwargs.text) > kwargs.quantity:
	  raise ValidationError(
	  '%(value) contains invalid length. Min length is 3 symbols',
	  params = { 'value': kwargs.text }
	)
  	return True
  return wrapper