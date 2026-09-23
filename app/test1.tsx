import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

// Định nghĩa kiểu dữ liệu cho một cuốn sách
interface Book {
  id: number;
  title: string;
  author: string;
  category: string;
  status: 'active' | 'inactive';
}

// Component tái sử dụng để hiển thị thông tin 1 cuốn sách
function BookCard({ book, onToggleStatus }: { book: Book; onToggleStatus: (id: number) => void }) {
  const [count, setCount] = useState(0);

  const handlePress = () => {
    setCount(count + 1);
    onToggleStatus(book.id); // Gọi hàm đổi trạng thái ở component cha
  };

  return (
    <Pressable style={styles.container} onPress={handlePress}>
      <Text style={styles.title}>{book.title}</Text>
      
      {/* Nút hiển thị trạng thái và số lần bấm */}
      <View style={styles.statusButton}>
        <Text style={styles.statusText}>{book.status}</Text>
        <Text style={styles.countText}>{count}</Text>
      </View>

      <Text style={styles.text}>Tác giả: {book.author}</Text>
      <Text style={styles.text}>Danh mục: {book.category}</Text>
    </Pressable>
  );
}

export default function MyApp() {
  // Dữ liệu ban đầu gồm 6 cuốn sách
  const [books, setBooks] = useState<Book[]>([
    { id: 1, title: 'Lập trình C', author: 'Nguyễn Văn A', category: 'Lập trình', status: 'active' },
    { id: 2, title: 'Lập trình Java', author: 'Trần Văn B', category: 'Lập trình', status: 'active' },
    { id: 3, title: 'React Native cơ bản', author: 'Lê Văn C', category: 'Di động', status: 'active' },
    { id: 4, title: 'Cơ sở dữ liệu', author: 'Phạm Văn D', category: 'Cơ sở dữ liệu', status: 'active' },
    { id: 5, title: 'Mạng máy tính', author: 'Hoàng Văn E', category: 'Mạng', status: 'active' },
    { id: 6, title: 'Cấu trúc dữ liệu', author: 'Nguyễn Văn F', category: 'Lập trình', status: 'active' },
  ]);

  // Hàm xử lý khi bấm vào sách: thay đổi trạng thái của sách đó theo id
  const handleToggleStatus = (id: number) => {
    setBooks(prevBooks =>
      prevBooks.map(book => {
        if (book.id === id) {
          let nextStatus: 'active' | 'inactive'  = 'active';
          if (book.status === 'active') nextStatus = 'inactive';
          else nextStatus = 'active';

          return { ...book, status: nextStatus };
        }
        return book;
      })
    );
  };

  // Lọc ra danh sách chỉ chứa những cuốn sách có status là 'active' cho danh sách dưới
  const activeBooks = books.filter(book => book.status === 'active');

  return (
    <ScrollView contentContainerStyle={styles.appContainer}>
      <Text style={styles.sectionHeader}>📚 Danh sách toàn bộ sách ({books.length})</Text>
      {books.map(item => (
        <BookCard key={item.id} book={item} onToggleStatus={handleToggleStatus} />
      ))}

      <View style={styles.divider} />

      <Text style={styles.sectionHeader}>🔥 Danh sách sách Active ({activeBooks.length})</Text>
      {activeBooks.length > 0 ? (
        activeBooks.map(item => (
          <BookCard key={`active-${item.id}`} book={item} onToggleStatus={handleToggleStatus} />
        ))
      ) : (
        <Text style={styles.emptyText}>Không có cuốn sách active nào.</Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 20,
    paddingTop: 50,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
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
  title: {
    fontSize: 18, 
    fontWeight: "bold", 
    marginBottom: 5,
    color: '#1a1a1a',
    maxWidth: '70%', 
  },
  text: {
    fontSize: 14,
    color: '#555',
    marginTop: 2,
  },
  statusButton: {
    position: 'absolute',
    top: 15,
    right: 15,
    backgroundColor: '#007AFF', 
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 15,
    zIndex: 99,       
    elevation: 5,     
    alignItems: 'center',
  },
  statusText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 11,
  },
  countText: {
    color: '#ffeb3b', 
    fontSize: 11,
    fontWeight: 'bold',
    marginTop: 2, 
  },
  divider: {
    height: 2,
    backgroundColor: '#ddd',
    marginVertical: 20,
  },
  emptyText: {
    fontStyle: 'italic',
    color: '#888',
    marginBottom: 15,
  },
});