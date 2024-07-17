import getCookie from '@cookies';
import { Context, PostmansRequest, RequstsView } from '@interfaces';
const headers = {
  'X-CSRFToken': getCookie('csrftoken') as string,
  'Content-Type': 'application/json' // contentType
};

class Postman {
  // private readonly email: string | undefined = undefined;

  // private readonly sername: string | undefined = undefined;

  // private readonly password: string | undefined = undefined;

  // private readonly repassword: string | undefined = undefined;

  headers: typeof headers;
  private readonly context: Context = {
    username: undefined,
    password: undefined,
    repassword: undefined,
    email: undefined,
    is_superuser: false
  };

  private readonly is_superuser: boolean;
  constructor (obj: Context) {
  //   this.email = obj.email;
  //   this.sername = obj.username;
  //   this.password = obj.password;
  //   this.repassword = obj.repassword;
    this.is_superuser = false;
    this.headers = headers;
    this.context = obj;
  }

  /**
   * TODO: Отправляем запросы на серверю
   * @param props: `{ url, requestsView, context }` \
   * props.url type string. 'http:// .....'. \
   * props.requestsView type request 'post/get/...'. \
   * props.context type 'interfaces.Context'
   * @returns Promise<boolean | object> .
   */
  private async post(props: PostmansRequest): Promise<boolean | object> {
    const { url, requestsView } = { ...props };
    if ((requestsView as string).includes(RequstsView.post)) {
      const request = await fetch(url, {
        method: requestsView,
        headers: this.headers,
        body: JSON.stringify(this.context)
      });
      if (!request.ok) {
        console.log('[Postman > post]: POST-request is a FALSE');
        return false;
      }
      console.log('[Postman > post]: POST-request is a TRUE');
      const dataJson = await request.json();
      return dataJson as object;
    } else if ((requestsView as string).includes(RequstsView.get)) {
      const urlParams = new URL(url);
      urlParams.searchParams.set('password', this.context.repassword as string);
      urlParams.searchParams.set('email', this.context.email as string);
      const request = await fetch(urlParams, {
        method: requestsView,
        headers: this.headers
      });
      if (!request.ok) {
        console.log('[Postman > post]: POST-request is a FALSE');
        return false;
      }
      console.log('[Postman > post]: POST-request is a TRUE');
      const dataJson = await request.json();
      return dataJson as object;
      return false;
    } else if ((requestsView as string).includes(RequstsView.patch)) {
      return false;
    } else if ((requestsView as string).includes(RequstsView.delete)) {
      return false;
    }
    return false;
  }

  async request(props: PostmansRequest): Promise<boolean | object> {
    try {
      const response = await this.post(props);
      return response;
    } catch (er: string | unknown | undefined) {
      throw new Error(`[Postman > requesty]: Something what wrong - ${er}`);
    }
  }
}
export default Postman;
