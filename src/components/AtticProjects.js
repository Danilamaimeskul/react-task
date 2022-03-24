import { useSelector } from "react-redux";

import React from "react";

function AtticProjects(props) {
  const attic = useSelector(({ attic }) => attic.attic);

  return (
    <div className="block projects">
      <div className="container">
        <h2 className="title">Projects in the Attic</h2>
        <div className="projects__block">
          {attic.map(({ title, description }, index) => {
            return (
              <a className="project" href="#" key={index}>
                <div className="project__text">
                  <p className="project__title">{title}</p>
                  <p className="project__text">{description}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AtticProjects;
