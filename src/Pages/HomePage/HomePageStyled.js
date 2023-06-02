import styled from "styled-components";

export const HomePage = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  justify-content: center;
  grid-template-rows: 1fr;
  margin: 0 auto;
`;

export const GridPanelFirst = styled.div`
  display: grid;
  grid-template-rows: 1fr 2fr;
  min-height: 100%;
`;

export const GridPanelSecond = styled.div`
  display: grid;
  grid-template-rows: 2fr 1fr;
  min-height: 100%;
`;

export const GridPanelSmall = styled.div`
  grid-auto-rows: 1fr;
  grid-template-columns: 1fr;
`;

export const GridPanelTall = styled.div`
  grid-auto-rows: 2fr;
`;

export const GridImg = styled.img`
  max-width: 100%;
  min-height: 100%;
`;


export const HomePageTitle = styled.h1``;
