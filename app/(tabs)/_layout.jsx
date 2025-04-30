import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import "../../assets/Colors";
import { Colors } from "../../assets/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.PRIMARY,
        tabBarInactiveTintColor: Colors.dark.text,
        tabBarStyle: {
          backgroundColor: Colors.SECONDARY,
          paddingBottom: 14,
          height: 75,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: "bold",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Text style={{ color }}>
              <Ionicons name="home" size={24} color={color} />
            </Text>
          ),
        }}
      />
      {/* }} /> */}
      <Tabs.Screen
        name="history"
        options={{
          title: "History",
          tabBarIcon: ({ color }) => (
            <Text style={{ color }}>
              <Ionicons name="time" size={24} color={color} />
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <Text style={{ color }}>
              <Ionicons name="person-sharp" size={24} color={color} />
            </Text>
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
