import React from "react";
import styled from "styled-components/native";
import { TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

const StyledButton = styled.TouchableOpacity`
  background-color: blue;
  padding: 10px 15px;
  border-radius: 5px;
`;

const ButtonText = styled.Text`
  color: white;
  font-weight: bold;
`;

const Button: React.FC<ButtonProps> = ({ title, ...props }) => (
  <StyledButton {...props}>
    <ButtonText>{title}</ButtonText>
  </StyledButton>
);

export default Button;
