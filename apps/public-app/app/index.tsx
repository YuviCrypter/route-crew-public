import { Text, View } from "react-native";
import { Button } from "@app/ui";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Public App</Text>
      <Button />
    </View>
  );
}
``