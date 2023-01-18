import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div>
      <div>This is landing page</div>
      <div>
        <Link to="/auth">
          <h4>Signin</h4>
        </Link>
      </div>
      <div>
        <Link to="/dashboard">
          <h4>Dashboard</h4>
        </Link>
      </div>
    </div>
  );
}

export default Home;
