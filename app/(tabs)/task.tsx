import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
    Modal,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";

export default function TasksScreen() {
  // Danh sách công việc mẫu
  const [tasks, setTasks] = useState([
    { id: "1", title: "Nộp đồ án Lập trình Đa nền tảng", course: "Đa nền tảng", deadline: "Hôm nay", completed: false },
    { id: "2", title: "Làm bài tập lớn Cấu trúc dữ liệu", course: "Cấu trúc dữ liệu", deadline: "Ngày mai", completed: false },
    { id: "3", title: "Hoàn thành slide thuyết trình", course: "An toàn bảo mật", deadline: "20/09/2026", completed: true },
  ]);

  // State cho Modal thêm công việc mới
  const [modalVisible, setModalVisible] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newCourse, setNewCourse] = useState("");
  const [newDeadline, setNewDeadline] = useState("");

  // Hàm đổi trạng thái hoàn thành task
  const toggleTask = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Hàm thêm task mới
  const addTask = () => {
    if (!newTaskTitle || !newCourse) {
      alert("Vui lòng nhập tên công việc và môn học!");
      return;
    }

    const newTask = {
      id: Date.now().toString(),
      title: newTaskTitle,
      course: newCourse,
      deadline: newDeadline || "Chưa rõ",
      completed: false,
    };

    setTasks([newTask, ...tasks]);
    setNewTaskTitle("");
    setNewCourse("");
    setNewDeadline("");
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Quản lý Công việc</Text>
        <Pressable style={styles.addBtn} onPress={() => setModalVisible(true)}>
          <Ionicons name="add" size={24} color="#FFF" />
        </Pressable>
      </View>

      {/* Danh sách Task */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {tasks.map((item) => (
          <View
            key={item.id}
            style={[styles.taskCard, item.completed && styles.completedCard]}
          >
            <Pressable onPress={() => toggleTask(item.id)} style={styles.checkbox}>
              <Ionicons
                name={item.completed ? "checkbox" : "square-outline"}
                size={24}
                color={item.completed ? "#16A34A" : "#9CA3AF"}
              />
            </Pressable>
            <View style={{ flex: 1, marginLeft: 12 }}>
              <Text
                style={[
                  styles.taskTitle,
                  item.completed && styles.completedText,
                ]}
              >
                {item.title}
              </Text>
              <Text style={styles.taskCourse}>{item.course}</Text>
            </View>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{item.deadline}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Modal Thêm Công Việc Mới */}
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Thêm Công Việc Mới</Text>

            <Text style={styles.label}>Tên công việc / Bài tập</Text>
            <TextInput
              style={styles.input}
              placeholder="VD: Làm bài tập lớn..."
              value={newTaskTitle}
              onChangeText={setNewTaskTitle}
            />

            <Text style={styles.label}>Tên môn học</Text>
            <TextInput
              style={styles.input}
              placeholder="VD: Lập trình Đa nền tảng"
              value={newCourse}
              onChangeText={setNewCourse}
            />

            <Text style={styles.label}>Hạn chót (Deadline)</Text>
            <TextInput
              style={styles.input}
              placeholder="VD: Ngày mai, 23:59"
              value={newDeadline}
              onChangeText={setNewDeadline}
            />

            <View style={styles.modalButtons}>
              <Pressable
                style={[styles.modalBtn, styles.cancelBtn]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.cancelBtnText}>Hủy</Text>
              </Pressable>
              <Pressable style={[styles.modalBtn, styles.saveBtn]} onPress={addTask}>
                <Text style={styles.saveBtnText}>Thêm</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F9FAFB", padding: 20 },
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 20, marginTop: 10 },
  headerTitle: { fontSize: 22, fontWeight: "bold", color: "#1F2937" },
  addBtn: { backgroundColor: "#2563EB", padding: 8, borderRadius: 10 },

  taskCard: { flexDirection: "row", alignItems: "center", backgroundColor: "#FFF", padding: 15, borderRadius: 12, marginBottom: 12, borderWidth: 1, borderColor: "#E5E7EB" },
  completedCard: { backgroundColor: "#F3F4F6", borderColor: "#E5E7EB" },
  checkbox: { padding: 2 },
  taskTitle: { fontSize: 15, fontWeight: "600", color: "#1F2937" },
  completedText: { textDecorationLine: "line-through", color: "#9CA3AF" },
  taskCourse: { fontSize: 12, color: "#6B7280", marginTop: 3 },
  badge: { backgroundColor: "#EEF2FF", paddingVertical: 5, paddingHorizontal: 8, borderRadius: 6 },
  badgeText: { fontSize: 11, color: "#2563EB", fontWeight: "600" },

  modalOverlay: { flex: 1, justifyContent: "flex-end", backgroundColor: "rgba(0,0,0,0.4)" },
  modalContent: { backgroundColor: "#FFF", padding: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20, paddingBottom: 40 },
  modalTitle: { fontSize: 18, fontWeight: "bold", color: "#1F2937", marginBottom: 15, textAlign: "center" },
  label: { fontSize: 13, fontWeight: "600", color: "#374151", marginBottom: 5 },
  input: { borderWidth: 1, borderColor: "#D1D5DB", borderRadius: 8, padding: 12, marginBottom: 15, fontSize: 14, backgroundColor: "#F9FAFB" },
  modalButtons: { flexDirection: "row", justifyContent: "space-between", marginTop: 10 },
  modalBtn: { flex: 1, padding: 14, borderRadius: 10, alignItems: "center" },
  cancelBtn: { backgroundColor: "#F3F4F6", marginRight: 10 },
  cancelBtnText: { color: "#4B5563", fontWeight: "bold" },
  saveBtn: { backgroundColor: "#2563EB", marginLeft: 10 },
  saveBtnText: { color: "#FFF", fontWeight: "bold" },
});