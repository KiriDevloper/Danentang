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