import Accordion from "react-bootstrap/Accordion";

import * as SC from "./ProductsStyled";

function Description({ description }) {

  return (
    <SC.AccordionDescriptionTitle >
      <SC.AccordionDescription eventKey="">
        <Accordion.Header>Description</Accordion.Header>
        <Accordion.Body>{description}</Accordion.Body>
      </SC.AccordionDescription>
    </SC.AccordionDescriptionTitle>
  );
}

export default Description;
