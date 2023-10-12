import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Tabs from "./components/Tabs";

const paddingTop = Platform.OS === "android" ? "pt-10" : "pt-0";

export default function App() {
  return (
    <SafeAreaView className={`flex-1 bg-slate-100 ${paddingTop}`}>
      <Tabs />
      <StatusBar style="auto" /> 
    </SafeAreaView>
  );
}

