export default function targetValidater(target: Element, text: string): boolean {
  const targetHtmlElement = target as HTMLElement;
  if (!(targetHtmlElement.localName).includes('button') &&
    ((targetHtmlElement.lastChild === null) ||
    ((targetHtmlElement.lastChild !== null)) ||
    ((!(typeof (targetHtmlElement.innerText)).includes('string')) ||
    ((typeof (targetHtmlElement.innerText)).includes('string') &&
    !(targetHtmlElement.innerText).includes(text))))) {
    return false;
  }
  return true;
}
