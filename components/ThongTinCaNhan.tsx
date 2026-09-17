import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function ThongTinCaNhan() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}{" "}
      <View style={styles.header}>
        {" "}
        <View>
          {" "}
          <Text style={styles.appName}>THÔNG TIN CÁ NHÂN</Text>{" "}
          <Text style={styles.welcome}>
            Thông tin tài khoản sinh viên{" "}
          </Text>{" "}
        </View>
        ```
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>NT</Text>
        </View>
      </View>
      {/* Thông tin tài khoản */}
      <View style={styles.profileCard}>
        <View style={styles.bigAvatar}>
          <Text style={styles.bigAvatarText}>NT</Text>
        </View>

        <Text style={styles.name}>Nguyễn Ngọc Trung</Text>
        <Text style={styles.student}>Sinh viên - CNTT K23</Text>
      </View>
      {/* Thông tin cá nhân */}
      <Text style={styles.sectionTitle}>Thông tin cá nhân</Text>
      <View style={styles.infoCard}>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Họ và tên</Text>
          <Text style={styles.value}>Nguyễn Ngọc Trung</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>MSSV</Text>
          <Text style={styles.value}>23103084</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Lớp</Text>
          <Text style={styles.value}>CNTT K23</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Ngày sinh</Text>
          <Text style={styles.value}>09/06/2005</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Khoa</Text>
          <Text style={styles.value}>Công nghệ thông tin</Text>
        </View>
      </View>
      {/* Thông tin tài khoản */}
      <Text style={styles.sectionTitle}>Thông tin tài khoản</Text>
      <View style={styles.infoCard}>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Email</Text>
          <Text style={styles.value}>trung23103084@gmail.com</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Trạng thái</Text>
          <Text style={styles.active}>Đang hoạt động</Text>
        </View>
      </View>
      {/* Chức năng */}
      <Text style={styles.sectionTitle}>Cài đặt tài khoản</Text>
      <View style={styles.buttonCard}>
        <Pressable style={styles.button}>
          <Text style={styles.buttonIcon}>✏️</Text>
          <Text style={styles.buttonText}>Chỉnh sửa thông tin</Text>
        </Pressable>

        <Pressable style={styles.button}>
          <Text style={styles.buttonIcon}>🔒</Text>
          <Text style={styles.buttonText}>Đổi mật khẩu</Text>
        </Pressable>
        
<Pressable style={styles.button}>
          <Text style={styles.buttonIcon}>⚙️</Text>
          <Text style={styles.buttonText}>Cài đặt</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FB",
    paddingHorizontal: 20,
    paddingTop: 45,
  },

  /* Header */
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  appName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2563EB",
  },

  welcome: {
    fontSize: 12,
    color: "#6B7280",
    marginTop: 2,
  },

  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#2563EB",
    justifyContent: "center",
    alignItems: "center",
  },

  avatarText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },

  /* Profile */
  profileCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingVertical: 25,
    alignItems: "center",
    marginBottom: 25,
  },

  bigAvatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#2563EB",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },

  bigAvatarText: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "bold",
  },

  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1F2937",
  },

  student: {
    fontSize: 13,
    color: "#6B7280",
    marginTop: 5,
  },

  /* Section */
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1F2937",
    marginBottom: 12,
  },

  /* Information */
  infoCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 15,
    marginBottom: 22,
  },

  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
  },

  label: {
    fontSize: 14,
    color: "#6B7280",
  },

  value: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1F2937",
    maxWidth: "60%",
    textAlign: "right",
  },

  active: {
    fontSize: 14,
    fontWeight: "600",
    color: "#16A34A",
  },

  /* Buttons */
  buttonCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 30,
  },

  button: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
  },

  buttonIcon: {
    fontSize: 20,
    width: 35,
  },

  buttonText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#374151",
  },
});