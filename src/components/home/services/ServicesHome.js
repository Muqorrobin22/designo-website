import React from "react";

import styled from "styled-components";
import Service from "../../utils/services/Service";
import {
  ServiceDataForWeb,
  servicesData,
} from "../../utils/services/ServiceData";
import { useMediaQuery } from "react-responsive";

const ServiceData = servicesData();
const ServiceDataWeb = ServiceDataForWeb();

function ServicesHome() {
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 1440px)" });

  return (
    <div>
      {isDesktop ? (
        <ServiceWrapGrid>
          <div className={ServiceData[0].class}>
            <Service
              margin
              key={ServiceData[0].title}
              title={ServiceData[0].title}
              images={ServiceData[0].imgDesktop}
              to={ServiceData[0].to}
              grid
            />
          </div>
          {ServiceDataWeb.map((data) => (
            <div key={data.title} className={data.class}>
              {" "}
              <Service
                margin
                key={data.title}
                title={data.title}
                images={data.imgDesktop}
                to={data.to}
              />{" "}
            </div>
          ))}
        </ServiceWrapGrid>
      ) : (
        <ServiceWrap>
          {ServiceData.map((data) => (
            <Service
              margin
              key={data.title}
              title={data.title}
              images={isTablet ? data.imgTablet : data.img}
              to={data.to}
            />
          ))}
        </ServiceWrap>
      )}
    </div>
  );
}

const ServiceWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 12rem 0;
`;

const ServiceWrapGrid = styled.div`
  display: grid;
  box-sizing: border-box;
  margin: 5rem 16rem;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 24px 30px;
  justify-items: center;
  grid-template-areas:
    "Web app"
    "Web graphic";

  .web {
    grid-area: Web;
  }

  .app {
    grid-area: app;
  }
  .grap {
    grid-area: graphic;
  }
`;

export default ServicesHome;
