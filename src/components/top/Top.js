import React from "react";
import styled from "styled-components";
import { LeftSide } from "./left/LeftSide";
import { Header } from "../header/Header";
import { SlideShow } from "./right/SlideShow";

/**
 *   Top
 *
 *  @component
 *
 */
export const Top = ( props ) => {
  return ( <>
    <Header/>
    <Container>
      <LeftSide/>
      <SlideShow/>
    </Container>
  </> );
};

const Container = styled.div`
display: flex;
flex-direction: row;
`;

Top.propTypes = {};
