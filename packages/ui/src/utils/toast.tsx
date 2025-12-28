import Toast, {
  BaseToast,
  BaseToastProps,
  ErrorToast,
  ToastConfig,
} from "react-native-toast-message";
import { colors, spacing, typography } from "../theme/constants";

type ToastType = "success" | "error" | "info";

// Custom toast configuration with currying
// Usage: showToast("message")() -> defaults to info
// & showToast("error message")("error") -> for error
// & showToast("success message")("success") -> for success

const showToast =
  (text: string) =>
  (type: ToastType = "info") => {
    Toast.show({
      type,
      text1: text,
      position: "top",
      visibilityTime: 3000,
      autoHide: true,
      topOffset: 50,
    });
  };

const baseStyle: BaseToastProps = {
  contentContainerStyle: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
  text1Style: typography.base,
};

const toastConfig: ToastConfig = {
  info: (props) => (
    <BaseToast
      {...props}
      style={{
        backgroundColor: colors.brand,
        borderLeftColor: colors.text,
        borderRadius: spacing.md,
      }}
      {...baseStyle}
    />
  ),
  error: (props) => (
    <ErrorToast
      {...props}
      style={{
        backgroundColor: colors.error,
        borderLeftColor: colors.text,
        borderRadius: spacing.md,
      }}
      {...baseStyle}
    />
  ),
  success: (props) => (
    <BaseToast
      {...props}
      style={{
        backgroundColor: colors.success,
        borderLeftColor: colors.text,
        borderRadius: spacing.md,
      }}
      {...baseStyle}
    />
  ),
};

export { toastConfig, showToast };
