import { AppLogic } from "@app/core";

export const appLogic: AppLogic = {
  lobby: {
    createRoom: (name: string) => console.log("(mock) create room:", name),
    joinRoom: (code: string) => console.log("(mock) join room:", code),
  },
};
