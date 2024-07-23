
interface Fields {
  emailHtml: HTMLInputElement
  password1Html: HTMLInputElement
}
/**
 * To entryPoint gets HTMLFormElement.
 * @param formHtml: HTMLFormElement
 * @param emailHtml: Here is field `'input[name="email"]' as HTMLInputElement | null`
 * @param emailHtml: Here is field 'input[name="password1"]' as HTMLInputElement | null`
 * @returns `{emailHtml: HTMLInputElement | null, password1Html: HTMLInputElement | null}`
 */
export default function getEmailPassfordHtml(formHtml: HTMLFormElement): Fields {
  const eHtml = formHtml.querySelector('input[name="email"]') as HTMLInputElement;
  const pHtml = formHtml.querySelector('input[name="password1"]') as HTMLInputElement;
  return {
    emailHtml: eHtml,
    password1Html: pHtml
  };
}
