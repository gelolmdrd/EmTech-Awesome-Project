import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const GoalItem = (props) => {
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);

  const handleDelete = () => {
    // Show the delete confirmation modal
    setDeleteModalVisible(true);
  };

  const confirmDelete = () => {
    // Call the onDelete function passed from the parent component
    props.onDelete(props.id);

    // Close the delete confirmation modal
    setDeleteModalVisible(false);
  };

  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{props.text}</Text>
      <TouchableOpacity onPress={handleDelete}>
        <Icon name="close" size={24} color="white" />
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isDeleteModalVisible}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              Are you sure you want to delete this item?
            </Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity onPress={() => setDeleteModalVisible(false)}>
                <Text style={styles.modalButton}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={confirmDelete}>
                <Text style={styles.modalButton}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: "rgb(28, 96, 125)",
    color: "#fefefe",
    fontSize: 16,
    fontFamily: "Rubik_400Regular",
    textAlignVertical: "center",
  },
  goalText: {
    flex: 1,
    fontSize: 14,
    fontFamily: "Rubik_400Regular",
    color: "rgb(224, 224, 224)",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    marginBottom: 20,
    fontSize: 14,
    textAlign: "center",
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
  },
  modalButton: {
    padding: 10,
    fontSize: 14,
    color: "rgb(28, 96, 125)",
    textAlign: "center",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 25,
  },
});

export default GoalItem;
