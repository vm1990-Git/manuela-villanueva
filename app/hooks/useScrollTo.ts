import { useCallback } from "react";

const useScrollTo = (): ((targetId: string) => void) => {
  const scrollTo = useCallback((targetId: string) => {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const navbarHeight = 60;
      const additionalOffset = 10;
      const targetOffsetTop =
        targetElement.offsetTop - navbarHeight - additionalOffset;

      window.scrollTo({
        top: targetOffsetTop,
        behavior: "smooth",
      });
    }
  }, []);

  return scrollTo;
};

export default useScrollTo;
