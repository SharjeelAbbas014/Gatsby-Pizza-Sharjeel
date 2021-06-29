import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
const NavStyles = styled.nav`
  background: red;
`;

export default function NavBar() {
  return (
    <NavStyles>
      <li>
        <Link to="/">Hot Now</Link>
      </li>
      <li>
        <Link to="/pizza">Pizza Menu</Link>
      </li>
      <li>
        <Link to="/">Logo</Link>
      </li>
      <li>
        <Link to="/slicemasters">Slice Masters</Link>
      </li>
      <li>
        <Link to="/orders">Order Ahead!</Link>
      </li>
    </NavStyles>
  );
}
