import styled from "styled-components"

export const LogoContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;

margin-right: ${props => props.theme.spacing[10] +"px"};
`

export const Logo = styled.img`
  width: ${(props) => props.theme.spacing[10] + "px"};
  margin-right: ${(props) => props.theme.spacing[3] + "px"};
  margin-left: ${(props) => props.theme.spacing[3] + "px"};
`;

export const LogoText = styled.p`
font-size: ${props => props.theme.size.M};
font-style: italic;
font-family: ${props => props.theme.fontFamily.title};
font-weight: ${props => props.theme.weight.bold};
color:${props => props.theme.color.text};
`