import React from "react";
import styled from "styled-components";

/**
 *   Section
 *
 *  @component
 *
 */
export const Section = ( { bgColor = "#4E5266", ...props } ) => {
  return ( <div style={{background: bgColor}}>
    <InnerContainer>
      { props.children && props.children }
    </InnerContainer>
  </div> );
};

const InnerContainer = styled.div`
max-width: 1000px;
margin: 0 auto;
  border: 0 solid red;
`;

Section.propTypes = {};
