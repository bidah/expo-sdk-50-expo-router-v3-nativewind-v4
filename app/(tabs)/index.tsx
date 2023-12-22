import { StyleSheet, Text, View } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";

export default function TabOneScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-blue-200">
      <Text className="text-2xl font-bold">Tab One one</Text>
      <View className="my-8 h-px w-4/5" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}
