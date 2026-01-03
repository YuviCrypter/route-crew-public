import { prisma } from "@app/core/client";
import { auth } from "./auth";

const users = [
  {
    name: "John",
    email: "John@gmail.com",
    password: "johnssecret",
    image: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg",
    callbackURL: "",
    rememberMe: true,
  },
];

console.log("seeding....");
const response = await auth.api.signUpEmail({ body: users[1] });
console.log("response: " + response);
const res = await prisma.user.findFirst();
console.log(res);
