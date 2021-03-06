import React, { useContext } from "react";
import { SpaceContext } from "../contexts/SpaceContext";
import styled from "styled-components";

const Space = () => {
  const { currentSpace, setSpace } = useContext(SpaceContext);

  const portalStyle = {
    marginTop: "10px"
  };

  const Headline = styled.h6`
    font-weight: 100;
    font-size: 1.3rem;
    padding: 1rem;
  `;

  const SpaceSelector = styled.nav`
    padding-bottom: 1rem;
  `;

  const SpaceInfo = styled.p`
    font-size: 2rem;
  `;

  const Intro = styled.p`
    font-size: 1.3rem;
  `;

  const roomName = styled.p`
    font-size: 1.3rem;
  `;

  const CurrentSpace = styled.span`
    color: pink;
  `;

  return (
    <SpaceSelector>
      <span>
        <Headline>Welcome to Open Climate Policy Lab.</Headline>
        <SpaceInfo>
          You're in the <CurrentSpace>{currentSpace}</CurrentSpace>!
        </SpaceInfo>
      </span>

      <div className="map-container">
        <span className="mapInstructions">
          Click a location below to join a conversation.
        </span>
        <img
          src="map-liminal2.png"
          className="image-map"
          alt="map"
          onClick={() => setSpace("Lab")}
        />
        <span className="defaultRoomName">Lab</span>
        <div
          className="click-zone a"
          data-zone="Living Room"
          onClick={() => setSpace("Fact-checking Hub")}
        >
          <span className="roomName">Fact-Checking</span>
        </div>
        <div
          className="click-zone b"
          data-zone="Dining Room"
          onClick={() => setSpace("Open Data Hub")}
        >
          <span className="roomName">Open Data</span>
        </div>
        <div
          className="click-zone c"
          data-zone="Sunset Patio"
          onClick={() => setSpace("Storytelling Hub")}
        >
          <span className="roomName">Storytelling</span>
        </div>
        <div
          className="click-zone d"
          data-zone="Portal Zone"
          onClick={() => setSpace("Think Tank")}
        >
          <span className="roomName" style={portalStyle}>
            Think Tank
          </span>
        </div>
      </div>
    </SpaceSelector>
  );
};

export default Space;
