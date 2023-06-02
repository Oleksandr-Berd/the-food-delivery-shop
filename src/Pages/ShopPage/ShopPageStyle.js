import styled from "styled-components"

export const ShopPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  background: linear-gradient(45deg, #c0ffc0, #e0ffd9);
  transition: background-color 0.5s ease-in-out;
`;

export const SideBar = styled.div`
  padding-left: ${(props) => props.theme.spacing[5] + "px"};
  padding-right: ${(props) => props.theme.spacing[5] + "px"};
  padding-top: ${(props) => props.theme.spacing[3] + "px"};
  padding-bottom: ${(props) => props.theme.spacing[3] + "px"};

  text-align: left;
  background: linear-gradient(45deg, #98ff98, #b2febf);
  transition: background-color 0.5s ease-in-out;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-right: 1px solid rgba(0, 0, 0, 0.2);
`;

export const Title = styled.h1`
  padding-left: ${(props) => props.theme.spacing[5] + "px"};
  padding-right: ${(props) => props.theme.spacing[5] + "px"};
  padding-top: ${(props) => props.theme.spacing[5] + "px"};
  padding-bottom: ${(props) => props.theme.spacing[5] + "px"};

  font-size: ${(props) => props.theme.size.XM};
  font-style: italic;
  font-family: ${(props) => props.theme.fontFamily.title};
  font-weight: ${(props) => props.theme.weight.bold};
  color: ${(props) => props.theme.color.title};
`;