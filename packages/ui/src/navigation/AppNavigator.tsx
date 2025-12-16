import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LobbyScreen, AuthScreen } from "@app/ui/screens";
import { colors, typography } from "@app/ui/theme/constants";
import {
  useFonts,
  DMMono_400Regular,
  DMMono_500Medium,
} from "@expo-google-fonts/dm-mono";
import { Ubuntu_400Regular, Ubuntu_700Bold } from "@expo-google-fonts/ubuntu";
import { LoaderScreen } from "@app/ui/components";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  let [fontsLoaded] = useFonts({
    DMMono_400Regular,
    DMMono_500Medium,
    Ubuntu_400Regular,
    Ubuntu_700Bold,
  });

  // dummy session
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!fontsLoaded) {
    return <LoaderScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: "center",
          headerBlurEffect: "dark",
          headerTransparent: true,
          headerTitleStyle: { ...typography.label, color: colors.text },
        }}
      >
        {isLoggedIn ? (
          <Stack.Group>
            <Stack.Screen name="Lobby" component={LobbyScreen} />
          </Stack.Group>
        ) : (
          <Stack.Group>
            <Stack.Screen name="Welcome">
              {(props) => (
                <AuthScreen
                  {...props}
                  onLogin={() => setIsLoggedIn(true)}
                  onRegister={() => {}}
                />
              )}
            </Stack.Screen>
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
