import { useEffect, useState } from 'react';


type TWindowSize = [number, number];

type THook = TWindowSize;

export const useWindowResize = (): THook => {
  const initSize: TWindowSize = typeof window !== 'undefined'
  ? [window.innerWidth, window.innerHeight]
  : [0, 0];
  const [windowSize, setWindowSize] = useState<TWindowSize>(initSize);

  useEffect(() => {
    const handleResize = (): void => {
      setWindowSize([
        window.innerWidth,
        window.innerHeight,
      ]);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
};