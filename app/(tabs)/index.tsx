import React, { useState } from 'react';
import { Alert, Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function StudentForm() {
  const [name, setName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    // Hiển thị thông báo khi nhấn nút Gửi
    Alert.alert('Thông tin đã nhập', `Họ tên: ${name}\nMSSV: ${studentId}\nSĐT: ${phone}\nEmail: ${email}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>ĐĂNG KÝ THÔNG TIN</Text>

      {/* 1. Họ và Tên */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Họ và Tên:</Text>
        <TextInput
          style={styles.input}
          placeholder="Nguyễn Văn A"
          value={name}
          onChangeText={setName}
          autoCapitalize="words" // Tự động viết hoa chữ cái đầu mỗi từ
        />
      </View>

      {/* 2. Mã số sinh viên (MSSV) */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Mã số sinh viên (MSSV):</Text>
        <TextInput
          style={styles.input}
          placeholder="B20DCCN123"
          value={studentId}
          onChangeText={setStudentId}
          autoCapitalize="characters" // Tự động viết hoa toàn bộ (thường MSSV có chữ)
          keyboardType="default" 
        />
      </View>

      {/* 3. Số điện thoại */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Số điện thoại:</Text>
        <TextInput
          style={styles.input}
          placeholder="0912345678"
          value={phone}
          onChangeText={phone => setPhone(phone.replace(/[^0-9]/g, ''))} // Chỉ cho phép nhập số
          keyboardType="phone-pad" // Mở bàn phím số gọi điện
          inputMode="tel"
        />
      </View>

      {/* 4. Email */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          placeholder="sinhvien@school.edu.vn"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address" // Mở bàn phím có sẵn nút @ và dấu chấm .
          inputMode="email"
          autoCapitalize="none" // Không tự động viết hoa email
          autoCorrect={false}   // Tắt tự động sửa chính tả
        />
      </View>

      <Button title="Gửi thông tin" onPress={handleSubmit} color="#007AFF" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, paddingTop: 60 },
  title: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 20, color: '#333' },
  inputGroup: { marginBottom: 15 },
  label: { fontSize: 16, fontWeight: '500', marginBottom: 5, color: '#555' },
  input: { height: 45, borderWidth: 1, borderColor: '#ccc', borderRadius: 8, paddingHorizontal: 12, fontSize: 16, backgroundColor: '#fff' },
});