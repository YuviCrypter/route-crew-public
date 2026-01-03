import { ActivityIndicator, View } from "react-native";
import { colors } from "@app/ui/theme";

export default function LoaderScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.background,
      }}
    >
      <ActivityIndicator size="large" color={colors.brand} />
    </View>
  );
}
