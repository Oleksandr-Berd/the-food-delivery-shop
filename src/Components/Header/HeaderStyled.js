import styled from "styled-components"

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding-left: ${(props) => props.theme.spacing[5] + "px"};
  padding-top: ${(props) => props.theme.spacing[3] + "px"};
  padding-bottom: ${(props) => props.theme.spacing[3] + "px"};
`;