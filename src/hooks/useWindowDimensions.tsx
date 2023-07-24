import { useEffect, useState } from "react";
import { window } from "browser-monads";

// function getWindowDimensions() {
//   const { innerWidth: width, innerHeight: height } = window;
//   return { width, height };
// }

// export function useWindowDimensions(): { width: number; height: number } {
//   function isBrowser() {
//     return typeof window !== "undefined";
//   }

//   const [windowDimensions, setWindowDimensions] = useState(
//     isBrowser() && getWindowDimensions()
//   );

//   useEffect(() => {
//     setWindowDimensions(getWindowDimensions());
//     function handleResize() {
//       setWindowDimensions(getWindowDimensions());
//     }

//     window.addEventListener("resize", handleResize);

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return windowDimensions;
// }

export function useWindowDimensions() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
