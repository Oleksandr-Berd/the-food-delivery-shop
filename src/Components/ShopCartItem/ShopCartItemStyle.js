import styled from "styled-components"

export const Item = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding-top: ${(props) => props.theme.spacing[5] + "px"};
  padding-bottom: ${(props) => props.theme.spacing[5] + "px"};
  padding-right: ${(props) => props.theme.spacing[7] + "px"};
  padding-left: ${(props) => props.theme.spacing[7] + "px"};
  margin-bottom: ${(props) => props.theme.spacing[7] + "px"};

 

  border: 2px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Image = styled.img`
  height: ${(props) => props.theme.spacing[11] + "px"};
  margin-right: ${(props) => props.theme.spacing[5] + "px"};
`;

export const TextContainer = styled.div`
text-align: left;
`