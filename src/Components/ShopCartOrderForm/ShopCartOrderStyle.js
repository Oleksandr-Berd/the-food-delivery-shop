import styled from "styled-components"

export const PageContainer = styled.div`
 /* display: flex;
 flex-direction: row;
 justify-content: center; */
`;


export const Form = styled.form`
  /* padding-top: ${(props) => props.theme.spacing[5] + "px"};
  padding-bottom: ${(props) => props.theme.spacing[5] + "px"};
  padding-right: ${(props) => props.theme.spacing[7] + "px"};
  padding-left: ${(props) => props.theme.spacing[7] + "px"};

  border: 2px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const GeneralInputContainer = styled.div`
  padding-top: ${(props) => props.theme.spacing[5] + "px"};
  padding-bottom: ${(props) => props.theme.spacing[5] + "px"};
  padding-right: ${(props) => props.theme.spacing[7] + "px"};
  padding-left: ${(props) => props.theme.spacing[7] + "px"};

  border: 2px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  

  text-align: left;
`;

export const Input = styled.input`
  width:${(props) => props.theme.spacing[13] + "px"}
`;