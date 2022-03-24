const fetchProjects = (searchValue) => {
  return fetch(`api?value=${searchValue}`, {
    method: "GET",
  }).then((res) => res.json());
};

export default fetchProjects;
