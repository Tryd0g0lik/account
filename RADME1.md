https://habr.com/ru/articles/538040/
Настройка аутентификации JWT в новом проекте Django
- Настройка аутентификации JWT
- Аутентификация, основанная на сессии
  - CORS
  - CSRF
- Аутентификация, основанная на токенах
- Верификация токенов
- JSON Web Tokens
- Почему JSON Web Tokes лучше обычных токенов?
- Создание приложения, создание пользовательской модели
- Определение AUTH_USER_MODEL в настройках проекта
- Создание и запуск миграций
- Наш первый пользователь
- Регистрация новых пользователей
- Немного о ModelSerializer
- Регистрация пользователя с помощью Postman
- Рендеринг объектов User
- Вход пользователей в систему
- LoginAPIView
- Получение и обновление пользователей
- Аутентификация пользователей
- Сообщить DRF про наш аутентификационный бекенд

## Model Meta options
https://docs.djangoproject.com/en/5.0/ref/models/options/

## API
- `email`:  *This field must not be empty. It's unique and after this it cannot be deleted.*
 - `username`: *This field must not be empty It's unique and after this's can not be deleted \
Her min length is a 3 and max length the 30 symbols.*
  `password`: *This field must not be empty. Minimum 10 and max 3 symbols.*
  `date_joined`: *This field must be empty.*
 - 

|Request|Response|Descriptions|
||||
|`api/v1/account` | Exempli number 1 List |Get the list positions of db `User`|
|`api/v1/account`| Exempli number 1 POST |
|||
|||

### *Exempli number 1 List*
This is a JSON format
```json
[
    {
        "id": 2,
        "email": "work80@mail.ru",
        "username": "root",
        "date_joined": "2024-07-13T17:24:33.855512"
    },
    {
        "id": 78,
        "email": "test@test.ru",
        "username": "Boris",
        "date_joined": "2024-07-22T09:50:39.855512"
    }
]
```
### *Exempli number 2 POST*
This is a JSON format 
```json
{
  "email": "your@email.ru", 
  "username": "Your name",
  "password": "your_password",
  "date_joined": "2024-07-22 09:50:39.104 +0700"
}
```

## в роутере DefaultRouter,
Роутер DefaultRouter ожидает класс представления (viewset), а не обычную функцию.

### Пример как доваить DELETE работая с ModelViewSet 
#### Вариант 1: Использование ViewSet
```python
# views.py
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from .models import UsersRegistrModel
from .serializers import Users_serializers

class UsersAccountViews(viewsets.ModelViewSet):
    queryset = UsersRegistrModel.objects.all()
    serializer_class = Users_serializers

    @action(detail=True, methods=['delete'])
    def remove(self, request, pk=None):
        try:
            user = self.get_object()
            user.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except UsersRegistrModel.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

```
```python
# urls.py
from rest_framework.routers import DefaultRouter
from account.views import UsersAccountViews

router = DefaultRouter()
router.register('account', UsersAccountViews, basename='register')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/', include(router.urls))
]
```
Теперь вы сможете отправлять `DELETE` запросы на `/api/v1/account/<pk>/remove/`.

#### Вариант 2: Отдельный URL
Если вы хотите оставить функцию removeOfUsersAccount как отдельное \
представление, вы можете сделать следующее:
```python
# views.py
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import UsersRegistrModel

@api_view(['DELETE'])
def removeOfUsersAccount(request, pk):
    try:
        user = UsersRegistrModel.objects.get(pk=pk)
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    except UsersRegistrModel.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

```
Затем измените urls.py, чтобы использовать path для регистрации этого представления:
```python
# urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from account.views import UsersAccountViews, removeOfUsersAccount

router = DefaultRouter()
router.register('account', UsersAccountViews, basename='register')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/', include(router.urls)),
    path('api/v1/account/remove/<int:pk>/', removeOfUsersAccount, name='remove')
]
```
Теперь вы сможете отправлять `DELETE` запросы на `/api/v1/account/remove/<pk>/`.