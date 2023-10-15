import { View, Text, Image } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Stores from "../screens/Stores";
import Order from "../screens/Order";
import Profile from "../screens/Profile";
import { NavigationContainer } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
      screenOptions={{
        headerShown: false, 
        tabBarStyle: {height: 70 },
        tabBarLabelStyle: {fontSize: 15}
        }}>
        <Tab.Screen 
        name="Home" 
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="home"
              size={27}
              color={focused ? "#1A94FF" : "grey"}
            />
          ),
        }} />
        <Tab.Screen 
        name="Stores" 
        component={Stores}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialIcons name="storefront" size={27}
              color={focused ? "#1A94FF" : "grey"}
            />
          ),
        }} />
        <Tab.Screen 
        name="Order" 
        component={Order}
        options={{
          tabBarIcon: ({ focused }) => (
            <Foundation
              name="clipboard-notes"
              size={27}
              color={focused ? "#1A94FF" : "grey"}
            />
          ),
        }} />
        <Tab.Screen 
        name="Profile" 
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="user"
              size={27}
              color={focused ? "#1A94FF" : "grey"}
            />
          ),
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
