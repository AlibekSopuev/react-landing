import React from 'react';
import { BREAKPOINTS } from '../../styles/breakpoints';

export const useDeviceDetected = () => {
  const [isMobile, setMobile] = React.useState<boolean>();

  React.useEffect(() => {
    function handleSize() {
      if (window.innerWidth <= BREAKPOINTS.md) setMobile(true);
      else setMobile(false);
    }

    handleSize();
    window.addEventListener('resize', handleSize);
    return () => window.removeEventListener('resize', handleSize);
  }, []);

  return isMobile;
};
