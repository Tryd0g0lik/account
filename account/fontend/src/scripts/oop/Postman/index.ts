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
  private async post (props: PostmansRequest) {
    const { url, requestsView } = { ...props };
    if ((requestsView).includes(RequstsView.post)) {
      try {
        const request = await fetch(url, {
          method: requestsView,
          headers: { ...this.headers },
          body: JSON.stringify({ ...this.context })
        });

        if (!request.ok) {
          console.log('[Postman > post 1]: POST-request is a FALSE');
          return false;
        }
        console.log('[Postman > post 2]: POST-request is a TRUE');
        return await request.json();
      } catch (er) {
        console.log('[Postman > post 3]: POST-request Something what wrong');
      }
    } else if ((requestsView).includes(RequstsView.get)) {
      const headler = { ...this.headers };
      const obj = Object(headler);
      if (Object.prototype.hasOwnProperty.call(obj, 'X-CSRFToken')) {
        delete obj['X-CSRFToken'];
      };

      fetch(url, {
        method: requestsView,
        headers: obj
      });
    //     .then(async (request) => {
    //       return await request.json();
    //     });
    }
  }

  async request (props: PostmansRequest): Promise<boolean | object> {
    try {
      const response = await this.post(props);
      if (response === false) {
        throw new Error('[Postman > requesty 1]: GET-request Something what wrong!');
      }
      return response;
    } catch (er: string | unknown | undefined) {
      throw new Error(`[Postman > requesty 2]:  GET-request Something what wrong - ${er as string}`);
    }
  }
}
export default Postman;
