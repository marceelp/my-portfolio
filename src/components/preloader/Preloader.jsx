import useTextAnimation from "../../animations/useTextAnimation";
import "./preloader.css";

const Preloader = () => {
  const animatedName = useTextAnimation("Marcel Peda", 1000);
  const animatedSpan = useTextAnimation("Portfolio", 1000);

  return (
    <div id="preloader">
      <h3 id="preloader-text">
        {animatedName} <span id="preloader-span">{animatedSpan}</span>
      </h3>
    </div>
  );
};

export default Preloader;
