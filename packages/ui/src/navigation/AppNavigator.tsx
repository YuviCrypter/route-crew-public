import { NavigationContainer } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import { toastConfig } from "../utils";
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import { LobbyScreen, AuthScreen } from "../screens";
import { colors, typography } from "../theme";
import { useFonts, DMMono_400Regular, DMMono_500Medium } from "@expo-google-fonts/dm-mono";
import { Ubuntu_400Regular, Ubuntu_700Bold } from "@expo-google-fonts/ubuntu";
import { LoaderScreen } from "../components";
import { AppLogic, LogicProvider } from "@app/core";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { authClient } from "../lib/auth-client";

export const Stack = createNativeStackNavigator();

interface AppNavigatorProps {
  children?: React.ReactNode;
  logic?: AppLogic;
}

export default function AppNavigator({ children, logic }: AppNavigatorProps) {
  const [fontsLoaded] = useFonts({
    DMMono_400Regular,
    DMMono_500Medium,
    Ubuntu_400Regular,
    Ubuntu_700Bold,
  });

  const { data: userSession, isPending } = authClient.useSession();

  if (!fontsLoaded || isPending) {
    return <LoaderScreen />;
  }

  const isLoggedIn = !!userSession;

  return (
    <SafeAreaProvider>
      <LogicProvider value={logic}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerTitleAlign: "center",
              headerShadowVisible: false,
              headerStyle: { backgroundColor: colors.background },
              headerTitleStyle: { ...typography.label, color: colors.text },
            }}
          >
            {isLoggedIn ? (
              <Stack.Group>
                <Stack.Screen name="Lobby" component={LobbyScreen} />
                {children}
              </Stack.Group>
            ) : (
              <Stack.Group>
                <Stack.Screen name="Welcome" component={AuthScreen} />
              </Stack.Group>
            )}
          </Stack.Navigator>
        </NavigationContainer>
        <Toast config={toastConfig} />
      </LogicProvider>
    </SafeAreaProvider>
  );
}
