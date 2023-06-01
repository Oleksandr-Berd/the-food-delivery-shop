import styled from "styled-components"
import Accordion from "react-bootstrap/Accordion";


export const ProductsList = styled.ul`
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: ${props => props.theme.spacing[5] + "px"};
justify-items: end;

padding-right: ${props=>props.theme.spacing[8]+"px"};
`

export const ProductsItem = styled.li`
display: flex;
flex-direction: column;
justify-content: space-around;

  width: ${(props) => props.theme.percentage[6]};
  padding-left: ${(props) => props.theme.spacing[5] + "px"};
  padding-right: ${(props) => props.theme.spacing[5] + "px"};
  padding-top: ${(props) => props.theme.spacing[3] + "px"};
  padding-bottom: ${(props) => props.theme.spacing[3] + "px"};

  border: 2px solid #ff6600;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const ProductsImage = styled.img`
  width: ${(props) => props.theme.percentage[10]};
  margin-bottom: ${(props) => props.theme.spacing[3] + "px"};
`;

export const ProductsTitle = styled.h2`
  display: inline-block;
  margin-bottom: ${(props) => props.theme.spacing[3] + "px"};

  font-size: ${(props) => props.theme.size.M};
`;

export const ProductsDescription = styled.article`
  margin-bottom: ${(props) => props.theme.spacing[3] + "px"};
`;


export const AccordionDescription = styled(Accordion.Item)`
 line-height: 1.4;
`;

export const AccordionDescriptionTitle = styled(Accordion)`
  margin-bottom: ${(props) => props.theme.spacing[7] + "px"};
  margin-left: ${(props) => props.theme.spacing[3] + "px"};
  margin-right: ${(props) => props.theme.spacing[3] + "px"};

`;