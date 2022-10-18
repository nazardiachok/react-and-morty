import styled from "styled-components";
export default function NavList() {
  return (
    <Navbar>
      {/*  <NavbarLink></NavbarLink> */}
      <div>Home</div>
      <div>Bookmark</div>
      <div>Profil</div>
    </Navbar>
  );
}

const Navbar = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  height: 50px;
  align-items: center;
  border-top: 1px solid black;
  z-index: 5;
  background-color: azure;
`;

/* import { NavLink } from "react-router-dom";
export default function NavbarLink() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/" />
            <svg className="navigation__icon" viewBox="0 0 24 24">
              <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
            </svg>
          </li>
          <li>
            <NavLink to="/" />
            <svg className="navigation__icon" viewBox="0 0 24 24">
              <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
            </svg>
          </li>
          <li>
            <NavLink to="/" />
            <svg className="navigation__icon" viewBox="0 0 24 24">
              <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
            </svg>
          </li>
          <li>
            <NavLink to="/" />
            <svg className="navigation__icon" viewBox="0 0 24 24">
              <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
            </svg>
          </li>
        </ul>
      </nav>
    </>
  );
}
 */
