import React from "react";
import styled from "styled-components/native";
import { Button, TextInput } from "../components/shared";
import { colors } from "../constants/Color";

const GameScreen = () => {
  const [word, setWord] = React.useState("");

  const handleWordChange = (text: string) => {
    setWord(text);
  };

  const handleCheckWord = () => {
    console.log(`Checking word: ${word}`);
  };

  return (
    <Container>
      <Title>Find the word!</Title>
      <InputContainer>
        <TextInput placeholder="Enter your word here" value={word} onChangeText={handleWordChange} />
        <Button title="Check" onPress={handleCheckWord} />
      </InputContainer>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${colors.background};
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 24px;
`;

const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export default GameScreen;
