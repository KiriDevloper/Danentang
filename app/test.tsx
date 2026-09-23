import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from "react-native";

interface Student {
  name: string;
  mssv: number;
  Lop?: string;
  status?: 'active' | 'inactive' | 'graduated'; // Thêm dấu ? để tránh lỗi nếu chưa truyền từ MyApp
}

function ThongTinSinhVien(props: Student) {
  // Gán giá trị mặc định là 'active' nếu props.status chưa được truyền
  const [status, setStatus] = useState(props.status || 'active');
  const [count, setCount] = useState(0);


  const handleStatusChange = () => {
    if (status === 'active') {
      setStatus('inactive');
    } else if (status === 'inactive') {
      setStatus('graduated');
    } else {
      setStatus('active');
    }
    setCount(count + 1);

  };
  const handlePress = () => {

    setCount(count + 1);

  };

  return (
    <Pressable style={styles.container} onPress={handlePress}>
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 5 }}>
        Thông tin sinh viên
      </Text>

      {/* Nút hiển thị trạng thái và số đếm ở góc */}
      <Pressable style={styles.statusButton} onPress={handleStatusChange}>
        <Text style={styles.statusText}>{status}</Text>
        
        <Text style={styles.countText}>{count}</Text>
      </Pressable>

      <Text style={{ fontSize: 16 }}>Họ và tên: {props.name}</Text>
      <Text style={{ fontSize: 16 }}>MSSV: {props.mssv}</Text>
      <Text style={{ fontSize: 16 }}>Lớp: {props.Lop}</Text>
    </Pressable>
  );
}

export default function MyApp() {
  return (
    <View style={styles.appContainer}>
      <ThongTinSinhVien name="Nguyễn Văn A" mssv={123} Lop="CNTT K23" status="graduated" />
      <ThongTinSinhVien name="Nguyễn Văn B" mssv={1234} Lop="CNTT K24" status="inactive" />
      <ThongTinSinhVien name="Nguyễn Văn C" mssv={12345} Lop="CNTT K25" status="active" />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 20,
    flex: 1,
    justifyContent: "center",
  },countText: {
    color: '#ffeb3b', // Đổi màu vàng cho dễ nhìn, hoặc để '#fff' tùy ý
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 2, // Tạo khoảng cách nhỏ với chữ phía trên
  },
  container: {
    marginBottom: 15,
    padding: 15,
    borderWidth: 1, 
    borderColor: "#ccc", 
    borderRadius: 8, 
    backgroundColor: "#f9f9f9", 
    position: "relative", 
  },
  statusButton: {
    position: 'absolute',
    top: 15,
    right: 15,
    backgroundColor: '#007AFF', // Màu nền nút bấm
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
    zIndex: 99,       
    elevation: 5,     
  },
  statusText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  
});