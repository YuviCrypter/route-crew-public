import { Hono } from "hono";
import { usersController } from "./modules/users/users.controller";

export const publicAPI = new Hono();

publicAPI.route("/users", usersController);

const test = new Hono();
test.router;
