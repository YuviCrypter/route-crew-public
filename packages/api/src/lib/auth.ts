import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "@app/core/client";
import { resend } from "./resend";
import { expo } from "@better-auth/expo";

const RESEND_EMAIL = "example@gmail.com";

export const auth = betterAuth({
  trustedOrigins: ["http://localhost:8081", "myapp://*"],
  // Development mode - Expo's exp:// scheme with local IP ranges
  ...(process.env.NODE_ENV === "development"
    ? [
        "exp://", // Trust all Expo URLs (prefix matching)
        "exp://**", // Trust all Expo URLs (wildcard matching)
        "exp://192.168.*.*:*/**", // Trust 192.168.x.x IP range with any port and path
        "http://localhost:8081/",
      ]
    : []),
  plugins: [expo()],
  database: prismaAdapter(prisma, { provider: "postgresql" }),
  emailAndPassword: {
    enabled: true,
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
        console.log("sending verification email to: " + user.email);
        const res = await resend.emails.send({
          from: RESEND_EMAIL,
          to: user.email,
          subject: "Verify your email address",
          html: `<a href="${url}">Verify your email address</a>`,
        });
        console.log(res, user.email);
      } catch (error) {
        console.error("error sending email: ", error);
      }
    },
  },
});
