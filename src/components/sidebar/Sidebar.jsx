import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

export const Sidebar = () => {
  
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">_artagonist_</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title"> MAIN </p>

          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>

          <p className="title"> LISTS </p>

          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>

          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <StoreMallDirectoryIcon className="icon" />
              <span>Products</span>
            </li>
          </Link>

          <li>
            <ShoppingBagIcon className="icon" />
            <span>Orders</span>
          </li>

          <li>
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li>

          <p className="title">USEFUL</p>

          <li>
            <QueryStatsIcon className="icon" />
            <span>Stats</span>
          </li>

          <li>
            <NotificationsActiveIcon className="icon" />
            <span>Notifications</span>
          </li>

          <p className="title">SERVICE</p>

          <li>
            <MonitorHeartIcon className="icon" />
            <span>System Health</span>
          </li>

          <li>
            <PsychologyIcon className="icon" />
            <span>Logs</span>
          </li>

          <li>
            <SettingsIcon className="icon" />
            <span>Settings</span>
          </li>

          <p className="title">USER</p>

          <li>
            <AccountCircleIcon className="icon" />
            <span>Profile</span>
          </li>

          <li>
            <LogoutIcon className="icon" />
            <span>Log Out</span>
          </li>
          
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption" onClick={()=> dispatch({type :"LIGHT" })}></div>
        <div className="colorOption" onClick={()=> dispatch({type :"DARK" })}></div>
      </div>
    </div>
  );
};

export default Sidebar;
