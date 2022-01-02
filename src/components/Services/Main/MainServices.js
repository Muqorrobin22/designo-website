import React from "react";
import styled from "styled-components";
import Service from "../../utils/services/Service";
import {
  ServiceDataForApp,
  ServiceDataForGraphic,
  ServiceDataForWeb,
  servicesData,
} from "../../utils/services/ServiceData";
import ShowCast from "../../utils/services/ShowCast";

const ServiceData = servicesData();
const WebData = ServiceDataForWeb();
const AppData = ServiceDataForApp();
const Graph = ServiceDataForGraphic();

export function MainServicesWeb() {
  console.log(WebData);
  return (
    <MainServicesWrap>
      {ServiceData[0].project.map((data) => (
        <ShowCast
          key={data.title}
          title={data.title}
          desc={data.desc}
          images={data.images}
        />
      ))}
      <div className="data">
        {WebData.map((data) => (
          <Service
            margin
            key={data.title}
            title={data.title}
            images={data.img}
            to={data.to}
          />
        ))}
      </div>
    </MainServicesWrap>
  );
}
export function MainServicesApp() {
  return (
    <MainServicesWrap>
      {ServiceData[1].project.map((data) => (
        <ShowCast
          key={data.title}
          title={data.title}
          desc={data.desc}
          images={data.images}
        />
      ))}
      <div className="data">
        {AppData.map((data) => (
          <Service
            margin
            key={data.title}
            title={data.title}
            images={data.img}
            to={data.to}
          />
        ))}
      </div>
    </MainServicesWrap>
  );
}
export function MainServicesGraph() {
  return (
    <MainServicesWrap>
      {ServiceData[2].project.map((data) => (
        <ShowCast
          key={data.title}
          title={data.title}
          desc={data.desc}
          images={data.images}
        />
      ))}
      <div className="data">
        {Graph.map((data) => (
          <Service
            margin
            key={data.title}
            title={data.title}
            images={data.img}
            to={data.to}
          />
        ))}
      </div>
    </MainServicesWrap>
  );
}

const MainServicesWrap = styled.div`
  margin: 9.6rem 2.4rem;
  .data {
    margin: 9.6rem auto;
  }

  @media (min-width: 768px) {
    .data {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  @media (min-width: 1440px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 12rem 10rem;
    .data {
      flex-direction: row;
      margin: 12rem 10rem;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }
  }
`;
