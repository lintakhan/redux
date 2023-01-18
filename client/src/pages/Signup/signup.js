import React, {  useState } from "react";
import { testapi } from "../../api";
import "./Signup.css";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../redux/auth/actionCreators";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(signup({ firstName, lastName, email, password }));
  };

  return (
    <div className="signup-main">
      <form className="signup-form" onSubmit={handleSubmit}>
        <div>
          <h2>Signup</h2>
        </div>
        <div>
          <input
            name="firstName"
            placeholder="First Name"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div>
          <input
            name="lastName"
            placeholder="Last Name"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
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
            {auth.loading ? <div className="loader"></div> : "Signup"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
