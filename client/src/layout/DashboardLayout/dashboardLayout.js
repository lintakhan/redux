import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutAction } from "../../redux/auth/actionCreators";
import "./DashboardLayout.css";
import { fetchUser } from "../../redux/user/actionCreators";

function DashboardLayout() {
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);

  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.token) {
      navigate("/auth");
    }
  }, [auth, navigate]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  const logoutHandle = () => {
    dispatch(logoutAction());
  };

  return (
    <div className="DashboardLayout">
      <div className="Dashboard-topbar">
        <div> DashboardLayout</div>
        <div className="topBar-right">
          <div>{user.user.firstName}</div>
          <button onClick={logoutHandle}>Logout</button>
        </div>
      </div>

      <Outlet />
    </div>
  );
}

export default DashboardLayout;
