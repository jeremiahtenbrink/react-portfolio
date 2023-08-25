import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Andras from "../../../images/andras-vas-Bd7gNnWJBkU-unsplash.jpg";
import Daniel from "../../../images/daniel-korpai-HyTwtsk8XqA-unsplash.jpg";
import Haivan from "../../../images/dhe-haivan-JwLiLq24QbA-unsplash.jpg";
import Fotis from "../../../images/fotis-fotopoulos-LJ9KY8pIH3E-unsplash.jpg";
import Jeremiah from "../../../images/JeremiahNavy.jpg";
import Tianyi from "../../../images/tianyi-ma-WiONHd_zYI4-unsplash.jpg";

/**
 *   SlideShow
 *
 *  @component
 *
 */
export const SlideShow = ( props ) => {
  
  const slides = [ Jeremiah, Andras, Daniel, Haivan, Fotis, Tianyi ];
  const [ index, setIndex ] = useState( 0 );
  const [ className, setClassName ] = useState( "hidden" );
  
  useEffect( () => {
    setClassName( "hidden" );
    window.setTimeout( () => {
      setClassName( "active" );
    }, 3100 );
    window.setTimeout( () => {
      if( index < slides.length - 1 ){
        setIndex( index + 1 );
      }else{
        setIndex( 0 );
      }
    }, 4000 );
  }, [ index ] );
  
  return ( <Container slide={ slides[ index ] }>
    <Cover className={ className }/>
  </Container> );
};

const Container = styled.div`
position: relative;
max-width: 60%;
background: url("${ props => props.slide }");
height: 700px;
background-size: cover;
width: 100%;
`;

const Cover = styled.div`
position: absolute;
background: black;
transition: opacity 1s;
height: 100%;
width: 100%;
`;

SlideShow.propTypes = {};
