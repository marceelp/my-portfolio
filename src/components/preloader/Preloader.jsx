import useTextAnimation from "../../animations/useTextAnimation";
import "./preloader.css";

const Preloader = () => {
  const animatedName = useTextAnimation("Marcel Peda", 1000);
  const animatedPortfolio = useTextAnimation("Portfolio", 1000);

  return (
    <div className="preloader">
      <div className="preloader--text">
        <h3>{animatedName}</h3>
        <h3 className="preloader--portfolio">{animatedPortfolio}</h3>
      </div>
    </div>
  );
};

export default Preloader;
