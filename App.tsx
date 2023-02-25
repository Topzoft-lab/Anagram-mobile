import React, { useEffect, useState } from "react";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import RootNavigator from "./navigations/RootNavigator";
import { Text, TextStyle, View } from "react-native";

const App = () => {
  const [fontsLoaded] = useFonts({
    "Kalam-light": require("./assets/fonts/Kalam/Kalam-Light.ttf"),
    Kalam: require("./assets/fonts/Kalam/Kalam-Regular.ttf"),
    "Kalam-Bold": require("./assets/fonts/Kalam/Kalam-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="light" />
      {/* <View>
        <Text style={{ fontFamily: "Kalam", fontSize: 24 }}>Hello world</Text>
      </View> */}
      <RootNavigator />
    </>
  );
};

export default App;
