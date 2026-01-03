import { StyleSheet, Text, View, Image } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema, LoginInput } from "@app/core/auth";
import { Button, Input, ScreenView } from "@app/ui/components";
import { colors, typography, spacing } from "@app/ui/theme";
import { useMemo, useState } from "react";
import { authClient } from "../lib/auth-client";

interface AuthScreenProps {
  onLogin: () => void;
}

export default function AuthScreen({ onLogin }: AuthScreenProps) {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginInput>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const schema = useMemo(() => (tab === "sign-up" ? SignUpSchema : LoginSchema), [tab]);
  const onSubmit = async (data: LoginInput) => {
    console.log("Login data:", data);
    try {
      const response = await authClient.signIn.email({
        email: data.email,
        password: data.password,
      });
      console.log("backend better-auth response: ", response);
    } catch (error) {
      console.log("erorr: ", error);
    }

    //TODO: Implement Login logic
    // onLogin();
  };

  return (
    <ScreenView>
      <View style={styles.content}>
        <View style={styles.bgDesign}>
          {/* <MapsBG /> */}
          <Image
            source={require("../../assets/images/IsometricBG.png")}
            style={{ height: 420, width: 755 }}
          />
        </View>
        <View>
          <Text style={typography.h3}>Ready to Rock n Roll?</Text>
          <Text style={[typography.base, { color: colors.fadedLight }]}>
            Your journey continues from here.
          </Text>
        </View>
        <View style={styles.form}>
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                label="Email"
                placeholder="Enter your email"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                error={errors.email?.message}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            )}
          />

          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                label="Password"
                placeholder="Enter your password"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                error={errors.password?.message}
                secureTextEntry
              />
            )}
          />

          <Button
            title={isSubmitting ? "Logging in..." : "Login"}
            onPress={handleSubmit(onSubmit)}
            disabled={isSubmitting}
            loading={isSubmitting}
            fullWidth
            variant="primary"
          />
        </View>
      </View>
    </ScreenView>
  );
}

const styles = StyleSheet.create({
  content: {
    gap: spacing["3xl"],
    flex: 1,
    paddingVertical: spacing["3xl"],
    width: "100%",
    paddingHorizontal: spacing.xl,
    overflow: "hidden",
  },
  form: {
    gap: spacing.md,
  },
  bgDesign: {
    position: "absolute",
    width: "100%",
    left: 0,
    right: 0,
    bottom: -5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
