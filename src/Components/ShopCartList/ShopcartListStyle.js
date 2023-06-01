import styled from "styled-components";


export const CustomList = styled.ul`
  padding-top: ${(props) => props.theme.spacing[3] + "px"};
  padding-right: ${(props) => props.theme.spacing[7] + "px"};
  padding-left: ${(props) => props.theme.spacing[7] + "px"};
  margin-left: ${(props) => props.theme.spacing[5] + "px"};
  width: ${(props) => props.theme.percentage[6]};
/* height: 100%; */

  border: 2px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;