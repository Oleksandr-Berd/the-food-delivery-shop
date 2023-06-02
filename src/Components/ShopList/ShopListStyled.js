import { NavLink } from "react-router-dom";
import styled from "styled-components"

export const Container = styled.div`
padding-left: ${(props) => props.theme.spacing[5] + "px"};
padding-right: ${(props) => props.theme.spacing[5] + "px"};


font-family: ${props => props.theme.fontFamily.text};
color: ${props => props.theme.color.text};

`;

export const Title = styled.h2`
margin-bottom:${props => props.theme.spacing[5]+ "px"};

font-family: ${props => props.theme.fontFamily.title};
`

export const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: ${(props) => props.theme.spacing[3] + "px"};
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: ${(props) => props.theme.color.text};
  font-family: ${(props) => props.theme.fontFamily.text};
  font-size: ${(props) => props.theme.size.S};

  transition: ${(props) => props.theme.transition};

  &:hover,
  &:focus {
    color: ${(props) => props.theme.color.accent};

    transition: ${(props) => props.theme.transition};
  }
`;