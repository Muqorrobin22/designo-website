import React from "react";

import styled from "styled-components";
import Service from "../../utils/services/Service";
import { servicesData } from "../../utils/services/ServiceData";

const ServiceData = servicesData();

function ServicesHome() {
  return (
    <ServiceWrap>
      {ServiceData.map((data) => (
        <Service
          margin
          key={data.title}
          title={data.title}
          images={data.img}
          to={data.to}
        />
      ))}
    </ServiceWrap>
  );
}

const ServiceWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 12rem 0;
`;

export default ServicesHome;
