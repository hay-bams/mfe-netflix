import { useEffect, useRef } from 'react'
import {mount} from 'account/AccountApp'
import {RouterState} from '@remix-run/router';

import {router} from '@/routesInit';

export const AccountApp = () => {
  const ref = useRef(null);
  useEffect(() => {
    const {onParentNavigate} = mount(ref.current, {
      onNavigate: (nextState: RouterState) => {
        if (window.location.pathname !== nextState.location.pathname) {
          router.navigate(nextState.location.pathname);
        }
      },
    });

    router.subscribe((state) =>
      onParentNavigate({pathname: state.location.pathname}),
    );
  }, []);

  return (
    <div ref={ref} />
  )
}
