import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "@app/core/client";
import { resend } from "./resend";
import { expo } from "@better-auth/expo";
import { env } from "@app/config";

const RESEND_EMAIL = "routecrew@resend.dev";

export const auth = betterAuth({
  baseURL: env.EXPO_PUBLIC_API_URL,
  trustedOrigins: [
    env.FRONTEND_URL,
    `${env.EXPO_PUBLIC_APP_SCHEME}://*`,
    ...(env.NODE_ENV === "development"
      ? [
          "exp://", // Trust all Expo URLs (prefix matching)
          "exp://**", // Trust all Expo URLs (wildcard matching)
          "exp://192.168.*.*:*/**", // Trust 192.168.x.x IP range with any port and path
          env.FRONTEND_URL,
        ]
      : []),
  ],
  plugins: [expo()],
  database: prismaAdapter(prisma, { provider: "postgresql" }),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false, // TODO: change this to true later
    async sendResetPassword({ user, url }) {
      await resend.emails.send({
        from: RESEND_EMAIL,
        to: user.email,
        subject: "Reset your password",
        html: `<h1>Hello ${user.email}, click <a href="${url}">here</a> to reset your password</h1>`,
      });
    },
  },
  emailVerification: {
    autoSignInAfterVerification: true,
    async sendVerificationEmail({ user, url }) {
      try {
        const res = await resend.emails.send({
          from: RESEND_EMAIL,
          to: user.email,
          subject: "Verify your email address",
          html: `<a href="${url}">Verify your email address</a>`,
        });
      } catch (error) {
        console.error("error sending email: ", error);
      }
    },
  },
  advanced: {
    disableCSRFCheck: true, // Need to disable for native apps
  },
});
