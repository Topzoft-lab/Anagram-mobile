import React, { useState } from "react";
import { TouchableOpacity, Text } from "react-native";
import styled from "styled-components/native";
import { colors } from "../constants/Color";

const GameListItem = ({ text, onPress }) => {
  const [backgroundColor, setBackgroundColor] = useState("transparent");

  const handlePress = () => {
    setBackgroundColor("#79B4B7");
  };

  return (
    <InnerList>
      <GameListButton onPress={handlePress} backgroundColor={backgroundColor}>
        <BulletPoint />
        <GameListText>{text}</GameListText>
      </GameListButton>
    </InnerList>
  );
};

const InnerList = styled.View`
  /* styles for the list item container */
  margin: 10px 0;
`;

const GameListButton = styled.TouchableOpacity`
  /* styles for the button */
  background-color: ${colors.secondary};
  border: 0.5px solid ${colors.primary};
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
  padding: 7px;
`;
const BulletPoint = styled.View`
  /* styles for the bullet point */
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #492540;
  margin-right: 15px;
`;

const GameListText = styled.Text`
  /* styles for the text inside the button */
  color: #492540;
  font-size: 20px;
  font-weight: 500;
`;

export default GameListItem;
