import { useToast } from "react-native-styled-toast";
import { ToastConfig } from "react-native-styled-toast/dist/Toast";
import { theme } from "../theme";

const toastConfig: { [key: string]: ToastConfig } = {
  info: {
    message: "",
    toastStyles: {
      bg: theme.colors.background,
      borderRadius: theme.spacing.md,
    },
    color: theme.colors.text,
    iconColor: theme.colors.text,
    iconName: "info",
    closeIconColor: theme.colors.text,
  },
  error: {
    message: "",
    toastStyles: {
      bg: theme.colors.error,
      borderRadius: theme.spacing.md,
    },
    color: theme.colors.text,
    iconColor: theme.colors.text,
    iconName: "info",
    closeIconColor: theme.colors.text,
  },
};

// Usage: showToast("message")() -> defaults to info
// & showToast("error message")("error") -> for error

//TODO: make DX better to use this toast
export const useShowToast = () => {
  const { toast } = useToast();

  const showToast =
    (text: string) =>
    (type: "info" | "error" = "info") => {
      return toast({
        ...toastConfig[type],
        message: text,
      });
    };

  return { showToast };
};
