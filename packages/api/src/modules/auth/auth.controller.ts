import { Hono } from "hono";
import { auth } from "@app/api/lib/auth";

const authcontroller = new Hono();

authcontroller.on(["POST", "GET"], "/api/auth/*", (c) => {
  return auth.handler(c.req.raw);
});

export default authcontroller;
