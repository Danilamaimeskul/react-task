import { useSelector } from "react-redux";

import image from "../../assets/images/footer-circles-grid.svg";
import "../../styles/Prefooter.css";

const Prefooter = () => {
  const prefooter = useSelector(({ prefooter }) => prefooter.prefooter);

  return (
    <div className="block">
      <div className="container prefooter">
        <div className="circle" />
        <img src={image} className="circle__grid" />
        {prefooter.map(({ title, description, href }, index) => {
          return (
            <div className="prefooter__card" key={index}>
              <h2 className="title">{title}</h2>
              <p className="text">{description}</p>
              <a className="prefooter__link" href={href}>
                Learn more
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Prefooter;
