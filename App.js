import React, { useState, useEffect, useCallback } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  FlatList,
} from "react-native";
import DateTimePicker from "react-native-ui-datepicker";
import Select from "./components/Select.js";
import Filed from "./components/Field.js";
import dayjs from "dayjs";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      name: "work",
      duration: "2h",
      type: "Work",
      date: "12.12.2021",
    },
  ]);

  const [taskType, setTaskType] = useState(null);
  const [taskDuration, setTaskDuration] = useState(null);
  const [taskName, setTaskName] = useState(null);
  const [taskDateTime, setTaskDateTime] = useState(null);

  const handleAddTask = () => {
    const newTask = {
      type: taskType,
      duration: taskDuration,
      name: taskName,
      date: taskDateTime,
    };

    console.log(newTask);

    setTasks([...tasks, newTask]);
    setTaskType(null);
    setTaskDuration(null);
    setTaskName(null);
    setTaskDateTime(dayjs().format("DD.MM.YYYY"));
  };

  const types = [
    { label: "Work", value: "work" },
    { label: "Education", value: "education" },
    { label: "Sport", value: "sport" },
    { label: "Other", value: "other" },
  ];

  const [isDurationModalOpen, toggleDurationModal] = useState(false);
  const [isDateTimeModalOpen, toggleDateTimeModal] = useState(false);

  const [modalDuration, setModalDuration] = useState("01.01.1999 00:00");
  const [modalDateTime, setModalDateTime] = useState(null);

  const handleAddDuration = useCallback(() => {
    setTaskDuration(dayjs(modalDuration).format("HH:mm"));
    toggleDurationModal(false);
  }, [modalDuration]);

  const handleAddDateTime = useCallback(() => {
    setTaskDateTime(dayjs(taskDateTime).format("DD.MM.YYYY HH:mm"));
    toggleDateTimeModal(false);
  }, [taskDateTime]);

  const DurationPicker = React.memo(({ value, onChange }) => (
    <DateTimePicker
      value={value}
      onValueChange={onChange}
      mode={"time"}
      style={styles.durationPicker}
    />
  ));

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.h1}>TODO List</Text>
          <Text style={styles.subheader}>{dayjs().format("DD.MM.YYYY")}</Text>
        </View>
        <View style={styles.addTaskForm}>
          <Filed label="Task type" isRequired={true}>
            <Select
              type={taskType}
              onTypeChange={setTaskType}
              list={types}
              placeholder="Select task"
            />
          </Filed>

          <Filed label="Task duration" isRequired={true}>
            <TouchableOpacity
              style={styles.input}
              onPress={() => toggleDurationModal(true)}
            >
              <Text style={styles.inputText}>
                {!!taskDuration ? taskDuration : "Set duration"}
              </Text>
            </TouchableOpacity>
          </Filed>

          <Filed label="Choose date" isRequired={true}>
            <TouchableOpacity
              style={styles.input}
              onPress={() => toggleDateTimeModal(true)}
            >
              <Text style={styles.inputText}>
                {!!taskDateTime ? taskDateTime : "Choose date"}
              </Text>
            </TouchableOpacity>
          </Filed>

          <Filed label="Task name" isRequired={true}>
            <TextInput
              value={taskName}
              onChangeText={(text) => setTaskName(text)}
              style={styles.input}
              placeholder="Your text here"
            />
          </Filed>

          <TouchableOpacity style={styles.button} onPress={handleAddTask}>
            <Text style={styles.buttonText}>Add task</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={tasks}
          style={styles.tasksList}
          renderItem={({ item }) => (
            <View style={styles.tasksListItem}>
              <Text style={styles.item}>{item.type ?? "–"}</Text>
              <Text style={styles.item}>{item.duration ?? "–"}</Text>
              <Text style={styles.item}>{item.name ?? "–"}</Text>
              <Text style={styles.item}>{item.date ?? "–"}</Text>
            </View>
          )}
        />
        <View style={styles.listWrapper}></View>
      </View>

      {/* duration modal */}
      <Modal visible={isDurationModalOpen} transparent={true}>
        <View style={styles.modal}>
          <TouchableOpacity onPress={() => toggleDurationModal(false)}>
            <Text>Close</Text>
          </TouchableOpacity>

          <DurationPicker
            value={modalDuration}
            onChange={(value) => setModalDuration(value)}
          />

          <TouchableOpacity style={styles.button} onPress={handleAddDuration}>
            <Text style={styles.buttonText}>Set duration</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      {/* dateTime modal */}
      <Modal visible={isDateTimeModalOpen} transparent={true}>
        <View style={styles.modal}>
          <TouchableOpacity onPress={() => toggleDateTimeModal(false)}>
            <Text>Close</Text>
          </TouchableOpacity>

          <DateTimePicker
            value={taskDateTime}
            mode={"datetime"}
            onValueChange={(value) => setTaskDateTime(value)}
            style={styles.durationPicker}
            todayContainerStyle={{
              borderWidth: 1,
            }}
          />

          <TouchableOpacity style={styles.button} onPress={handleAddDateTime}>
            <Text style={styles.buttonText}>Set date and time</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </>
  );
};

export const buttonStyles = StyleSheet.create({
  button: {
    paddingHorizontal: 16,
    backgroundColor: "#1247fc",
    paddingVertical: 8,
    border: "1px solid #ccc",
    paddingVertical: 8,
    textTransform: "none",
  },
  buttonText: {
    color: "white",
  },
});

export const inputStyles = StyleSheet.create({
  input: {
    width: "100%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 8,
  },
  inputText: {
    color: "gray",
  },
});

export const modalStyles = StyleSheet.create({
  modal: {
    borderWidth: 1,
    backgroundColor: "white",
    margin: "auto",
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderColor: "#ccc",
    width: 200,
    width: "50%",
  },
  modalCloseBtn: {
    width: "20%",
  },
});

const styles = StyleSheet.create({
  durationModal: {
    backgroundColor: "red",
  },
  durationPicker: {
    backgroundColor: "blue",
    width: 200,
    width: "100%",
    height: 40,
  },
  container: {
    flex: 1,
    padding: 16,
    maxWidth: 800,
    marginHorizontal: "auto",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
  },
  h1: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subheader: {
    fontSize: 18,
    color: "gray",
  },
  addTaskForm: {
    margin: 16,
    gap: 16,
  },
  tasksList: {
    margin: 16,
    border: "1px solid #ccc",
  },
  tasksListItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexGrow: 1,
    padding: 16,
    marginBottom: 4,
    borderBottom: "1px solid #ccc",
    backgroundColor: "lightgray",
  },
  ...buttonStyles,
  ...inputStyles,
  ...modalStyles,
});

export default App;
