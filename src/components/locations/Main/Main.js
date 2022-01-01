import React from "react";
import styled from "styled-components";
import { getAboutData } from "../../utils/About/AboutData";
import Location from "../../utils/Locations/Location";

const aboutData = getAboutData();

function Main() {
  return (
    <Wrap>
      {aboutData.map((data) => (
        <Location
          key={data.title}
          title={data.title}
          address={data.office}
          contact1={data.contact1}
          contact2={data.contact2}
          Images={data.imagesDesk}
        />
      ))}
    </Wrap>
  );
}

const Wrap = styled.div`
  margin-bottom: 12rem;
`;

export default Main;
