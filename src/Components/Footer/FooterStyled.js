import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  padding-top: ${(props) => props.theme.spacing[5] + "px"};
  padding-bottom: ${(props) => props.theme.spacing[5] + "px"};

  background-color: ${(props) => props.theme.color.dark};
`;

export const Copyright = styled.p`
  margin-right: ${(props) => props.theme.spacing[5] + "px"};

  color: ${(props) => props.theme.color.lightText};
  font-family: ${(props) => props.theme.fontFamily.title};
  font-style: italic;
  font-weight: ${(props) => props.theme.weight.bold};
  font-size: ${(props) => props.theme.size.M};
`;

export const AddressList = styled.ul`
  margin-bottom: ${(props) => props.theme.spacing[5] + "px"};
`;

export const AddressItem = styled.li`
  &:not(:last-child) {
    margin-bottom: ${(props) => props.theme.spacing[3] + "px"};
  }
`;

export const AddressLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.color.lightText};
  transition: ${(props) => props.theme.transition};

  &:hover,
  &:focus {
    color: ${(props) => props.theme.color.accent};

    transition: ${(props) => props.theme.transition};
  }
`;

export const SocList = styled.ul`
  display: flex;
  flex-direction: row;

  & > *:not(:last-child) {
    margin-right: ${(props) => props.theme.spacing[3] + "px"};
  }
`;
