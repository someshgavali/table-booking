import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const router = useRouter();
  return (
    <View className="flex-1 items-center justify-center ">
      <Text>Edit app/index.tsx to edit this screenfffff.</Text>
      <TouchableOpacity onPress={() => router.push("/testing")}>
        <Text className="text-blue-500">Press me</Text>
      </TouchableOpacity>
    </View>
  );
}
