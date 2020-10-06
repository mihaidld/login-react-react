import React from "react";

const IP = "172.18.250.171";
const PORT = 7777;

const LoginForm = (props) => {
  /*on remplace le comportement par defaut du form avec les attributs
  action="http://172.18.250.171:7777/login" et method = "POST" par hook onSubmit
  qui use fetch avec un 2e argument pour POST JSON-encoded data*/

  const { setLoggedIn, setUsername } = props;
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;
    fetch(`http://${IP}:${PORT}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        console.log(data.valid);
        if (data.valid) {
          setLoggedIn(true);
          setUsername(data.username);
        } else {
          alert("Your credentials are not correct, try again");
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <form onSubmit={handleFormSubmit} className="mt-4">
      <div className="input-group mb-2">
        <label className="input-group-text" htmlFor="username">
          username
        </label>
        <input
          className="form-control"
          id="username"
          name="username"
          required
        />
      </div>
      <div className="input-group mb-2">
        <label className="input-group-text" htmlFor="password">
          password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          required
        />
      </div>
      <button
        name="button"
        value="buttonId"
        type="submit"
        className="btn btn-light"
      >
        submit
      </button>
    </form>
  );
};

export default LoginForm;
