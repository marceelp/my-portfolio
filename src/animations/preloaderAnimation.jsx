import { gsap } from "gsap";

const preloaderAnimation = () => {
  gsap.to("#preloader-text", {
    opacity: 0,
    duration: 1,
    onComplete: () => {
      document.querySelector("#page").style.display = "block";
      gsap.to("#preloader", {
        opacity: 0,
        duration: 3,
        onComplete: () => {
          document.querySelector("#preloader").style.display = "none";
        },
      });
    },
  });
};

export default preloaderAnimation;
