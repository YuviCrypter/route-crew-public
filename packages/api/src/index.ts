import { Hono } from "hono";
import authcontroller from "./modules/auth/auth.controller.js";

export const publicAPI = new Hono();

publicAPI.get("/health", (c) => c.text("OK"));

publicAPI.route("/", authcontroller);
