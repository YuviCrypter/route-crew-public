import { createContext, useContext } from "react";

export interface LobbyLogic {
  createRoom: (roomName: string, navigation: any) => void;
  joinRoom: (roomCode: string, navigation: any) => void;
}

export interface AppLogic {
  lobby: LobbyLogic;
}

const LogicContext = createContext<AppLogic | undefined>({
    lobby: {
      createRoom: (name, navigation) => console.log("Default create room:", name),
      joinRoom: (code, navigation) => console.log("Default join room:", code),
    },
  });

export const useLogic = () => {
  const context = useContext(LogicContext);
  if (!context) {
    throw new Error("useLogic must be used within a LogicProvider");
  }
  return context;
};

export const LogicProvider = LogicContext.Provider;
