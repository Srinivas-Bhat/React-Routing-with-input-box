import React from "react";
import { NavLink } from "react-router-dom";

const baseStyle = { color: "black", textDecoration: "none" };
const activeStyle = { color: "red", textDecoration: "none" };
const Links = [
  {
    to: "/",
    title: "Home",
    id: "1",
  },
  {
    to: "/about",
    title: "About",
    id: "2",
  },
  {
    to: "",
    title: "Users",
    id: "3",
  },
  {
    to: "/products",
    title: "Products",
    id: "4",
  },
  {
    to: "/login",
    title: "Login",
    id: "5",
  },
];
const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        border: "1px solid black",
        width: "65%",
        height: "50px",
        margin: "auto",
        marginTop: "10px",
        alignItems: "center",
        fontWeight:'500'
      }}
    >

      {Links.map((el) => (
        <div key={el.id}>
            {el.to=== "" ? <NavLink to="/error">{el.title}</NavLink> : <NavLink
          to={el.to}
          key={el.id}
          style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
        >
          {el.title}
        </NavLink>}
        
        </div>
      ))}

      {/* <NavLink to="/products" style={(isActive) => (isActive ? activeStyle: baseStyle)}>Products</NavLink> */}
    </div>
  );
};

export default Navbar;
