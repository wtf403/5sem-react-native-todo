// DateTimeModal.js
import React from "react";
import { Modal, View, Text, TouchableOpacity } from "react-native";
import DateTimePicker from "react-native-ui-datepicker";
import { buttonStyles, modalStyles } from "App";

const DateTimeModal = ({ visible, onClose, dateTime, onDateTimeChange }) => {
  return (
    <Modal visible={visible} transparent={true}>
      <View style={styles.modal}>
        <TouchableOpacity style={styles.modalCloseBtn} onPress={onClose}>
          <Text>Close</Text>
        </TouchableOpacity>

        <DateTimePicker
          style={styles.datePicker}
          value={dateTime}
          onValueChange={onDateTimeChange}
          todayContainerStyle={{
            borderWidth: 1,
          }}
        />

        <TouchableOpacity style={styles.button} onPress={onClose}>
          <Text style={styles.buttonText}>Choose</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  datePicker: {
    borderColor: "#ccc",
    width: 200,

    width: "100%",
    height: 40,
  },
  ...buttonStyles,
  ...modalStyles,
});

export default DateTimeModal;
