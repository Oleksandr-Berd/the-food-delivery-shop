import styled from "styled-components";
import { List } from "react-virtualized";


export const CustomList = styled(List)`
  padding-top: ${(props) => props.theme.spacing[3] + "px"};
  padding-right: ${(props) => props.theme.spacing[7] + "px"};
  padding-left: ${(props) => props.theme.spacing[7] + "px"};
  margin-left: ${(props) => props.theme.spacing[5] + "px"};

  border: 2px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;