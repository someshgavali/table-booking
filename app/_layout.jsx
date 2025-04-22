import { Stack } from "expo-router";
import "../global.css";
export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Stack.Screen
        name="testing"
        options={{
          title: "Testing",
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Stack>
  );
}
