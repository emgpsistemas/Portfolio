import { animateScroll } from "react-scroll";

export function animateScroll100VH() {
  setTimeout(() => {
    animateScroll.scrollTo(window.innerHeight, {
      duration: 1000,
      smooth: "easeInOutQuart",
    });
  }, 500);
}
