import styled from "styled-components"

export const PageContainer = styled.div`
 /* display: flex;
 flex-direction: row;
 justify-content: center; */
`;


export const Form = styled.form`
  padding-top: ${(props) => props.theme.spacing[5] + "px"};
  padding-bottom: ${(props) => props.theme.spacing[5] + "px"};
  padding-right: ${(props) => props.theme.spacing[2] + "px"};
  padding-left: ${(props) => props.theme.spacing[2] + "px"};
  margin-right: auto;
  margin-left: auto;


  border: 2px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;


  padding-top: ${(props) => props.theme.spacing[5] + "px"};
  padding-bottom: ${(props) => props.theme.spacing[5] + "px"};
  padding-right: ${(props) => props.theme.spacing[7] + "px"};
  padding-left: ${(props) => props.theme.spacing[7] + "px"};
`;

export const GeneralInputContainer = styled.div`
  padding-top: ${(props) => props.theme.spacing[5] + "px"};
  padding-bottom: ${(props) => props.theme.spacing[5] + "px"};
  padding-right: ${(props) => props.theme.spacing[11] + "px"};
  padding-left: ${(props) => props.theme.spacing[10] + "px"};

  width: ${(props) => props.theme.percentage[6]};

  background-color: ${(props) => props.theme.color.backgroundCard};

  border: 2px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  &:not(:last-child) {
    margin-bottom: ${(props) => props.theme.spacing[7] + "px"};
  }

  text-align: left;
`;

export const Input = styled.input`
  padding-top: ${(props) => props.theme.spacing[2] + "px"};
  padding-bottom: ${(props) => props.theme.spacing[2] + "px"};
  padding-right: ${(props) => props.theme.spacing[5] + "px"};

  background-color: #fdf5e6;
  font-size: ${(props) => props.theme.size.S};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 0, 0, 0.3),
    0 0 30px rgba(0, 0, 0, 0.1);
  border: none;
  outline: none;
  border-radius: ${(props) => props.theme.radius[4] + "px"};
  transition: box-shadow 300ms ease;

  &:hover,
  &:focus {
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.5),
      0 0 30px rgba(255, 255, 255, 0.3), 0 0 45px rgba(255, 255, 255, 0.1);
  }
`;

export const Label = styled.label`
  margin-bottom: ${(props) => props.theme.spacing[1] + "px"};

  font-size: ${props => props.theme.size.M};
  font-style: italic;
  font-weight: ${props => props.theme.weight.bold};
  font-family: ${props => props.theme.fontFamily.text};
`;

export const TotalContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-end;

margin-right: ${props => props.theme.spacing[10]+"px"};
`

export const TotalPrice = styled.p`
  margin-right: ${(props) => props.theme.spacing[10] + "px"};

  font-weight: ${props => props.theme.weight.bold};
  font-size: ${[props => props.theme.size.M]};
  font-family: ${props => props.theme.fontFamily.text};
`;

export const Button = styled.button`
  background-color: #ffdb58;
  color: ${(props) => props.theme.color.text};
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #ffc000;
  }
`;