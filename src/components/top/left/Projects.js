import React from "react";
import styled from "styled-components";
import { Button } from "../../button/Button";

/**
 *   Projects
 *
 *  @component
 *
 */
export const Projects = ( props ) => {
  return ( <Container>
    <h2 className={ "project-text" }>I have provided several projects for
      viewing.</h2>
    <Button bgColor={ "#4CABB1" }><h2>My Projects</h2></Button>
  </Container> );
};

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #69c7ad;
height: 400px;
width: 100%;

.project-text{
text-align: center;
margin: 40px;
color: rgba(255, 255, 255, .8);
}
`;

Projects.propTypes = {};
