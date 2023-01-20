/// <reference types="nativewind/types" />
import React from "react";
import "./src/config/firebase";
import RootNavigation from "./src/navigation";
import { useFonts } from "expo-font";
import { LogBox } from "react-native";
import { ThemeProvider } from "react-native-elements";

export default function App() {
  const [loaded] = useFonts({
    "Urbanist-Black": require("./assets/fonts/Urbanist-Black.ttf"),
    "Urbanist-Regular": require("./assets/fonts/Urbanist-Black.ttf"),
    "Urbanist-Thin": require("./assets/fonts/Urbanist-Black.ttf"),
    "Urbanist-Light": require("./assets/fonts/Urbanist-Black.ttf"),
    "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  LogBox.ignoreLogs([
    "Warning: Async Storage has been extracted from react-native core",
  ]);

  return (
    <>
      <ThemeProvider>
        <RootNavigation />
      </ThemeProvider>
    </>
  );
}
