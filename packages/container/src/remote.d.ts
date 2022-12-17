// https://www.typescriptlang.org/docs/handbook/modules.html#working-with-other-javascript-libraries
declare module 'home/HomeApp' {
  export function mount(element: HTMLElement | null): void;
  // export = {mount}
}

declare module 'account/AccountApp' {
  export function mount(element: HTMLElement | null): void;
  // export = {mount}
}
