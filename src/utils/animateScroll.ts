import { animateScroll } from "react-scroll";

export function animateScroll100VH(delay?: number) {
  setTimeout(() => {
    animateScroll.scrollTo(window.innerHeight, {
      duration: 700,
      smooth: "easeInOutQuart",
    });
  }, delay || 500);
}
