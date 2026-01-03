import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TextInputProps,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
} from "react-native";
import { colors, typography, spacing, borderRadius } from "@app/ui/theme";
import { useState } from "react";
import EyeOnIcon from "@app/ui/icons/EyeOnIcon";
import EyeOffIcon from "@app/ui/icons/EyeOffIcon";
import TextIcon from "@app/ui/icons/TextIcon";

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  containerStyle?: ViewStyle;
  labelStyle?: TextStyle;
  inputStyle?: TextStyle;
  errorStyle?: TextStyle;
  Icon?: any;
}

export default function Input({
  label,
  error,
  containerStyle,
  labelStyle,
  inputStyle,
  errorStyle,
  Icon,
  ...textInputProps
}: InputProps) {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(
    textInputProps.textContentType !== "password",
  );
  return (
    <View style={[styles.container, containerStyle]}>
      {label && <Text style={[typography.label, labelStyle]}>{label}</Text>}
      <View style={[styles.inputField, error && styles.inputError]}>
        <View style={[styles.icon, { paddingRight: 0 }]}>
          {Icon ? (
            <Icon color={colors.textMuted} />
          ) : (
            <TextIcon color={colors.textMuted} />
          )}
        </View>

        <TextInput
          style={[typography.small, styles.inputText, inputStyle]}
          placeholderTextColor={colors.textMuted}
          secureTextEntry={!passwordVisible}
          {...textInputProps}
        />

        {textInputProps.textContentType === "password" && (
          <TouchableOpacity
            style={[styles.icon, { paddingLeft: 0 }]}
            onPress={() => {
              setPasswordVisible((prev) => !prev);
            }}
          >
            {passwordVisible ? (
              <EyeOnIcon color={colors.textMuted} />
            ) : (
              <EyeOffIcon color={colors.textMuted} />
            )}
          </TouchableOpacity>
        )}
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
    backgroundColor: colors.inputBackground,
    borderWidth: 1,
    borderBottomWidth: 0,
    borderColor: colors.fadedDark,
    flexDirection: "row",
    alignItems: "center",
  },
  inputText: {
    color: colors.textMuted,
    outlineWidth: 0,
    borderWidth: 0,
    flexGrow: 1,
    flexShrink: 1,
    paddingVertical: spacing.input,
    paddingHorizontal: spacing.sm,
    overflow: "scroll",
  },
  inputError: {
    borderColor: colors.error,
    borderWidth: 1,
    borderBottomWidth: 1,
  },
  errorText: { color: colors.error, backgroundColor: "#00000080" },
  icon: { padding: spacing.sm, paddingHorizontal: spacing.input },
});
