import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: ${(props) => props.theme.spacing[7] + "px"};
  padding-top: ${(props) => props.theme.spacing[3] + "px"};
  padding-bottom: ${(props) => props.theme.spacing[3] + "px"};

  background: linear-gradient(45deg, #98ff98, #b2febf);
  transition: background-color 0.5s ease-in-out;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

export const Title = styled.h1`
margin-left: ${props => props.theme.spacing[10]+"px"};

  font-size: ${(props) => props.theme.size.XM};
  font-style: italic;
  font-family: ${(props) => props.theme.fontFamily.title};
  font-weight: ${(props) => props.theme.weight.bold};
  color: ${(props) => props.theme.color.title};
`;