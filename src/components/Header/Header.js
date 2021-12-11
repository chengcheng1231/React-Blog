import styled from "styled-components";
import avatar from "../Lidemy.png";
import { useContext } from "react";
import { AuthContext } from "../../contexts";
import { setAuthToken, successAlert } from "../../utils";
import { Link, useLocation, useHistory } from "react-router-dom";

const Root = styled.div`
  border-bottom: 1.5px solid rgb(228, 225, 225, 0.7);
`;

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100px;
  padding: 20px 0px 20px 0px;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 1250px) {
    justify-content: left;
  }
  @media (max-width: 800px) {
    display: block;
  }
`;

const NavbarSiteName = styled.div`
  color: #191919;
  font-size: 26px;
  font-weight: 650;
  @media (max-width: 1250px) {
    margin: 0px 30px;
  }
`;

const NavbarList = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0px 20px;
  width: 1000px;
  @media (max-width: 1250px) {
    width: 75vw;
  }
  @media (max-width: 800px) {
    justify-content: left;
  }
`;

const NavbarListLeft = styled.div`
  display: flex;
  align-items: baseline;
`;

const NavbarListRight = styled.div`
  display: flex;
  align-items: baseline;
`;

const Nav = styled(Link)`
  text-decoration: none;
  color: #78787873;
  font-size: 22px;
  cursor: pointer;
  margin: 12px;
  font-weight: 500;
  &:hover {
    color: black;
  }
  ${(props) => props.$active && "font-weight: 500; color: black;"}
  @media (max-width: 800px) {
    font-size: 18px;
  }
`;

const NavbarAvatar = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 10px;
  @media (max-width: 800px) {
    display: none;
  }
`;

const NavbarAvatarImage = styled.div`
  background-image: url(${avatar});
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
`;

export default function Header() {
  const location = useLocation();
  const { user, setUser } = useContext(AuthContext);
  const history = useHistory();

  const handleLogout = () => {
    setAuthToken("");
    setUser(null);
    successAlert("log out successfully!", "See you soon!", "success");
    if (location.pathname !== "/") {
      history.push("/");
    }
  };

  return (
    <Root>
      <Navbar>
        <NavbarSiteName>LIDEMY</NavbarSiteName>
        <NavbarList>
          <NavbarListLeft>
            <Nav to="/" $active={location.pathname === "/"}>
              Lists
            </Nav>
            <Nav to="/about" $active={location.pathname === "/about"}>
              About
            </Nav>
          </NavbarListLeft>
          <NavbarListRight>
            {user && (
              <Nav to="/write" $active={location.pathname === "/write"}>
                Write a story
              </Nav>
            )}
            {user && (
              <Nav to="/" onClick={handleLogout}>
                Sign out
              </Nav>
            )}
            {!user && (
              <Nav to="/signin" $active={location.pathname === "/signin"}>
                Sign in
              </Nav>
            )}
            {!user && (
              <Nav to="/signup" $active={location.pathname === "/signup"}>
                Sign up
              </Nav>
            )}
          </NavbarListRight>
        </NavbarList>
        <NavbarAvatar>
          <NavbarAvatarImage />
        </NavbarAvatar>
      </Navbar>
    </Root>
  );
}
