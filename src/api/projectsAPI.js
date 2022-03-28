const fetchProjects = (searchValue) => {
  return fetch(`api/project?value=${searchValue}`, {
    method: "GET",
  }).then((res) => res.json());
};

export default fetchProjects;
