import React from "react";
import styled from "styled-components";
import { Github } from "./Github";
import { LinkedIn } from "./LinkedIn";
import { Email } from "./Email";
import { Button } from "../../button/Button";

/**
 *   Contact
 *
 *  @component
 *
 */
export const Contact = ( props ) => {
  
  return ( <Container>
    <Icons>
      <Email height={ 65 }/>
      <Github height={ 65 }/>
      <LinkedIn height={ 65 }/>
    </Icons>
    <Button><h2>Contact Info</h2></Button>
  </Container> );
};

const Icons = styled.div`
display: flex;
margin-bottom: 2rem;
`;

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #4cabb1;
height: 300px;
width: 100%;
`;

Contact.propTypes = {};
