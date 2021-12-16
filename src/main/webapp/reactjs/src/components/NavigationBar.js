import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPlus,
  faSignInAlt,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { logoutUser } from "../services/index";

const NavigationBar = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logoutUser());
  };

  const guestLinks = (
    <>
      <div className="mr-auto"></div>
      <Nav className="navbar-right">
        <Link to={"register"} className="nav-link">
          <FontAwesomeIcon icon={faUserPlus} /> Регистрация
        </Link>
        <Link to={"login"} className="nav-link">
          <FontAwesomeIcon icon={faSignInAlt} /> Авторизация
        </Link>
      </Nav>
    </>
  );
  const userLinks = (
    <>
      <Nav className="mr-auto">
        <Link to={"add"} className="nav-link">
          Добавить книгу
        </Link>
        <Link to={"list"} className="nav-link">
          Список книг
        </Link>
        <Link to={"users"} className="nav-link">
          Список пользователей
        </Link>
      </Nav>
      <Nav className="navbar-right">
        <Link to={"logout"} className="nav-link" onClick={logout}>
          <FontAwesomeIcon icon={faSignOutAlt} /> Выйти
        </Link>
      </Nav>
    </>
  );

  return (
    <Navbar bg="dark" variant="dark">
      <Link to={auth.isLoggedIn ? "home" : ""} className="navbar-brand">
        <img
          src="https://64.media.tumblr.com/3d657d3889bd165e8d2aded94bb45abd/3f2a7531bf039eb9-be/s1280x1920/76282d799a280a281a9c0eaac3080915f2f3af9a.jpg"
          width="50"
          height="50"
          alt="brand"
        />{" "}
        AniStore
      </Link>
      {auth.isLoggedIn ? userLinks : guestLinks}
    </Navbar>
  );
};

export default NavigationBar;
