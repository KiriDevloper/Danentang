// components/Home.tsx
import React from "react";
import {
  Image,
  Pressable,
  ScrollView, // <-- Thêm từ này vào đây
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Home() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image
            source={require("../assets/images/icon.png")}
            style={styles.logo}
          />
          <View>
            <Text style={styles.appName}>STUDY MANAGER</Text>
            <Text style={styles.welcome}>Chào mừng bạn trở lại!</Text>
          </View>
        </View>

        <Pressable style={styles.profile}>
          <Text style={styles.profileText}>NT</Text>
        </Pressable>
      </View>

      {/* Lời chào */}
      <View style={styles.greeting}>
        <Text style={styles.title}>Xin chào, Trung 👋</Text>
        <Text style={styles.subtitle}>
          Hãy cùng quản lý việc học hôm nay nhé!
        </Text>
      </View>

      {/* Thống kê */}
      <View style={styles.stats}>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>5</Text>
          <Text style={styles.statText}>Môn học</Text>
        </View>

        <View style={styles.statBox}>
          <Text style={styles.statNumber}>3</Text>
          <Text style={styles.statText}>Bài tập</Text>
        </View>

        <View style={styles.statBox}>
          <Text style={styles.statNumber}>80%</Text>
          <Text style={styles.statText}>Tiến độ</Text>
        </View>
      </View>

      {/* Chức năng */}
      <Text style={styles.sectionTitle}>Chức năng chính</Text>

      <View style={styles.menu}>
        <Pressable style={styles.menuItem}>
          <Text style={styles.menuIcon}>📚</Text>
          <Text style={styles.menuTitle}>Môn học</Text>
          <Text style={styles.menuText}>Quản lý môn học</Text>
        </Pressable>

        <Pressable style={styles.menuItem}>
          <Text style={styles.menuIcon}>📝</Text>
          <Text style={styles.menuTitle}>Bài tập</Text>
          <Text style={styles.menuText}>Theo dõi bài tập</Text>
        </Pressable>

        <Pressable style={styles.menuItem}>
          <Text style={styles.menuIcon}>📅</Text>
          <Text style={styles.menuTitle}>Lịch học</Text>
          <Text style={styles.menuText}>Xem lịch học</Text>
        </Pressable>

        <Pressable style={styles.menuItem}>
          <Text style={styles.menuIcon}>📊</Text>
          <Text style={styles.menuTitle}>Tiến độ</Text>
          <Text style={styles.menuText}>Theo dõi tiến độ</Text>
        </Pressable>
      </View>

      {/* Việc cần làm */}
      <Text style={styles.sectionTitle}>Việc cần làm hôm nay</Text>

      <View style={styles.task}>
        <View style={styles.taskLeft}>
          <View style={styles.circle}>
            <Text style={styles.check}>✓</Text>
          </View>
          <View>
            <Text style={styles.taskTitle}>
              Hoàn thành bài tập React Native
            </Text>
            <Text style={styles.taskTime}>Hạn: 20:00 hôm nay</Text>
          </View>
        </View>
      </View>

      <View style={styles.task}>
        <View style={styles.taskLeft}>
          <View style={styles.circle}>
            <Text style={styles.check}>✓</Text>
          </View>
          <View>
            <Text style={styles.taskTitle}>Ôn tập môn Cơ sở dữ liệu</Text>
            <Text style={styles.taskTime}>Hạn: 22:00 hôm nay</Text>
          </View>
        </View>
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
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 45,
    height: 45,
    marginRight: 10,
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
  profile: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#2563EB",
    justifyContent: "center",
    alignItems: "center",
  },
  profileText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },

  /* Greeting */
  greeting: {
    marginTop: 25,
    marginBottom: 18,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#1F2937",
  },
  subtitle: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 6,
  },

  /* Statistics */
  stats: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
  },
  statBox: {
    width: "31%",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
  },
  statNumber: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2563EB",
  },
  statText: {
    fontSize: 12,
    color: "#6B7280",
    marginTop: 4,
  },

  /* Section */
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1F2937",
    marginBottom: 12,
  },

  /* Menu */
  menu: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 22,
  },
  menuItem: {
    width: "48%",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  menuIcon: {
    fontSize: 25,
    marginBottom: 7,
  },
  menuTitle: {
    fontSize: 15,
    fontWeight: "bold",
  },
  menuText: {
    fontSize: 12,
    color: "#6B7280",
    marginTop: 4,
  },

  /* Task */
  task: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  taskLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#E8F0FE",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  check: {
    color: "#2563EB",
    fontWeight: "bold",
  },
  taskTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#374151",
  },
  taskTime: {
    fontSize: 12,
    color: "#6B7280",
    marginTop: 4,
  },
});
