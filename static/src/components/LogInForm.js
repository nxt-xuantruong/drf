import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateOauthInfo, logOut } from "../store/oauth";
import oauthServices from "../services/oauthServices";

function LogInForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    oauthServices
      .login({ username, password })
      .then((response) => {
        if (response && response.data) {
          console.log(response.data);
          dispatch(updateOauthInfo(response.data));
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <form onSubmit={handleSubmit} id="login">
      <input
        type="text"
        placeholder="user name"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default LogInForm;
