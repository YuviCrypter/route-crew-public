import "@app/config/load-env";
import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { publicAPI } from "@app/api";

const app = new Hono();

app.use(
  "*",
  cors({
    origin: (origin) => {
      // Allow localhost and local IP addresses in development
      if (origin.startsWith("http://localhost") || origin.startsWith("http://192.168.")) {
        return origin;
      }
      return "http://localhost:8081";
    },
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["POST", "GET", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
    credentials: true,
  })
);

app.route("/", publicAPI);

serve(
  {
    fetch: app.fetch,
    port: 8787,
    hostname: "0.0.0.0",
  },
  (info) => {
    console.log(`Server is running on http://${info.address}:${info.port}`);
  }
);
