import React from 'react';
import './Sidebar.css';
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../../features/userSlice";

const Sidebar = () => {
  const user = useSelector((state) => state.data.user.user);
  const dispatch = useDispatch();
  const handelLogout = () => {
    dispatch(logoutUser());
  };
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
        alt="Instagram Logo"
      />

      <div className="sidebar__buttons">
        <button className="sidebar__button">
          <HomeIcon />
          <span>Home</span>
        </button>
        <button className="sidebar__button">
          <SearchIcon />
          <span>Cerca</span>
        </button>
        <button className="sidebar__button">
          <ExploreIcon />
          <span>Esplora</span>
        </button>
        <button className="sidebar__button">
          <SlideshowIcon />
          <span>Reels</span>
        </button>
        <button className="sidebar__button">
          <ChatIcon />
          <span>Messaggi</span>
        </button>
        <button className="sidebar__button">
          <FavoriteBorderIcon />
          <span>Notifiche</span>
        </button>
        <button className="sidebar__button">
          <AddCircleOutlineIcon />
          <span>Crea</span>
        </button>
        <button className="sidebar__button">
          <Avatar>
            {user.username ? user.username.charAt(0).toUpperCase() : "A"}
          </Avatar>
          <span>
            {user.username}{" "}
            <button onClick={handelLogout} className="logout__button">
              Logout
            </button>
          </span>
        </button>
      </div>
      <div className="sidebar__more">
        <button className="sidebar__button">
          <MenuIcon />
          <span className="sidebar__buttonText">More</span>
        </button>
      </div>
    </div>
  );
}

export default Sidebar