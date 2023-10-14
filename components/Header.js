import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { useFonts, Rubik_700Bold } from "@expo-google-fonts/rubik";
import Icon from "react-native-vector-icons/MaterialIcons"; // Import the Material Icons

function Header() {
  const [modalVisible, setModalVisible] = useState(false);

  let [fontsLoaded, fontError] = useFonts({
    Rubik_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.header}>
      <Text style={styles.appTitle}>COURSE GOALS</Text>
      <Pressable onPress={openModal} style={styles.icon}>
        <Icon name="account-circle" size={40} color="white" />
      </Pressable>

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeader}>Welcome to the Application!</Text>
            <TouchableOpacity onPress={closeModal}>
              <Text style={styles.modalButton}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  appTitle: {
    fontFamily: "Rubik_700Bold",
    fontSize: 40,
    color: "rgb(28, 96, 125)",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalContent: {
    margin: 20,
    maxWidth: "60%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 35,
    alignItems: "center",
    elevation: 5,
  },
  modalHeader: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 5,
  },
  modalText: {
    textAlign: "center",
  },
  modalButton: {
    marginTop: 15,
    color: "rgb(28, 96, 125)",
    textAlign: "center",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 25,
  },
});

export default Header;
