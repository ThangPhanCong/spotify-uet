import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  padding: 20px;
  margin: 0 auto;
  justify-content: space-evenly;
  background-color: rgba(0,0,0);
  opacity: 0.4
`;

const TitleName = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #FFF;
`;

const ActionButton = styled.button`
    border: 2px solid palevioletred;
    border-radius: 3px;
    height: 40px;
    width: 100px;
    background-color: transparent;
    color: #FFF;
`;

class Test extends Component {
  render() {
    return (
      <Container>
        <TitleName>
          Thanguet
        </TitleName>

        <ActionButton>
          Login
        </ActionButton>
      </Container>
    )
  }
}

export default Test;