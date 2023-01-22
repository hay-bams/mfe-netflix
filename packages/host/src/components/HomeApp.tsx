import {useEffect, useRef} from 'react';
import {mount} from 'home/HomeApp';
import {RouterState} from '@remix-run/router';

import {router} from '@/routesInit';
import useAuth from '@/hooks/useAuth';
import { Loading } from '@/components/Loading/Loading';

export const HomeApp = () => {
  const ref = useRef(null);
  const {loading} = useAuth();

  useEffect(() => {
    if(loading) return;
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
  }, [loading]);

  if(loading) return  <Loading />

  return <div ref={ref} />;
};
