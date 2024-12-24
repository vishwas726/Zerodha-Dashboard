import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "./UserContext";
const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [profileMenu, setProfileMenu] = useState(false);
const {logout} = useUser();
  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} alt="Logo" />
      <div className="menus">
        <ul>
          <li>
            <Link
              to="/"
              onClick={() => setSelectedMenu(0)}
              className={selectedMenu === 0 ? "text-blue-500" : "text-black"}
            >
              <p>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link
              to="/orders"
              onClick={() => setSelectedMenu(1)}
              className={selectedMenu === 1 ? "text-blue-500" : "text-black"}
            >
              <p>Orders</p>
            </Link>
          </li>
          <li>
            <Link
              to="/holdings"
              onClick={() => setSelectedMenu(2)}
              className={selectedMenu === 2 ? "text-blue-500" : "text-black"}
            >
              <p>Holdings</p>
            </Link>
          </li>
          <li>
            <Link
              to="/positions"
              onClick={() => setSelectedMenu(3)}
              className={selectedMenu === 3 ? "text-blue-500" : "text-black"}
            >
              <p>Positions</p>
            </Link>
          </li>
          <li>
            <Link
              to="/funds"
              onClick={() => setSelectedMenu(4)}
              className={selectedMenu === 4 ? "text-blue-500" : "text-black"}
            >
              <p>Funds</p>
            </Link>
          </li>
          <li>
            <Link
              to="/apps"
              onClick={() => setSelectedMenu(5)}
              className={selectedMenu === 5 ? "text-blue-500" : "text-black"}
            >
              <p>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={() => setProfileMenu(!profileMenu)}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
          {profileMenu && <div className="profile-dropdown" onClick={()=>logout()}>Log out</div>}
        </div>
      </div>
    </div>
  );
};

export default Menu;
