import { logInAction } from "../store/actionsCreators/userActions";

const fetchAuth = (details) => {
  let formBody = [];
  for (let property in details) {
    let encodedKey = encodeURIComponent(property);
    let encodedValue = encodeURIComponent(details[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");
  return (dispatch) => {
    fetch(`auth`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: formBody,
    })
      .then((response) => response.json())
      .then((data) => {
        data ? dispatch(logInAction()) : alert("Wrong login or password");
      });
  };
};

export default fetchAuth;
// f
