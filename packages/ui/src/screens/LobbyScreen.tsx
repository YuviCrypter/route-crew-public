import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import { Button, Input, ScreenView } from "@app/ui/components";
import { colors, spacing, typography } from "@app/ui/theme/constants";

export default function LobbyScreen() {
  const [roomName, setRoomName] = useState("");
  const [roomCode, setRoomCode] = useState("");

  const handleCreateRoom = () => {
    console.log("Creating room:", roomName);
    // TODO: Implement room creation logic
  };

  const handleJoinRoom = () => {
    console.log("Joining room:", roomCode);
    // TODO: Implement room joining logic
  };

  return (
    <ScreenView>
      <View style={styles.content}>
        {/* Create Room Section */}
        <View style={styles.section}>
          <Text style={typography.h3}>Create Room</Text>
          <Text style={[typography.base, { color: colors.fadedLight }]}>
            Start a new room and invite your friends
          </Text>

          <Input
            label="Room Name"
            placeholder="Enter room name"
            value={roomName}
            onChangeText={setRoomName}
            containerStyle={styles.inputContainer}
          />

          <Button
            title="Create Room"
            onPress={handleCreateRoom}
            variant="primary"
            fullWidth
            disabled={!roomName.trim()}
          />
        </View>

        {/* Join Room Section */}
        <View style={styles.section}>
          <Text style={typography.h3}>Join Room</Text>
          <Text style={[typography.base, { color: colors.fadedLight }]}>
            Enter a room code to join an existing room
          </Text>

          <Input
            label="Room Code"
            placeholder="Enter room code"
            value={roomCode}
            onChangeText={setRoomCode}
            containerStyle={styles.inputContainer}
          />

          <Button
            title="Join Room"
            onPress={handleJoinRoom}
            variant="secondary"
            fullWidth
            disabled={!roomCode.trim()}
          />
        </View>
      </View>
    </ScreenView>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    width: "100%",
    paddingVertical: spacing["3xl"],
    paddingHorizontal: spacing.xl,
    justifyContent: "center",
    overflow: "hidden",
  },
  section: {
    marginBottom: spacing.xl,
  },
  inputContainer: {
    marginVertical: spacing.md,
  },
});
