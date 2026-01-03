import { Hono } from "hono";

export const usersController = new Hono();

usersController.get("/", (c) => c.json({ name: "Test" }));

usersController.get("/all", (c) => {
  console.log("we live");
  return c.json({ msg: "hello there" });
});
