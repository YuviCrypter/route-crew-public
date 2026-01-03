import { Hono } from "hono";
import { auth } from "../../lib/auth";
export const authcontroller = new Hono();

authcontroller.on(["POST", "GET"], "/api/auth/*", (c) => {
  return auth.handler(c.req.raw);
});
