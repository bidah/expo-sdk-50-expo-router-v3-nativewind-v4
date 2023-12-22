import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";

export default function TabTwoScreen() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-4xl font-bold">Tab Two</Text>
      <View className="my-8 bg-gray-200 h-px w-4/5" />
      <EditScreenInfo path="app/(tabs)/two.tsx" />
    </View>
  );
}
