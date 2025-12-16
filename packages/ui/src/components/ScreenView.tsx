import React, { ReactNode } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import {
  screenStyle,
  scrollContainerStyle,
  scrollStyle,
} from "@app/ui/constants/styles";
import { useHeaderHeight } from "@react-navigation/elements";

interface ScreenViewProps {
  children: React.ReactElement;
  Header?: (props: any) => ReactNode | Promise<ReactNode>;
}

export default function ScreenView({ children, Header }: ScreenViewProps) {
  const headerHeight = useHeaderHeight();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={screenStyle}
    >
      <View style={[{ marginTop: headerHeight }]}>{Header && <Header />}</View>
      <ScrollView
        style={[
          scrollStyle,
          {
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
          },
        ]}
        contentContainerStyle={scrollContainerStyle}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
