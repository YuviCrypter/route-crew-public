import { AppNavigator } from "@app/ui";
import {appLogic} from "@/src/mockAppLogic"

export default function App() {
  return <AppNavigator logic={appLogic} />;
}
