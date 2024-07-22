import targetValidater from '@Validaors/index.ts';
import { APP_SERVER_HOST, APP_SERVER_PORT, APP_ACCOUNTS_PATHNAME, APP_INFO_FORM_REGIST_USER } from '../../env';
import { Context, RequstsView, PostmansRequest } from '@interfaces';
import Postman from '@Postman';

export default async function handlerAuthorisation (e: MouseEvent | KeyboardEvent): Promise<undefined|boolean> {
  const target = e.target as HTMLButtonElement;
  const resp = targetValidater(target, 'Авторизоваться');
  if (!resp) {
    return false;
  }
  e.preventDefault();

  if ((APP_SERVER_HOST === null) || (APP_SERVER_HOST === undefined) ||
    (APP_SERVER_PORT === null) ||
    (APP_ACCOUNTS_PATHNAME === null)) {
    return false;
  };
  const host = APP_SERVER_HOST.substring(0);
  const port = APP_SERVER_PORT.substring(0);
  const urls: string = host + ':' + port + '/account/authorization/';

  // There data of forms will geting
  const formHtml = target.parentElement as HTMLFormElement;
  const emailForms = formHtml.querySelector('input[name="email"]') as HTMLInputElement;
  const password1 = formHtml.querySelector('input[name="password1"]') as HTMLInputElement;
  const password2 = formHtml.querySelector('input[name="password2"]') as HTMLInputElement;
  // let props: Context | PostmansRequest = {
  //   password: passwordForms.value,
  //   email: emailForms.value
  // };

  // const postman = new Postman({ ...props });
  // const urlParams = new URL('http://127.0.0.1:8000/account/form/');
  // // urlParams.searchParams.set('password', props.password as string);
  // // urlParams.searchParams.set('email', props.email as string);
  // props = {
  //   url: urlParams.toString(),
  //   requestsView: RequstsView.post
  // };
  // const result = await postman.request({ ...props });
}
