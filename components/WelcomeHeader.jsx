import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";

export default function WelcomeHeader() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View>
        <Text>Hello,</Text>
        <Text style={{fontSize:20, fontWeight:'bold'}}>{user?.firstName} </Text>
      </View>
      <Image
        source={{ uri: user.imageUrl }}
        style={{ width: 40, height: 40, borderRadius: 100 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent:'space-between',
    alignItems:'center'
  },
});
