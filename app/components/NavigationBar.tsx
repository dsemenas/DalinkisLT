"use client";
import { useAuthContext } from "../contexts/UserAuthContext";
import SearchBar from "./SearchBar";

import React from "react";

export default function NavigationBar() {
  const { isLoggedIn, setIsLoggedIn } = useAuthContext();

  return (
    <div className="navbar w-full bg-base-100 shadow sticky top-0 z-10 px-6">
      <div className="navbar-start">
        <a href="/" className="btn btn-ghost text-xl">
          DalinkisLT
        </a>
      </div>
      <div className="navbar-center flex justify-center w-1/2">
        <SearchBar />
      </div>
      <div className="navbar-end gap-7">
        <a className="btn btn-ghost">Pridėti skelbimą</a>
        {isLoggedIn ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Your avatar"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-white rounded-box w-52"
            >
              <li className="">
                <a className="">
                  <i className="fa-regular fa-bell" />
                  Pranešimai
                </a>
              </li>
              <li className="">
                <a className="">
                  <i className="fa-regular fa-user" />
                  Profilis
                </a>
              </li>
              <li>
                <a>
                  <i className="fa-regular fa-gear" />
                  Nustatymai
                </a>
              </li>
              <li>
                <a onClick={() => setIsLoggedIn(false)}>
                  <i className="fa-regular fa-right-from-bracket" />
                  Atsijungti
                </a>
              </li>
            </ul>
          </div>
        ) : (
          <a className="btn btn-ghost" onClick={() => setIsLoggedIn(true)}>
            <i className="fa-regular fa-right-to-bracket" />
            Prisijungti
          </a>
        )}
      </div>
    </div>
  );
}
