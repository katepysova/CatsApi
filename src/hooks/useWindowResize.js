import { useEffect } from "react";

export default function useWindowResize(func) {
  useEffect(() => {
    window.addEventListener("resize", func);
    return () => window.removeEventListener("resize", func);
  }, []);
}
