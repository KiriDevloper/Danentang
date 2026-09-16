// components/MonHoc.tsx
import React from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function MonHoc() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.appName}>QUẢN LÝ MÔN HỌC</Text>
          <Text style={styles.welcome}>Danh sách học phần kỳ này</Text>
        </View>

        <Pressable style={styles.addButton}>
          <Text style={styles.addButtonText}>+ Thêm</Text>
        </Pressable>
      </View>

      {/* Thanh tìm kiếm */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Tìm kiếm môn học..."
          placeholderTextColor="#9CA3AF"
        />
      </View>

      {/* Thống kê nhanh */}
      <View style={styles.stats}>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>5</Text>
          <Text style={styles.statText}>Tổng số môn</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>15</Text>
          <Text style={styles.statText}>Số tín chỉ</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>2</Text>
          <Text style={styles.statText}>Đã hoàn thành</Text>
        </View>
      </View>

      {/* Danh sách môn học */}
      <Text style={styles.sectionTitle}>Tất cả môn học</Text>

      {/* Môn học 1 */}
      <View style={styles.subjectCard}>
        <View style={styles.subjectHeader}>
          <View style={styles.subjectIconBox}>
            <Text style={styles.subjectIcon}>💻</Text>
          </View>
          <View style={styles.subjectInfo}>
            <Text style={styles.subjectName}>Lập trình ứng dụng di động</Text>
            <Text style={styles.subjectCode}>Mã môn: TIN301 - 3 tín chỉ</Text>
          </View>
        </View>
        <View style={styles.subjectDetails}>
          <Text style={styles.detailText}>👨‍🏫 GV: Nguyễn Văn A</Text>
          <Text style={styles.detailText}>📍 Phòng: B204</Text>
        </View>
      </View>

      {/* Môn học 2 */}
      <View style={styles.subjectCard}>
        <View style={styles.subjectHeader}>
          <View style={styles.subjectIconBox}>
            <Text style={styles.subjectIcon}>🗄️</Text>
          </View>
          <View style={styles.subjectInfo}>
            <Text style={styles.subjectName}>Cơ sở dữ liệu nâng cao</Text>
            <Text style={styles.subjectCode}>Mã môn: TIN302 - 3 tín chỉ</Text>
          </View>
        </View>
        <View style={styles.subjectDetails}>
          <Text style={styles.detailText}>👨‍🏫 GV: Trần Thị B</Text>
          <Text style={styles.detailText}>📍 Phòng: A102</Text>
        </View>
      </View>

      {/* Môn học 3 */}
<View style={styles.subjectCard}>
        <View style={styles.subjectHeader}>
          <View style={styles.subjectIconBox}>
            <Text style={styles.subjectIcon}>🌐</Text>
          </View>
          <View style={styles.subjectInfo}>
            <Text style={styles.subjectName}>Lập trình Web nâng cao</Text>
            <Text style={styles.subjectCode}>Mã môn: TIN303 - 3 tín chỉ</Text>
          </View>
        </View>
        <View style={styles.subjectDetails}>
          <Text style={styles.detailText}>👨‍🏫 GV: Lê Văn C</Text>
          <Text style={styles.detailText}>📍 Phòng: Lab 3</Text>
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
  addButton: {
    backgroundColor: "#2563EB",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 8,
  },
  addButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 14,
  },

  /* Search */
  searchContainer: {
    marginBottom: 20,
  },
  searchInput: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 14,
    color: "#1F2937",
    borderWidth: 1,
    borderColor: "#E5E7EB",
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
    textAlign: "center",
  },

  /* Section */
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1F2937",
    marginBottom: 12,
  },

  /* Subject Card */
  subjectCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 15,
    marginBottom: 12,
  },
  subjectHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  subjectIconBox: {
    width: 45,
    height: 45,
    borderRadius: 10,
    backgroundColor: "#E8F0FE",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  subjectIcon: {
    fontSize: 22,
  },
  subjectInfo: {
    flex: 1,
  },
  subjectName: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#1F2937",
  },
  subjectCode: {
    fontSize: 12,
    color: "#6B7280",
    marginTop: 3,
  },
  subjectDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
borderTopColor: "#F3F4F6",
    paddingTop: 10,
  },
  detailText: {
    fontSize: 12,
    color: "#4B5563",
  },
});
