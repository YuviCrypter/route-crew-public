import { TextStyle } from "react-native";

export const colors = {
  // Background colors
  background: "#181818",
  backgroundSecondary: "#040404",

  // Brand shades
  brand: "#673AB7",
  brandGlass: "#673AB7dd",
  brandLight: "#7B61FF",
  brandDark: "#1e0c5eff",

  // Dark shades
  dark: "#282828",
  darkGlass: "#282828dd",
  fadedDark: "#3B3B3B",

  // Light shades
  light: "#F7F7F7",
  fadedLight: "#adadad",

  // Text colors
  text: "#F8FAFC",
  textSecondary: "#CBD5E1",
  textMuted: "#7F8EA3",

  // Input colors
  inputBackground: "#282828",

  // Status colors
  error: "#ff5722",
  warning: "#F59E0B",
  success: "#0FFF37",
};

// Typography
export const typography: Record<string, TextStyle> = {
  h1: {
    fontSize: 32,
    fontFamily: "Ubuntu_700Bold",
    color: colors.text,
    fontWeight: 700,
  },
  h2: {
    fontSize: 28,
    fontFamily: "Ubuntu_700Bold",
    color: colors.text,
    fontWeight: 700,
  },
  h3: {
    fontSize: 24,
    fontFamily: "Ubuntu_700Bold",
    color: colors.text,
    fontWeight: 700,
  },
  h4: {
    fontSize: 20,
    fontFamily: "Ubuntu_700Bold",
    color: colors.text,
    fontWeight: 700,
  },
  base: {
    fontSize: 16,
    fontFamily: "Ubuntu_400Regular",
    color: colors.text,
    fontWeight: 400,
  },
  small: {
    fontSize: 14,
    color: colors.text,
    fontFamily: "DMMono_400Regular",
    fontWeight: 400,
  },
  label: {
    fontSize: 12,
    color: colors.text,
    fontFamily: "DMMono_500Medium",
    fontWeight: 500,
  },
};

// Spacing scale
export const spacing = {
  xs: 4,
  sm: 8,
  input: 12,
  md: 16,
  lg: 24,
  xl: 32,
  "2xl": 40,
  "3xl": 48,
};

// Border radius
export const borderRadius = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  "2xl": 24,
  "3xl": 32,
  full: 9999,
};

// Shadows for glassmorphism and elevation
export const shadows = {
  sm: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  md: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  lg: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 8,
  },
};
