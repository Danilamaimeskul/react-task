import $api from "../axios";

export default class ProjectService {
  static fetchProjects(searchValue) {
    return $api.get(`/project?value=${searchValue}`);
  }
}
