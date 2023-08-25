import React, { useState } from "react";
import styled from "styled-components";
import Calendar from "../../videos/Calendar component from scratch.mp4";
import PMDashboard from '../../videos/pmDashboard.mp4';
import ReactPlayer from 'react-player'

const PROJECTS = [
  {
    title: "Calendar Svg",
    video: Calendar,
    description: "Something long and annoying to write"
  }, {
    title: "PM Dashboard",
    video: PMDashboard,
    description: "Something long and annoying to write"
  }
]

/**
 *   Video
 *
 *  @component
 *
 */
export const Video = ( props ) => {
  const videos = [ Calendar, PMDashboard ];
  const [ video, setVideo ] = useState( videos[ 0 ] );

  return ( <Container>
    {PROJECTS.map((proj, index) => {
      return <div onClick={() => setVideo(index)}>{proj.title}</div>
    })}
    <ReactPlayer controls={true} url={video}></ReactPlayer>
  </Container> );
};

const Container = styled.div`
background: rgb(254, 213, 134);
min-height: 1rem;
display: flex;
justify-content: center;
align-items: center;
  padding: 2rem 0;
  
`;

Video.propTypes = {};
