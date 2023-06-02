import { NavLink } from "react-router-dom"
import styled from "styled-components"

export const Link = styled(NavLink)`
  &:not(:last-child) {
    margin-right: ${(props) => props.theme.spacing[7] + "px"};
    padding-right: ${(props) => props.theme.spacing[7] + "px"};

    border-right: 2px solid #3d1e02;
  }

  text-decoration: none;
  font-size: ${(props) => props.theme.size.M};
  color: ${(props) => props.theme.color.text};
  font-family: ${(props) => props.theme.fontFamily.text};

  transition: ${(props) => props.theme.transition};

  &:hover,
  &:focus {
    color: ${(props) => props.theme.color.accent};

    transition: ${(props) => props.theme.transition};
  }

`;