import { Hono } from "hono";

export const usersController = new Hono();

usersController.get("/", (c) => c.json({ name: "Test" }));
