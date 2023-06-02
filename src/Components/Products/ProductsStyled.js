import styled from "styled-components"

export const ProductsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${(props) => props.theme.spacing[5] + "px"};
  justify-items: end;

  padding-right: ${(props) => props.theme.spacing[8] + "px"};
  padding-top: ${(props) => props.theme.spacing[8] + "px"};
`;

export const ProductsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  padding-left: ${(props) => props.theme.spacing[5] + "px"};
  padding-right: ${(props) => props.theme.spacing[5] + "px"};
  padding-top: ${(props) => props.theme.spacing[3] + "px"};
  padding-bottom: ${(props) => props.theme.spacing[3] + "px"};

  color: ${(props) => props.theme.color.text};
  background-color: ${props => props.theme.color.backgroundCard};
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  border: 2px solid #00cc00;
`;

export const ProductsImage = styled.img`
  width: ${(props) => props.theme.percentage[7]};
  margin-bottom: ${(props) => props.theme.spacing[3] + "px"};
  margin-right: auto;
  margin-left: auto;
`;

export const ProductsTitle = styled.h2`
  margin-bottom: ${(props) => props.theme.spacing[2] + "px"};

  font-size: ${(props) => props.theme.size.M};
`;

export const Text = styled.p`
  margin-bottom: ${(props) => props.theme.spacing[2] + "px"};

  color: ${(props) => props.theme.color.text};
  font-family: ${(props) => props.theme.fontFamily.text};
  font-size: ${(props) => props.theme.size.S};
`;

export const Button = styled.button`
  display: inline-block;
  padding: 10px 20px;
  margin-right: auto;
  margin-left: auto;

  border: ${(props) =>
    props.status === "untouched" ? props.theme.border : "transparent"};

  border-radius: 5px;
  background: ${(props) =>
    props.status === "untouched" ? props.theme.color.buttonAdd : "transparent"};
  color: ${(props) =>
    props.status === "untouched"
      ? props.theme.color.text
      : props.theme.color.backgroundCard};
  font-weight: bold;
  transition: border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover,
  &:focus {
    border-color: ${(props) =>
      props.status === "untouched" ? "#ffc000" : "none"};
    box-shadow: ${(props) =>
      props.status === "untouched" ? props.theme.boxShadow : "none"};

    cursor: ${(props) => props.status !== "untouched" && "default"};
  }
`;