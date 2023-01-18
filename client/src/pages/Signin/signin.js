import React, { useState } from "react";
import "./Signin.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/auth/actionCreators";

function Signin() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(login({ email, password }));
  };

  return (
    <div className="signup-main">
      <form className="signup-form" onSubmit={handleSubmit}>
        <div>
          <h2>Signin</h2>
        </div>

        <div>
          <input
            name="email"
            placeholder="Email"
            required
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <input
            name="password"
            placeholder="Password"
            required
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <button type="submit">
            {auth.loading ? <div className="loader"></div> : "Signin"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signin;
