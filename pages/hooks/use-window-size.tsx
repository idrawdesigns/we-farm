import { useState, useEffect } from "react";

type windowSizeType = {
  width: number;
  height: number;
};

const useWindow = (): {
  windowSize: windowSizeType;
  isMobile: boolean;
  isIpad: boolean;
} => {
  const [windowSize, setWindowSize] = useState<windowSizeType>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const resizeHandler = (): void => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      setWindowSize({
        height,
        width,
      });
    };

    resizeHandler();

    window.addEventListener("resize", resizeHandler);

    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  const { width } = windowSize;
  return {
    windowSize,
    isMobile: width < 768,
    isIpad: width >= 768 && width < 1024,
  };
};

export default useWindow;
