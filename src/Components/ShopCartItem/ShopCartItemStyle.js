import styled from "styled-components"

export const Item = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding-top: ${(props) => props.theme.spacing[5] + "px"};
  padding-bottom: ${(props) => props.theme.spacing[5] + "px"};
  padding-right: ${(props) => props.theme.spacing[7] + "px"};
  padding-left: ${(props) => props.theme.spacing[7] + "px"};
  margin-bottom: ${(props) => props.theme.spacing[7] + "px"};

 
background-color: #fff;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Image = styled.img`
  height: ${(props) => props.theme.spacing[11] + "px"};
  margin-right: ${(props) => props.theme.spacing[5] + "px"};
`;

export const TextContainer = styled.div`
text-align: left;
`

export const Input = styled.input`
  padding-left: ${(props) => props.theme.spacing[7] + "px"};

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

export const Text = styled.p`
  margin-bottom: ${(props) => props.theme.spacing[4] + "px"};
  font-family: ${props => props.theme.fontFamily.text};
`;