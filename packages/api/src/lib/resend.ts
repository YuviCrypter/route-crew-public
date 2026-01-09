import { Resend } from "resend";
import { env } from "@app/config";

export const resend = new Resend(env.RESEND_API_KEY);
