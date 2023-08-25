import React from "react";
import styled from "styled-components";

/**
 *   Button
 *
 *  @component
 *
 */
export const Button = ( { bgColor = "#69C7AD", color = "white", ...props } ) => {
  return ( <Container bgColor={ bgColor } color={ color }>
    { props.children && props.children }
  </Container> );
};

const Container = styled.div`
border-radius: 50px;
background: ${ props => props.bgColor };
color: ${ props => props.color };
padding: 0 30px;
`;

Button.propTypes = {};
