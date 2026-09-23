import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import {
    Alert,
    Pressable,
    StyleSheet,
    Text,
    View
} from "react-native";

export default function ProfileScreen() {
  const handleLogout = () => {
    Alert.alert(
      "Đăng xuất",
      "Bạn có chắc chắn muốn đăng xuất khỏi tài khoản?",
      [
        { text: "Hủy", style: "cancel" },
        {
          text: "Đăng xuất",
          style: "destructive",
          onPress: () => {
            // Quay về màn hình Login và xóa lịch sử route
            router.replace("/login");
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Hồ Sơ Cá Nhân</Text>
      </View>

      {/* Thông tin User */}
      <View style={styles.profileCard}>
        <View style={styles.avatarContainer}>
          <Ionicons name="person" size={40} color="#2563EB" />
        </View>
        <View style={{ marginLeft: 15, flex: 1 }}>
          <Text style={styles.userName}>Sinh viên Quản Lý</Text>
          <Text style={styles.userEmail}>sinhvien@student.edu.vn</Text>
          <Text style={styles.userRole}>Học phần: Lập trình Đa nền tảng</Text>
        </View>
      </View>

      {/* Các tùy chọn cài đặt / chức năng */}
      <View style={styles.menuContainer}>
        <Pressable style={styles.menuItem}>
          <View style={styles.menuLeft}>
            <Ionicons name="notifications-outline" size={20} color="#4B5563" />
            <Text style={styles.menuText}>Thông báo nhắc nhở</Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color="#9CA3AF" />
        </Pressable>

        <Pressable style={styles.menuItem}>
          <View style={styles.menuLeft}>
            <Ionicons name="color-palette-outline" size={20} color="#4B5563" />
            <Text style={styles.menuText}>Giao diện ứng dụng</Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color="#9CA3AF" />
        </Pressable>

        <Pressable style={styles.menuItem}>
          <View style={styles.menuLeft}>
            <Ionicons name="information-circle-outline" size={20} color="#4B5563" />
            <Text style={styles.menuText}>Về ứng dụng Study Manager</Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color="#9CA3AF" />
        </Pressable>
      </View>

      {/* Nút Đăng xuất */}
      <Pressable style={styles.logoutButton} onPress={handleLogout}>
        <Ionicons name="log-out-outline" size={20} color="#DC2626" />
        <Text style={styles.logoutText}>Đăng xuất</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F9FAFB", padding: 20 },
  header: { marginBottom: 20, marginTop: 10 },
  headerTitle: { fontSize: 22, fontWeight: "bold", color: "#1F2937" },

  profileCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  avatarContainer: {
    width: 65,
    height: 65,
    borderRadius: 32.5,
    backgroundColor: "#EFF6FF",
    justifyContent: "center",
    alignItems: "center",
  },
  userName: { fontSize: 18, fontWeight: "bold", color: "#1F2937" },
  userEmail: { fontSize: 13, color: "#6B7280", marginTop: 2 },
  userRole: { fontSize: 12, color: "#2563EB", fontWeight: "600", marginTop: 4 },

  menuContainer: {
    backgroundColor: "#FFF",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    marginBottom: 20,
    overflow: "hidden",
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
  },
  menuLeft: { flexDirection: "row", alignItems: "center" },
  menuText: { fontSize: 15, color: "#374151", marginLeft: 12, fontWeight: "500" },

  logoutButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FEF2F2",
    padding: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#FEE2E2",
  },
  logoutText: { color: "#DC2626", fontWeight: "bold", fontSize: 16, marginLeft: 8 },
});