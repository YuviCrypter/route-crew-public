import { View, Text, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import { colors } from "@app/ui/theme/constants";

export default function Header() {
  const route = useRoute();
  return (
    <View style={styles.container}>
      <Text>{route.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: colors.background,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
