import React, { ReactNode } from "react";
import { View } from "react-native";
import {
  screenStyle,
  scrollContainerStyle,
  scrollStyle,
} from "@app/ui/common/styles";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";

interface ScreenViewProps {
  children: React.ReactElement;
  Header?: (props: any) => ReactNode | Promise<ReactNode>;
}

export default function ScreenView({ children, Header }: ScreenViewProps) {
  return (
    <SafeAreaView style={[screenStyle]} edges={["bottom"]}>
      <View style={{ marginTop: 0 }}>{Header && <Header />}</View>
      <KeyboardAwareScrollView
        extraHeight={64}
        enableOnAndroid
        style={[scrollStyle]}
        contentContainerStyle={scrollContainerStyle}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
