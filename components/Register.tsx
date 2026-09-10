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

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert(
        "Thông báo",
        "Vui lòng nhập đầy đủ thông tin"
      );
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert(
        "Thông báo",
        "Mật khẩu xác nhận không khớp"
      );
      return;
    }

    Alert.alert(
      "Đăng ký",
      "Tạo tài khoản thành công!"
    );
  };

  return (
    <View style={styles.container}>

      {/* Logo */}
      <Image
        source={require("../assets/images/icon.png")}
        style={styles.logo}
      />

      {/* Tên ứng dụng */}
      <Text style={styles.appName}>
        STUDY MANAGER
      </Text>

      <Text style={styles.title}>
        Tạo tài khoản
      </Text>

      <Text style={styles.subtitle}>
        Bắt đầu quản lý việc học của bạn
      </Text>

      {/* Form */}
      <View style={styles.form}>

        <Text style={styles.label}>
          Họ và tên
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Nhập họ và tên"
          value={name}
          onChangeText={setName}
        />

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

        <Text style={styles.label}>
          Xác nhận mật khẩu
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Nhập lại mật khẩu"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />

        {/* Button */}
        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
          onPress={handleRegister}
        >
          <Text style={styles.buttonText}>
            ĐĂNG KÝ
          </Text>
        </Pressable>

      </View>

      {/* Login */}
      <View style={styles.bottom}>

        <Text style={styles.bottomText}>
          Đã có tài khoản?
        </Text>

        <Pressable
          onPress={() => router.push("/login")}
        >
          <Text style={styles.link}>
            Đăng nhập
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
    width: 70,
    height: 70,
    marginBottom: 8,
  },

  appName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#2563EB",
    marginBottom: 15,
  },

  title: {
    fontSize: 27,
    fontWeight: "bold",
    color: "#1F2937",
  },

  subtitle: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 6,
    marginBottom: 25,
  },

  form: {
    width: "100%",
  },

  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#374151",
    marginBottom: 6,
  },

  input: {
    height: 48,

    backgroundColor: "#FFFFFF",

    borderWidth: 1,
    borderColor: "#D1D5DB",

    borderRadius: 10,

    paddingHorizontal: 15,

    marginBottom: 13,

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

    marginTop: 20,
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