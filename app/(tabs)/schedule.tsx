import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

// Dữ liệu mẫu thời khóa biểu theo các ngày trong tuần
const scheduleData: { [key: string]: Array<{ id: string; time: string; subject: string; room: string; teacher: string }> } = {
  "Thứ 2": [
    { id: "1", time: "07:30 - 09:55", subject: "Lập trình Đa nền tảng", room: "Phòng thực hành 3", teacher: "GV. Nguyễn Văn A" },
    { id: "2", time: "13:30 - 15:55", subject: "Cấu trúc dữ liệu & Giải thuật", room: "Phòng A201", teacher: "GV. Trần Văn B" },
  ],
  "Thứ 3": [
    { id: "3", time: "09:00 - 11:30", subject: "An toàn và Bảo mật hệ thống", room: "Phòng B302", teacher: "GV. Lê Thị C" },
  ],
  "Thứ 4": [
    { id: "4", time: "07:30 - 09:55", subject: "Lập trình Web nâng cao", room: "Phòng thực hành 1", teacher: "GV. Phạm Văn D" },
  ],
  "Thứ 5": [
    { id: "5", time: "13:30 - 16:00", subject: "Tiếng Anh chuyên ngành", room: "Phòng C102", teacher: "GV. Sarah" },
  ],
  "Thứ 6": [
    { id: "6", time: "07:30 - 11:30", subject: "Đồ án tốt nghiệp / Thực tập", room: "Phòng Seminar", teacher: "GV Hướng dẫn" },
  ],
  "Thứ 7": [],
  "Chủ nhật": [],
};

const days = ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "Chủ nhật"];

export default function ScheduleScreen() {
  const [selectedDay, setSelectedDay] = useState("Thứ 2");

  const currentSchedule = scheduleData[selectedDay] || [];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Thời Khóa Biểu</Text>
      </View>

      {/* Thanh chọn ngày ngang */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.dayScrollContainer}
        contentContainerStyle={{ paddingHorizontal: 5 }}
      >
        {days.map((day) => (
          <Pressable
            key={day}
            style={[
              styles.dayTab,
              selectedDay === day && styles.activeDayTab,
            ]}
            onPress={() => setSelectedDay(day)}
          >
            <Text
              style={[
                styles.dayTabText,
                selectedDay === day && styles.activeDayTabText,
              ]}
            >
              {day}
            </Text>
          </Pressable>
        ))}
      </ScrollView>

      {/* Danh sách lịch học trong ngày được chọn */}
      <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 15 }}>
        {currentSchedule.length > 0 ? (
          currentSchedule.map((item) => (
            <View key={item.id} style={styles.scheduleCard}>
              <View style={styles.timeContainer}>
                <Ionicons name="time-outline" size={16} color="#2563EB" />
                <Text style={styles.timeText}>{item.time}</Text>
              </View>

              <Text style={styles.subjectText}>{item.subject}</Text>

              <View style={styles.infoRow}>
                <View style={styles.infoItem}>
                  <Ionicons name="location-outline" size={14} color="#6B7280" />
                  <Text style={styles.infoText}>{item.room}</Text>
                </View>
                <View style={styles.infoItem}>
                  <Ionicons name="person-outline" size={14} color="#6B7280" />
                  <Text style={styles.infoText}>{item.teacher}</Text>
                </View>
              </View>
            </View>
          ))
        ) : (
          <View style={styles.emptyContainer}>
            <Ionicons name="calendar-outline" size={50} color="#9CA3AF" />
            <Text style={styles.emptyText}>Không có lịch học vào {selectedDay}</Text>
            <Text style={styles.emptySubText}>Hãy nghỉ ngơi hoặc tự ôn tập nhé!</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F9FAFB", padding: 20 },
  header: { marginBottom: 15, marginTop: 10 },
  headerTitle: { fontSize: 22, fontWeight: "bold", color: "#1F2937" },

  dayScrollContainer: { maxHeight: 55, marginBottom: 10 },
  dayTab: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: "#FFF",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    marginRight: 8,
    justifyContent: "center",
    alignItems: "center",
    height: 44,
  },
  activeDayTab: { backgroundColor: "#2563EB", borderColor: "#2563EB" },
  dayTabText: { fontSize: 14, fontWeight: "600", color: "#4B5563" },
  activeDayTabText: { color: "#FFF" },

  scheduleCard: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  timeContainer: { flexDirection: "row", alignItems: "center", marginBottom: 8 },
  timeText: { fontSize: 13, fontWeight: "bold", color: "#2563EB", marginLeft: 6 },
  subjectText: { fontSize: 16, fontWeight: "bold", color: "#1F2937", marginBottom: 10 },
  infoRow: { flexDirection: "row", justifyContent: "space-between", borderTopWidth: 1, borderTopColor: "#F3F4F6", paddingTop: 10 },
  infoItem: { flexDirection: "row", alignItems: "center" },
  infoText: { fontSize: 12, color: "#6B7280", marginLeft: 5 },

  emptyContainer: { alignItems: "center", justifyContent: "center", marginTop: 80 },
  emptyText: { fontSize: 16, fontWeight: "600", color: "#4B5563", marginTop: 12 },
  emptySubText: { fontSize: 13, color: "#9CA3AF", marginTop: 4 },
});