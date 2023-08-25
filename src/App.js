import React from "react";
import { Header } from "./components/header/Header";
import { Top }     from "./components/top/Top";
import { Section } from "./components/section/Section";
import { Video }   from "./components/video/Video";
import './App.css'
import styled from "styled-components";

function App(){
  return (
      <AppContainer className="App">
        <Section>
          <Top/>
        </Section>
        <Section bgColor={ "rgb(67, 75, 86)" }>
          <Video/>
        </Section>
      </AppContainer>
  );
}

const AppContainer = styled.div`
min-height: 100vh;
`;

export default App;