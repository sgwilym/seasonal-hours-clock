// Provides its descendents with the size of the viewport.
// Based off https://css-tricks.com/using-requestanimationframe-with-react-hooks/

import React from "react";

import { ViewportSizeContext } from "./viewport-size-context";

export default function Resizer({ children }: { children: React.ReactNode }) {
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth
  });

  const requestRef: React.MutableRefObject<number | undefined> = React.useRef();

  const animate = React.useCallback((_time: number) => {
    setDimensions({
      height: window.innerHeight,
      width: window.innerWidth
    });
    requestRef.current = requestAnimationFrame(animate);
  }, []);

  React.useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current as number);
  }, []);

  return (
    <>
      <ViewportSizeContext.Provider value={dimensions}>
        {children}
      </ViewportSizeContext.Provider>
    </>
  );
}
