import useTextAnimation from "../../animations/useTextAnimation";
import "./preloader.css";

const Preloader = () => {
  const animatedName = useTextAnimation("Marcel Peda");
  const animatedSpan = useTextAnimation("Portfolio");

  return (
    <div id="preloader">
      <h3 id="preloader-text">
        {animatedName} <span>{animatedSpan}</span>
      </h3>
    </div>
  );
};

export default Preloader;
