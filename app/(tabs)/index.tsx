import { Ionicons } from "@expo/vector-icons"; // Thư viện icon có sẵn trong Expo
import React from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";

// Dữ liệu mẫu cho danh sách deadline/công việc cần làm
const upcomingTasks = [
  { id: "1", title: "Nộp đồ án Lập trình Đa nền tảng", course: "Lập trình Đa nền tảng", deadline: "Hôm nay, 23:59", urgent: true },
  { id: "2", title: "Làm bài tập lớn Cấu trúc dữ liệu", course: "Cấu trúc dữ liệu", deadline: "Ngày mai", urgent: false },
  { id: "3", title: "Đọc giáo trình An toàn bảo mật", course: "Bảo mật hệ thống", deadline: "20/09/2026", urgent: false },
];

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      
      {/* 1. Header: Chào hỏi người dùng */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Xin chào,</Text>
          <Text style={styles.username}>Sinh viên 👋</Text>
        </View>
        <Pressable style={styles.notificationBtn}>
          <Ionicons name="notifications-outline" size={24} color="#1F2937" />
        </Pressable>
      </View>

      {/* 2. Thẻ tổng quan (Summary Cards) */}
      <View style={styles.overviewContainer}>
        <View style={[styles.card, { backgroundColor: "#EEF2FF" }]}>
          <Ionicons name="book-outline" size={28} color="#2563EB" />
          <Text style={styles.cardTitle}>Môn học</Text>
          <Text style={[styles.cardValue, { color: "#2563EB" }]}>6</Text>
        </View>

        <View style={[styles.card, { backgroundColor: "#FEF3C7" }]}>
          <Ionicons name="time-outline" size={28} color="#D97706" />
          <Text style={styles.cardTitle}>Đang làm</Text>
          <Text style={[styles.cardValue, { color: "#D97706" }]}>3</Text>
        </View>

        <View style={[styles.card, { backgroundColor: "#DCFCE7" }]}>
          <Ionicons name="checkmark-circle-outline" size={28} color="#16A34A" />
          <Text style={styles.cardTitle}>Hoàn thành</Text>
          <Text style={[styles.cardValue, { color: "#16A34A" }]}>12</Text>
        </View>
      </View>

      {/* 3. Lịch học hôm nay (Quick Schedule) */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Lịch học hôm nay</Text>
        <View style={styles.scheduleBox}>
          <View style={styles.timeTag}>
            <Text style={styles.timeText}>07:30 - 09:55</Text>
          </View>
          <View style={{ flex: 1, marginLeft: 15 }}>
            <Text style={styles.scheduleSubject}>Lập trình Đa nền tảng (Lý thuyết)</Text>
            <Text style={styles.scheduleRoom}>Phòng: C.ăn phòng thực hành 3</Text>
          </View>
        </View>
      </View>

      {/* 4. Danh sách Deadline / Công việc cần làm */}
      <View style={styles.sectionContainer}>
        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionTitle}>Deadline sắp tới</Text>
          <Pressable>
            <Text style={styles.seeAllText}>Xem tất cả</Text>
          </Pressable>
        </View>

        {upcomingTasks.map((item) => (
          <View key={item.id} style={styles.taskItem}>
            <View style={styles.taskLeft}>
              <Ionicons 
                name={item.urgent ? "alert-circle" : "ellipse-outline"} 
                size={22} 
                color={item.urgent ? "#DC2626" : "#9CA3AF"} 
              />
              <View style={{ marginLeft: 12 }}>
                <Text style={styles.taskTitle}>{item.title}</Text>
                <Text style={styles.taskCourse}>{item.course}</Text>
              </View>
            </View>
            <View style={[styles.deadlineBadge, item.urgent && styles.urgentBadge]}>
              <Text style={[styles.deadlineText, item.urgent && styles.urgentText]}>
                {item.deadline}
              </Text>
            </View>
          </View>
        ))}
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F9FAFB", padding: 20 },
  
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 20, marginTop: 10 },
  greeting: { fontSize: 14, color: "#6B7280" },
  username: { fontSize: 20, fontWeight: "bold", color: "#1F2937" },
  notificationBtn: { padding: 8, backgroundColor: "#FFF", borderRadius: 10, borderWidth: 1, borderColor: "#E5E7EB" },

  overviewContainer: { flexDirection: "row", justifyContent: "space-between", marginBottom: 25 },
  card: { flex: 1, padding: 15, borderRadius: 12, marginRight: 10, alignItems: "flex-start" },
  cardTitle: { fontSize: 13, color: "#4B5563", marginTop: 8 },
  cardValue: { fontSize: 20, fontWeight: "bold", marginTop: 2 },

  sectionContainer: { marginBottom: 25 },
  sectionTitle: { fontSize: 17, fontWeight: "bold", color: "#1F2937", marginBottom: 12 },
  sectionHeaderRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 12 },
  seeAllText: { fontSize: 14, color: "#2563EB", fontWeight: "600" },

  scheduleBox: { flexDirection: "row", backgroundColor: "#FFF", padding: 15, borderRadius: 12, borderWidth: 1, borderColor: "#E5E7EB", alignItems: "center" },
  timeTag: { backgroundColor: "#EFF6FF", paddingVertical: 8, paddingHorizontal: 10, borderRadius: 8 },
  timeText: { fontSize: 12, fontWeight: "bold", color: "#2563EB" },
  scheduleSubject: { fontSize: 14, fontWeight: "bold", color: "#1F2937" },
  scheduleRoom: { fontSize: 12, color: "#6B7280", marginTop: 3 },

  taskItem: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: "#FFF", padding: 15, borderRadius: 12, marginBottom: 10, borderWidth: 1, borderColor: "#E5E7EB" },
  taskLeft: { flexDirection: "row", alignItems: "center", flex: 1 },
  taskTitle: { fontSize: 14, fontWeight: "600", color: "#1F2937" },
  taskCourse: { fontSize: 12, color: "#6B7280", marginTop: 2 },
  deadlineBadge: { backgroundColor: "#F3F4F6", paddingVertical: 5, paddingHorizontal: 8, borderRadius: 6 },
  urgentBadge: { backgroundColor: "#FEE2E2" },
  deadlineText: { fontSize: 11, color: "#4B5563", fontWeight: "500" },
  urgentText: { color: "#DC2626", fontWeight: "bold" },
});