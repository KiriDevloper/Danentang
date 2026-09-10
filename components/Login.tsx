import { router } from "expo-router";
import React, { useState } from "react";
import {
    Alert,
    Image,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Thông báo", "Vui lòng nhập đầy đủ thông tin");
      return;
    }

    Alert.alert("Đăng nhập", "Đăng nhập thành công!");
  };

  return (
    <View style={styles.container}>

      {/* Logo */}
      <Image
        source={require("../assets/images/icon.png")}
        style={styles.logo}
      />

      {/* Tiêu đề */}
      <Text style={styles.appName}>
        STUDY MANAGER
      </Text>

      <Text style={styles.title}>
        Đăng nhập
      </Text>

      <Text style={styles.subtitle}>
        Quản lý việc học tập cá nhân
      </Text>

      {/* Form */}
      <View style={styles.form}>

        <Text style={styles.label}>
          Email
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Nhập email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.label}>
          Mật khẩu
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Nhập mật khẩu"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        {/* Button */}
        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>
            ĐĂNG NHẬP
          </Text>
        </Pressable>

      </View>

      {/* Register */}
      <View style={styles.bottom}>
        <Text style={styles.bottomText}>
          Chưa có tài khoản?
        </Text>

        <Pressable
          onPress={() => router.push("/register")}
        >
          <Text style={styles.link}>
            Đăng ký
          </Text>
        </Pressable>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FB",

    justifyContent: "center",
    alignItems: "center",

    paddingHorizontal: 25,
  },

  logo: {
    width: 75,
    height: 75,
    marginBottom: 10,
  },

  appName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#2563EB",
    marginBottom: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1F2937",
  },

  subtitle: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 6,
    marginBottom: 30,
  },

  form: {
    width: "100%",
  },

  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#374151",
    marginBottom: 7,
  },

  input: {
    height: 50,

    backgroundColor: "#FFFFFF",

    borderWidth: 1,
    borderColor: "#D1D5DB",

    borderRadius: 10,

    paddingHorizontal: 15,

    marginBottom: 18,

    fontSize: 15,
  },

  button: {
    height: 50,

    backgroundColor: "#2563EB",

    borderRadius: 10,

    justifyContent: "center",
    alignItems: "center",

    marginTop: 5,
  },

  buttonPressed: {
    opacity: 0.7,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "bold",
  },

  bottom: {
    flexDirection: "row",
    alignItems: "center",

    marginTop: 25,
  },

  bottomText: {
    color: "#6B7280",
    fontSize: 14,
  },

  link: {
    color: "#2563EB",
    fontWeight: "bold",
    fontSize: 14,
    marginLeft: 5,
  },
});