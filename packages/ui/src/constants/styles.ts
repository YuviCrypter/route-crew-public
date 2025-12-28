import { ViewStyle } from "react-native";
import { borderRadius, colors } from "@app/ui/theme/constants";

export const screenStyle: ViewStyle = {
  flex: 1,
  backgroundColor: colors.background,
  alignItems: "center",
  justifyContent: "center",
  paddingTop: 0,
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
