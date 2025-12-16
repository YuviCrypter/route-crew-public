import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TextInputProps,
  ViewStyle,
  TextStyle,
} from "react-native";
import { colors, typography, spacing, borderRadius } from "@app/ui/theme";

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  containerStyle?: ViewStyle;
  labelStyle?: TextStyle;
  inputStyle?: TextStyle;
  errorStyle?: TextStyle;
}

export default function Input({
  label,
  error,
  containerStyle,
  labelStyle,
  inputStyle,
  errorStyle,
  ...textInputProps
}: InputProps) {
  return (
    <View style={[styles.container, containerStyle]}>
      {label && <Text style={[typography.label, labelStyle]}>{label}</Text>}
      <View style={[styles.inputField, error && styles.inputError]}>
        <TextInput
          style={[typography.small, styles.inputText, inputStyle]}
          placeholderTextColor={colors.textMuted}
          {...textInputProps}
        />
      </View>
      {error && (
        <Text style={[typography.small, styles.errorText, errorStyle]}>
          {error}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: spacing.xs,
  },
  inputField: {
    borderRadius: borderRadius.md,
    gap: spacing.xs,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    backgroundColor: colors.inputBackground,
    borderWidth: 1,
    borderBottomWidth: 0,
    borderColor: colors.fadedDark,
  },
  inputText: {
    color: colors.textMuted,
    outlineWidth: 0,
    borderWidth: 0,
  },
  inputError: {
    borderColor: colors.error,
    borderWidth: 1,
    borderBottomWidth: 1,
  },
  errorText: { color: colors.error, backgroundColor: "#00000080" },
});
