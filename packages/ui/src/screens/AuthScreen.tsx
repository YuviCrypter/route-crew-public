import { StyleSheet, Text, View, Image } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema, LoginInput, SignUpSchema, SignUpInput } from "@app/core/auth";
import { Button, Input, ScreenView } from "../components";
import { colors, typography, spacing } from "../theme";
import { useMemo, useState } from "react";
import EmailIcon from "../icons/EmailIcon";
import LockIcon from "../icons/LockIcon";
import { authClient } from "../lib/auth-client";
import { safeAuth } from "../utils";

export default function AuthScreen() {
  const [tab, setTab] = useState<"sign-in" | "sign-up">("sign-in");

  const schema = useMemo(() => (tab === "sign-up" ? SignUpSchema : LoginSchema), [tab]);

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpInput>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onLogin = async (data: LoginInput) => {
    await safeAuth(
      authClient.signIn.email({
        email: data.email,
        password: data.password,
      }),
      "Failed to sign in"
    );
  };

  const onRegister = async (data: SignUpInput) => {
    await safeAuth(
      authClient.signUp.email({
        name: data.name,
        email: data.email,
        password: data.password,
      }),
      "Failed to sign up"
    );
  };

  function HeaderTab() {
    return (
      <View style={styles.tab}>
        <Button
          title="SIGN IN"
          onPress={() => setTab("sign-in")}
          variant="link"
          style={{ padding: 0 }}
          textStyle={tab === "sign-in" ? { color: colors.brandLight } : {}}
        />
        <View
          style={{
            height: 4,
            width: 4,
            backgroundColor: colors.text,
            borderRadius: 4,
          }}
        />
        <Button
          title="SIGN UP"
          onPress={() => setTab("sign-up")}
          variant="link"
          style={{ padding: 0 }}
          textStyle={tab === "sign-up" ? { color: colors.brandLight } : {}}
        />
      </View>
    );
  }

  return (
    <ScreenView Header={HeaderTab}>
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
          {tab === "sign-up" && (
            <Controller
              control={control}
              name="name"
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  label="Name"
                  placeholder="Enter your name"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  error={errors.name?.message}
                  textContentType="name"
                />
              )}
            />
          )}

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
                textContentType="emailAddress"
                Icon={EmailIcon}
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
                textContentType="password"
                Icon={LockIcon}
              />
            )}
          />

          {tab === "sign-up" && (
            <Controller
              control={control}
              name="confirmPassword"
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  label="Confirm Password"
                  placeholder="Confirm your password"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  error={errors.confirmPassword?.message}
                  textContentType="password"
                  Icon={LockIcon}
                />
              )}
            />
          )}

          <Button
            title={isSubmitting ? "Logging in..." : "Login"}
            onPress={handleSubmit(tab === "sign-in" ? onLogin : onRegister)}
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
  tab: {
    flexDirection: "row",
    alignItems: "center",
    textTransform: "uppercase",
    gap: 16,
    marginBottom: 8,
  },
});
