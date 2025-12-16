import { ActivityIndicator, View } from "react-native";
import { colors } from "@app/ui/theme/constants";

export default function LoaderScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" color={colors.brand} />
    </View>
  );
}
