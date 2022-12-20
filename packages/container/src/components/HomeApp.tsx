import {useEffect, useRef} from 'react';
import {mount} from 'home/HomeApp';
import {RouterState} from '@remix-run/router';

import {router} from '@/routesInit';

export const HomeApp = () => {
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

  useEffect(() => {}, []);

  return <div ref={ref} />;
};
