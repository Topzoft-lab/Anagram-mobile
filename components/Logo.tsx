import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";
import { colors } from "../constants/Color";

const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
`;
// prettier-ignore
const First = styled.Text`
background-color: ${colors.primary};
  padding: 0 10px;
  border-radius: 10px;
  font-family: Kalam;
  font-size: 25px;
  font-weight: 600;
  color: ${colors.secondary};
  transform: rotate(20deg);
  border: 1px solid #524a79;
  z-index: 1;
  box-shadow: 0px 2px 5px #524a79;
`;
// prettier-ignore
const Second = styled.Text`
  border-radius: 10px;
  padding: 0 10px;
  background-color: ${colors.primary};
  font-family: Kalam;
  color: ${colors.secondary};
  font-size: 25px;
  font-weight: 600;
  transform: rotate(-10deg);
  border: 1px solid #524a79;
  box-shadow: 0px 2px 5px #524a79;
`;

// prettier-ignore
const Third = styled.Text`
  border-radius: 10px;
  padding: 0 10px;
  background-color: ${colors.primary};
  font-family: Kalam;
  color: ${colors.secondary};
  font-size: 25px;
  font-weight: 600;
  transform: rotate(300deg);
  border: 1px solid #524a79;
  z-index: 1;
  box-shadow: 0px 2px 5px #524a79;
`;

const Logo = () => (
  <Container>
    <First>A</First>
    <Second>B</Second>
    <Third>C</Third>
  </Container>
);

export default Logo;
