import React from "react";
import styled from "styled-components";
import { Contact } from "./Contact";
import { Projects } from "./Projects";

/**
 *   LeftSide
 *
 *  @component
 *
 */
export const LeftSide = ( props ) => {
  
  return ( <Container>
    <Contact/>
    <Projects/>
  </Container> );
};

const Container = styled.div`
max-width: 40%;
`;

LeftSide.propTypes = {};
