import CardsBlock from "./CardsBlock";
import { useState, useEffect } from "react";
import debounce from "lodash.debounce";
import fetchProjects from "../../api/projectsAPI";

const ProjectsBlock = () => {
  const [error, setError] = useState(null);
  const [filtredCards, setCards] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getCards("");
  }, []);

  const getCards = (searchValue) => {
    fetchProjects(searchValue).then(
      (result) => {
        setIsLoaded(true);
        setCards(result.filtred);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    );
  };

  const debounceProjectFetch = debounce((searchValue) => {
    getCards(searchValue);
  }, 300);

  if (error) {
    return (
      <div className="block">
        <div className="container">
          <h1>Error...</h1>
        </div>
      </div>
    );
  } else if (!isLoaded) {
    return (
      <div className="block">
        <div className="container">
          <h1>Loading...</h1>
        </div>
      </div>
    );
  } else {
    return (
      <div className="block">
        <div className="container">
          <div className="search__block">
            <h2 className="search__result">Found: {filtredCards.length}</h2>
            <form>
              <input
                id="search"
                className="search"
                placeholder="Search"
                onChange={(event) => debounceProjectFetch(event.target.value)}
              />
            </form>
          </div>
          <CardsBlock projects={filtredCards} />
        </div>
      </div>
    );
  }
};
export default ProjectsBlock;
