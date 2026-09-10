import { router } from "expo-router";
import React from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>

      <Image
        source={require("../../assets/images/icon.png")}
        style={styles.logo}
      />

      <Text style={styles.title}>
        STUDY MANAGER
      </Text>

      <Text style={styles.subtitle}>
        Quản lý học tập cá nhân
      </Text>

      <Pressable
        style={styles.button}
        onPress={() => router.push("/login")}
      >
        <Text style={styles.buttonText}>
          Đăng nhập
        </Text>
      </Pressable>

      <Pressable
        style={styles.registerButton}
        onPress={() => router.push("/register")}
      >
        <Text style={styles.registerText}>
          Đăng ký
        </Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F7FB",
    padding: 25,
  },

  logo: {
    width: 90,
    height: 90,
    marginBottom: 15,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2563EB",
  },

  subtitle: {
    fontSize: 16,
    color: "#6B7280",
    marginTop: 8,
    marginBottom: 30,
  },

  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#2563EB",
    borderRadius: 10,

    justifyContent: "center",
    alignItems: "center",

    marginBottom: 12,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },

  registerButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,

    justifyContent: "center",
    alignItems: "center",

    borderWidth: 1,
    borderColor: "#2563EB",
  },

  registerText: {
    color: "#2563EB",
    fontSize: 16,
    fontWeight: "bold",
  },
});