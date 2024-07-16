export const APP_WS_URL = 'ws://localhost:8000/ws'
export const APP_SERVER_PORT = '8000'
export const APP_SERVER_HOST = 'http://127.0.0.1'
export const APP_ACCOUNTS_PATHNAME = '/api/v1/accounts/'


// форма регистрации аккаунта
const pHtml = document.createElement('p');
pHtml.className = 'attention';
pHtml.innerText = 'пользователь с таким email уже существует.'
export const APP_INFO_FORM_REGIST_USER = pHtml;
