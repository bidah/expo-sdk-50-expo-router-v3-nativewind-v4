import React from "react";
import { StyleSheet } from "react-native";

import { ExternalLink } from "./ExternalLink";
import { MonoText } from "./StyledText";
import { Text, View } from "./Themed";

import Colors from "@/constants/Colors";

export default function EditScreenInfo({ path }: { path: string }) {
  return (
    <View className="">
      <View className="items-center mx-12">
        <Text className="text-center text-lg leading-6 text-black dark:text-white">
          Open up the code for this screen:
        </Text>

        <View className="rounded-sm px-1 bg-black dark:bg-white">
          <MonoText>{path}</MonoText>
        </View>

        <Text className="text-center text-lg leading-6 text-black dark:text-white">
          Change any of the text, save the file, and your app will automatically
          update.
        </Text>
      </View>

      <View className="mt-4 mx-5 items-center">
        <ExternalLink
          className="py-4"
          href="https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet"
        >
          <Text className="text-center text-blue-500">
            Tap here if your app doesn't automatically update after making
            changes
          </Text>
        </ExternalLink>
      </View>
    </View>
  );
}
