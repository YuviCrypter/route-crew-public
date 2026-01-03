import { Hono } from "hono";
import { cors } from "hono/cors";
import { serve } from "@hono/node-server";
import { usersController } from "./modules/users/users.controller";
import { authcontroller } from "./modules/users/auth.controller";

export const publicAPI = new Hono();

publicAPI.use(
  "/api/auth/*", // or replace with "*" to enable cors for all routes
  cors({
    origin: "http://localhost:8081", // replace with your origin
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["POST", "GET", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
    credentials: true,
  })
);
publicAPI.route("/users", usersController);
publicAPI.route("/", authcontroller);

const test = new Hono();
test.router;

serve(publicAPI);
// export default publicAPI;
