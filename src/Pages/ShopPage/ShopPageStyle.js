import styled from "styled-components"

export const ShopPageContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
`

export const SideBar = styled.div`
  padding-left: ${(props) => props.theme.spacing[5] + "px"};
  padding-right: ${(props) => props.theme.spacing[5] + "px"};
  padding-top: ${(props) => props.theme.spacing[3] + "px"};
  padding-bottom: ${(props) => props.theme.spacing[3] + "px"};

  text-align: left;
`;