import React, { useState, useEffect } from "react";
import { Logo } from "../index";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../store/authSlice";
import authService from "../../appwrite/auth";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const user = useSelector((state) => state.auth.userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    authService
      .logout()
      .then(() => {
        console.log("Logout successful");
        dispatch(logout());
        navigate("/");
      })
      .catch((error) => {
        console.error("Logout failed:", error);
      });
  };

  return (
    <header className="shadow bg-gradient-to-r from-bob-pri to-bob-pri2 flex">
      <div className="py-2 px-2 mr-4">
        <Link to="/">
          <Logo width="150px" />
        </Link>
      </div>
      <div className="bg-white text-black w-full mb-5 rounded-bl-full py-1 flex">
        <ul className="flex ml-auto">
          <li>
            <button className="inline-block py-2 rounded-full text-gray-500">
              Available in:
            </button>
          </li>
          <li>
            <button className="inline-block pr-2 pl-6 py-2 duration-200 hover:bg-blue-100 rounded-full">
              English
            </button>
          </li>
          <li className="text-bob-pri py-2">|</li>
          <li>
            <button className="inline-block pr-10 pl-2 py-2 duration-200 hover:bg-blue-100 rounded-full">
              Hindi
            </button>
          </li>
        </ul>
        {authStatus ? (
          <div className="flex items-center">
            <span className="mr-4">{user.name}</span>
            <button
              className="rounded-full bg-bob-blue text-white px-8 text-center my-1 mx-4"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            className="rounded-full bg-bob-blue text-white px-8 text-center my-1 mx-4"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;
