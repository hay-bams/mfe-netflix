import {useEffect, useRef} from 'react';
import {mount} from 'home/HomeApp';
import {RouterState} from '@remix-run/router';

import {router} from '@/routesInit';

export const HomeApp = () => {
  const ref = useRef(null);

  // const onNavigate = useCallback((nextState: RouterState) => {
  //   if (location.pathname !== nextState.location.pathname) {
  //     console.log(nextState, '%%%%%$$$$>>', window.history.state);
  //     // navigate(nextState.pathname);
  //     window.history.replaceState(
  //       window.history.state,
  //       '',
  //       nextState.location.pathname,
  //     );
  //   }
  // }, []);

  useEffect(() => {
    console.log(router, '++++++++');
    const {onParentNavigate} = mount(ref.current, {
      onNavigate: (nextState: RouterState) => {
        console.log(
          window.location.pathname,
          '........',
          nextState.location.pathname,
        );
        if (window.location.pathname !== nextState.location.pathname) {
          console.log(nextState, '%%%%%$$$$>>', window.history.state);
          // history.push(nextState.location.pathname)
          router.navigate(nextState.location.pathname);
        }
      },
    });

    router.subscribe((state) => {
      console.log('*********')
      onParentNavigate({pathname: state.location.pathname})
    });
  }, []);

  useEffect(() => {}, []);

  return <div ref={ref} />;
};
