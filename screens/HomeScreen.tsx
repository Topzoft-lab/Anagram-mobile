import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import GameListItem from "../components/GameItemList";
import Logo from "../components/Logo";
import { Button, TextInput } from "../components/shared";
import { colors } from "../constants/Color";
import { layoutStyles } from "../constants/Layout";

const HomeScreen = ({ navigation }: { navigation: any }) => {
  const handleStartGame = () => {
    navigation.navigate("Game");
  };

  return (
    <View style={layoutStyles.container}>
      <Container>
        <Logo />
        <Title>Anagrams</Title>
        <MenuItem>
          <GameListItem text="New Game" onPress={handleStartGame}></GameListItem>
          <GameListItem text="Continue" onPress={{}}></GameListItem>
          <GameListItem text="High Score" onPress={{}}></GameListItem>
        </MenuItem>
      </Container>
    </View>
  );
};

const Container = styled.View`
  background-color: #e7e7de;
  box-shadow: #303841 0px 5px 15px;
  border-radius: 5px;
  padding: 25px 70px;
`;

const Title = styled.Text`
  text-align: center;
  font-size: 40px;
  font-weight: 500;
  color: #393e46;
  margin: 10px 0 20px 0;
`;
const MenuItem = styled.View``;
export default HomeScreen;
