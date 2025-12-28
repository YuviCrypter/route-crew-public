import { ViewStyle } from "react-native";
import { borderRadius, colors } from "@app/ui/theme";

export const screenStyle: ViewStyle = {
  flex: 1,
  backgroundColor: colors.background,
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
};

export const scrollStyle: ViewStyle = {
  width: "100%",
  borderRadius: borderRadius["2xl"],
  borderWidth: 1,
  borderColor: colors.fadedDark,
};

export const scrollContainerStyle: ViewStyle = {
  flexGrow: 1,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: colors.backgroundSecondary,
};
