import { useState } from "react";
import styled from "styled-components";
import LoginForm from "../components/LoginForm";
import { Button } from "../styles";
import DeleteTask from "../components/DeleteTask";

function DeleteTaskPage({ user}) {

  return (
    <Wrapper>
          <DeleteTask user={user}/>
    </Wrapper>
  );
}

const Logo = styled.h1`
  font-family: "Roboto", cursive;
  font-size: 3rem;
  color: goldenrod;
  margin: 8px 0 16px;
`;

const Wrapper = styled.section`
  max-width: 500px;
  margin: 40px auto;
  padding: 16px;
`;

const Divider = styled.hr`
  border: none;
  border-bottom: 1px solid #ccc;
  margin: 16px 0;
`;

export default DeleteTaskPage;
