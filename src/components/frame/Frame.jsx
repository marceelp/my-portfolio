import useTextAnimation from "../../animations/useTextAnimation";
import "./frame.css";

const Frame = () => {
  const [footer] = useTextAnimation("2023 Marcel Peda.", 4200);

  return (
    <div className="frame">
      <div className="top-horizontal"></div>
      <div className="top-vertical"></div>

      <small className="copyright">&copy;{footer}</small>

      <div className="bottom-horizontal"></div>
      <div className="bottom-vertical"></div>
    </div>
  );
};

export default Frame;
