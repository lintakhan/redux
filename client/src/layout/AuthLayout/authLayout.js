import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function AuthLayout() {
  const auth = useSelector((state) => state.auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (auth.token) {
      navigate("/dashboard");
    }
  }, [auth, navigate]);
  
  return (
    <div>
     <Outlet />
    </div>
  );
}

export default AuthLayout;
