import React from "React";
import { View, Text } from "react-native";

export default class Profile extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Your Profile..</Text>
      </View>
    );
  }
}
