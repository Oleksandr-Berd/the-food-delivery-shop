import styled from "styled-components"

export const LogoContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;

margin-right: ${props => props.theme.spacing[5] +"px"};
`

export const Logo = styled.img`
width: ${props=> props.theme.spacing[9]+"px"};
`