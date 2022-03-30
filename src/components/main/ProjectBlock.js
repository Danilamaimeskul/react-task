import CardsBlock from "./CardsBlock";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOutAction } from "../../store/actionsCreators/userActions";
import debounce from "lodash.debounce";
import ProjectService from "../../services/ProjectService";

const ProjectsBlock = () => {
  const [error, setError] = useState(null);
  const [filtredCards, setCards] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const user = useSelector(({ user }) => user);
  const dispatch = useDispatch(user);

  useEffect(() => {
    getCards("");
  }, []);

  const getCards = (searchValue) => {
    ProjectService.fetchProjects(searchValue).then(
        ({data}) => {
          setIsLoaded(true);
          setCards(data.filtred);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
          dispatch(logOutAction())
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
