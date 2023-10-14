import React from "react";
import { View, Modal, StyleSheet, Text, TouchableOpacity } from "react-native";

const GoalModal = ({ isVisible, closeModal }) => {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalHeader}>You Added Too Many Goals!</Text>
          <Text style={styles.modalText}>
            Too much goal can be a burden. Please limit your goals.
          </Text>
          <TouchableOpacity onPress={() => closeModal()}>
            <Text style={styles.modalButton}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
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
    color: "rgb(28, 96, 125)",
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

export default GoalModal;
