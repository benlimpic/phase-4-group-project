import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faGhost } from "@fortawesome/free-solid-svg-icons";



function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  const [isShow, setIsShow] = React.useState(false);
  const [isMinus, setIsMinus] = React.useState(false);

  return (
    <div className="navbar">
    <Wrapper>
      <Logo >
        <Link to="/" onClick={() => {
          setIsMinus(false) 
          setIsShow(false)}}>Taskify</Link>
      </Logo>
      <Nav>
        {isShow ? <Button onClick={() => setIsShow(!isShow)} as={Link} to='/create-project' >New Project</Button> : null}
        {isShow ? <Button as={Link} to='/create' onClick={() => setIsShow(!isShow)} >New Task</Button> : null}
        {!isMinus ? <Button onClick={() => {
          setIsMinus(!isMinus)
          setIsShow(false)
          }}><FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon></Button> : null}
        {isMinus ? <Button as={Link} to='/delete-project' onClick={() => setIsMinus(!isMinus)}>Delete Project</Button> : null}
        {isMinus ? <Button as={Link} to='/delete-task' onClick={() => setIsMinus(!isMinus)}>Delete Task</Button> : null}
        {!isShow ? <Button onClick={() => {
          setIsShow(!isShow)
          setIsMinus(false)
          }}><FontAwesomeIcon icon={faGhost}></FontAwesomeIcon></Button> : null}
        <Button variant="outline" onClick={handleLogoutClick}>
          Logout
        </Button>
      </Nav>
    </Wrapper>
    </div>
  );
}

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

const Logo = styled.h1`
  font-family: "Roboto", cursive;
  font-size: 3rem;
  color: goldenrod;
  margin: 0;
  line-height: 2;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 4px;
  position: absolute;
  right: 8px;
`;

export default NavBar;
