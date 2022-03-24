import React from "react";

import Card from "./Card";

const CardsBlock = ({ projects }) => {
  return (
    <div className="cards__block">
      {projects.map((item, index) => {
        return <Card item={item} key={item.imageSrc} />;
      })}
    </div>
  );
};

export default CardsBlock;
