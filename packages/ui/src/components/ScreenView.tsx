import React, { ReactNode } from "react";
import { View } from "react-native";
import {
  screenStyle,
  scrollContainerStyle,
  scrollStyle,
} from "@app/ui/constants/styles";
import { useHeaderHeight } from "@react-navigation/elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

interface ScreenViewProps {
  children: React.ReactElement;
  Header?: (props: any) => ReactNode | Promise<ReactNode>;
}

export default function ScreenView({ children, Header }: ScreenViewProps) {
  const headerHeight = useHeaderHeight();

  return (
    <View style={screenStyle}>
      <View style={[{ marginTop: headerHeight }]}>{Header && <Header />}</View>
      <KeyboardAwareScrollView
        extraHeight={100}
        enableOnAndroid
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
      </KeyboardAwareScrollView>
    </View>
  );
}
