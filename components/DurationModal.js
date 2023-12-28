// DateTimeModal.js
import React from "react";
import { Modal, View, Text, TouchableOpacity } from "react-native";
import DateTimePicker from "react-native-ui-datepicker";

const DateTimeModal = ({ visible, onClose, duration, onDurationChange }) => {
  return (
    <Modal visible={isDurationModalOpen} transparent={true}>
      <View style={styles.modal}>
        <TouchableOpacity onPress={() => toggleDurationModal(false)}>
          <Text>Close</Text>
        </TouchableOpacity>

        <DateTimePicker
          value={duration}
          mode={"time"}
          onValueChange={(value) => setTaskDuration(value)}
          style={styles.durationPicker}
          todayContainerStyle={{
            borderWidth: 1,
          }}
        />

        <TouchableOpacity style={styles.button} onPress={handleAddDuration}>
          <Text style={styles.buttonText}>Set duration</Text>
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
