// https://www.typescriptlang.org/docs/handbook/modules.html#working-with-other-javascript-libraries
// import type {RouterState} from '@remix-run/router';
interface MountOptions {
  onNavigate?: (state: RouterState) => void;
  router?: RemixRouter;
}

interface MountResult {
  onParentNavigate: ({pathname: string}) => void;
}
declare module 'home/HomeApp' {
  export function mount(
    element: HTMLElement | null,
    options?: MountOptions,
  ): MountResult;

  // export = {mount}
}

declare module 'account/AccountApp' {
  export function mount(
    element: HTMLElement | null,
    options?: MountOptions,
  ): MountResult;
  // export = {mount}
}
