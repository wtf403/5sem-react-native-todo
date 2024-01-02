// DateTimeModal.js
import React from "react";
import { Modal, View, Text, TouchableOpacity } from "react-native";
import DateTimePicker from "react-native-ui-datepicker";
import { buttonStyles, modalStyles } from "App";

const DateTime = React.memo(({ value, type, onChange }) => (
  <DateTimePicker
    value={value}
    onValueChange={onChange}
    mode={type}
    style={styles.durationPicker}
  />
));

const DateTimeModal = ({
  visible,
  type,
  onClose,
  dateTime,
  onDateTimeChange,
}) => {
  return (
    <Modal visible={visible} transparent={true}>
      <View style={styles.modal}>
        <TouchableOpacity style={styles.modalCloseBtn} onPress={onClose}>
          <Text>Close</Text>
        </TouchableOpacity>

        <DateTime
          style={styles.datePicker}
          value={dateTime}
          type={type}
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
