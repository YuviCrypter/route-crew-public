import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  ViewStyle,
  TextStyle,
} from "react-native";
import { colors, typography, shadows, spacing } from "@app/ui/theme/constants";

type ButtonVariant = "primary" | "secondary" | "link";

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: ButtonVariant;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export default function Button({
  title,
  onPress,
  variant = "primary",
  disabled = false,
  loading = false,
  fullWidth = false,
  style,
  textStyle,
}: ButtonProps) {
  const buttonStyles = [
    styles.base,
    styles[variant],
    fullWidth && styles.fullWidth,
    disabled && styles.disabled,
    style,
  ];

  const textStyles = [
    styles.text,
    styles[`text_${variant}`],
    disabled && styles.text_disabled,
    textStyle,
  ];

  return (
    <TouchableOpacity
      style={buttonStyles}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.7}
    >
      {loading ? (
        <ActivityIndicator color={colors.text} />
      ) : (
        <Text style={textStyles}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {
    width: 256,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderWidth: 1,
    borderBottomWidth: 0,
    borderRadius: 6,
  },
  primary: {
    backgroundColor: colors.brandGlass,
    borderColor: colors.brandLight,
    ...shadows.md,
  },
  secondary: {
    backgroundColor: colors.darkGlass,
    borderColor: colors.fadedDark,
    ...shadows.md,
  },
  link: { width: "auto", borderWidth: 0 },
  text: { ...typography.small, lineHeight: 24 },
  text_primary: {},
  text_secondary: {},
  text_link: { textDecorationLine: "underline" },
  text_disabled: {},
  fullWidth: {
    width: "100%",
  },
  disabled: {
    opacity: 0.8,
  },
});
