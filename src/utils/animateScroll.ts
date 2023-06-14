import { animateScroll } from "react-scroll";

interface Props {
  delay?: number;
}

export function animateScroll100VH(delay?: number) {
  setTimeout(() => {
    animateScroll.scrollTo(window.innerHeight, {
      duration: 1000,
      smooth: "easeInOutQuart",
    });
  }, delay || 500);
}
