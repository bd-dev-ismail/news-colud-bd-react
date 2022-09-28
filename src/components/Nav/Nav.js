import React from 'react';
import './Nav.css';
const Nav = () => {
    return (
      <div>
        <div className="navbar bg-primary px-32">
          <div className="flex-1">
            <a href="/" className="btn btn-ghost text-white normal-case text-xl">
              News Cloud BD
            </a>
          </div>
          <div className="flex-none gap-2">
            <div className="form-control">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered"
              />
            </div>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img alt=".." src="https://placeimg.com/80/80/people" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a href="/" className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a href="/">Settings</a>
                </li>
                <li>
                  <a href="/">Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Nav;