
export const APP_WS_URL = 'ws://localhost:8000/ws'
export const APP_SERVER_PORT = '8000'
export const APP_SERVER_HOST = 'http://127.0.0.1'
export const APP_API_REGISTRATION = '/api/v1/account/'
export const APP_API_AUTHORIZSTION = 'account/' 
export const APP_REGEX_EMAIL = /^[A-Za-z][A-Za-z0-9_-]+@[a-z]{2,10}\.[a-z]{2,4}$/;
export const APP_REGEX_USERNAME = /^[A-Za-z][A-Za-z0-9_]{3,10}$/;
// куда переходим после не успешной авторизации
export const APP_LOGIN_URL = 'http://127.0.0.1/account/'


// форма регистрации аккаунта
const pHtml = document.createElement('p');
pHtml.className = 'attention';
pHtml.innerText = 'пользователь с таким email уже существует.'
export const APP_INFO_FORM_REGIST_USER = pHtml;
