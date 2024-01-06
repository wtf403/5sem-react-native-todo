// DateTimeModal.js
import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import DateTimePicker from "react-native-ui-datepicker";

const DateTime = React.memo(({ value, type, onValueChange }) => (
  <DateTimePicker
    value={value}
    onValueChange={onValueChange}
    selectedItemColor={"#eee"}
    displayFullDays={true}
    calendarTextStyle={{
      fontFamily: "RobotoLight",
    }}
    selectedTextStyle={{
      fontFamily: "RobotoRegular",
      color: "black",
    }}
    style={styles.durationPicker}
    mode={type}
  />
));

const DateTimeModal = ({
  visible,
  type,
  onClose,
  onSubmit,
  dateTime,
  onDateTimeChange,
}) => {
  return (
    <Modal onBackdropPress={onClose} visible={visible} transparent={true}>
      <View style={styles.modal}>
        <DateTime
          style={styles.datePicker}
          value={dateTime}
          type={type}
          onValueChange={onDateTimeChange}
          todayContainerStyle={{
            borderWidth: 1,
          }}
        />

        <TouchableOpacity style={styles.button} onPress={onSubmit}>
          <Text style={styles.buttonText}>Choose {type}</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    position: "absolute",
    left: "50%",
    transform: [{ translateX: -165 }],
    borderWidth: 1,
    backgroundColor: "white",
    borderRadius: 8,
    paddingHorizontal: 16,
    marginHorizontal: "auto",
    paddingVertical: 8,
    borderColor: "#ccc",
    width: 330,
  },
  modalCloseBtn: {
    width: "20%",
  },
  datePicker: {
    borderColor: "#ccc",
    width: 200,

    width: "100%",
    height: 40,
  },

  button: {
    padding: 12,
    backgroundColor: "#eee",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#808080",
    borderRadius: 4,
    marginBottom: 8,
  },
});

export default DateTimeModal;
