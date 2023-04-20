import { useState } from "react";
import useWindowResize from "@hooks/useWindowResize.js";

export default function useGetWindowSize() {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  });

  function handleResize() {
    setDimensions({
      height: window.innerHeight,
      width: window.innerWidth
    });
  }

  useWindowResize(handleResize);

  return dimensions;
}
