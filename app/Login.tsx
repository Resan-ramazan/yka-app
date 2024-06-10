import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "./Shared/Colors";

const Login = () => {
  return (
    <View>
      <Image
        style={styles.image}
        source={require("./../assets/images/login.png")}
      />
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome to YKA </Text>
        <Text style={{ textAlign: "center", marginTop: 80, fontSize: 25 }}>
          Login/Signup
        </Text>
        <View style={styles.button}>
          <Ionicons name="logo-google" size={24} color="white" style={{marginRight:10}} />
          <Text style={{ color: Colors.white }}>Sign In with Google</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    marginTop: -25,
    backgroundColor: "#fff",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  welcomeText: {
    fontSize: 35,
    textAlign: "center",
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: 300,
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 10,
    margin: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});

export default Login;
