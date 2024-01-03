// App.js
import React, { useState, useEffect, useCallback } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import Collapsible from "react-native-collapsible";
import Checkbox from "react-native-bouncy-checkbox";
import Select from "./components/Select";
import Filed from "./components/Field";
import dayjs from "dayjs";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [fontsLoaded, fontError] = useFonts({
    RobotoLight: require("./assets/fonts/Roboto-Light.ttf"),
    RobotoMedium: require("./assets/fonts/Roboto-Medium.ttf"),
    RobotoRegular: require("./assets/fonts/Roboto-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  const [tasks, setTasks] = useState([
    {
      name: "Task name",
      date: "12.12.2021",
      time: "11:15",
      duration: "120",
      type: "Work",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      done: false,
      favorite: true,
    },
  ]);

  const [taskTitle, settaskTitle] = useState(null);
  const [taskDescription, setTaskDescription] = useState(null);
  const [taskType, setTaskType] = useState(null);
  const [taskDuration, setTaskDuration] = useState(null);
  const [taskDate, setTaskDate] = useState(null);
  const [taskTime, setTaskTime] = useState(null);

  const handleAddTask = () => {
    const newTask = {
      name: taskTitle,
      description: taskDescription,
      date: taskDate,
      time: taskTime,
      duration: taskDuration,
      type: taskType,
      done: false,
      favorite: false,
    };

    console.log(newTask);

    setTasks([...tasks, newTask]);

    settaskTitle(null);
    setTaskDescription(null);
    setTaskDuration(null);
    setTaskType(null);
    setTaskDate(dayjs().format("DD.MM.YYYY"));
    setTaskTime(dayjs().format("DD.MM.YYYY"));
  };

  const types = [
    { label: "Work", value: "work" },
    { label: "Education", value: "education" },
    { label: "Sport", value: "sport" },
    { label: "Other", value: "other" },
  ];

  const [isTimeModalOpen, toggleTimeModal] = useState(false);
  const [isDateModalOpen, toggleDateModal] = useState(false);

  const [modalTime, setmodalTime] = useState("01.01.1999 00:00");
  const [modalDate, setModalDate] = useState(null);

  const [isItemDescriptionShown, toggleItemDescription] = useState(false);

  const handleAddTime = useCallback(() => {
    setTaskDuration(dayjs(modalTime).format("HH:mm"));
    toggleDurationModal(false);
  }, [modalTime]);

  const [activeActionsModal, setActiveActionsModal] = useState(null);
  const [collapsedItem, setCollapsedItem] = useState(null);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <View style={styles.header}>
          <Text style={styles.h1}>Notes</Text>
          <Text style={styles.subheader}>{dayjs().format("DD.MM.YYYY")}</Text>
        </View>
        <View style={styles.addTaskForm}>
          <Filed label="Title" isRequired={true}>
            <TextInput
              value={taskTitle}
              onChangeText={(text) => settaskTitle(text)}
              style={styles.input}
            />
          </Filed>

          <Filed label="Description" isRequired={false}>
            <TextInput
              multiline={true}
              numberOfLines={8}
              style={styles.textarea}
              value={taskDescription}
              onChangeText={(newText) => setTaskDescription(newText)}
            />
          </Filed>

          <Filed label="Date & Time" isRequired={false}>
            <View style={styles.dateTimePicker}>
              <Text style={styles.dateTimePickerText}>
                {taskDate ?? "dd.mm.yyyy"} {taskTime ?? "hh:hh"}
              </Text>
              <View style={styles.dateTimeButtons}>
                <TouchableOpacity
                  style={styles.dateTimeButton}
                  onPress={() => toggleDateModal(true)}
                >
                  <Text style={styles.dateTimeButtonText}>Date</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.dateTimeButton}
                  onPress={() => toggleTimeModal(true)}
                >
                  <Text style={styles.dateTimeButtonText}>Time</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Filed>

          <View style={styles.topFormRow}>
            <Filed
              style={styles.taskDurationInput}
              label="Duration"
              isRequired={false}
            >
              <TextInput
                value={taskDuration}
                onChangeText={(text) => setTaskDuration(text)}
                style={styles.input}
                placeholder="minutes"
                placeholderTextColor={"#808080"}
              />
            </Filed>

            <Filed style={styles.taskTypeInput} label="Type" isRequired={false}>
              <Select
                type={taskType}
                onTypeChange={setTaskType}
                style={styles.taskTypePicker}
                list={types}
                placeholder="Select task"
              />
            </Filed>
          </View>

          <TouchableOpacity style={styles.button} onPress={handleAddTask}>
            <Text style={styles.buttonText}>Add task</Text>
          </TouchableOpacity>
        </View>
        <View style={taskStyles.list}>
          {tasks.map((item, i, arr) => (
            <View style={{ zIndex: `${arr.length - i}` }}>
              <TouchableWithoutFeedback
                onPress={() => setActiveActionsModal(null)}
              >
                <View
                  style={[
                    activeActionsModal === item ? null : { display: "none" },
                    taskStyles.actionsModalPopover,
                  ]}
                ></View>
              </TouchableWithoutFeedback>

              <View style={taskStyles.item}>
                <View style={taskStyles.leftButtons}>
                  <Checkbox
                    iconStyle={{
                      borderColor: "#ccc",
                      borderRadius: 2,
                    }}
                    innerIconStyle={{
                      borderRadius: 2,
                    }}
                    textContainerStyle={{
                      marginLeft: 0,
                    }}
                    fillColor="#808080"
                    unfillColor="#ccccc"
                    onPress={(isChecked) => true}
                    size={16}
                  />
                  <TouchableOpacity
                    onPress={() =>
                      setCollapsedItem(!!collapsedItem ? null : item)
                    }
                  >
                    <Image
                      style={[
                        { width: 20, height: 20 },
                        collapsedItem === item && {
                          transform: "rotate(180deg)",
                        },
                      ]}
                      source={require("./assets/arrow-icon.svg")}
                    />
                  </TouchableOpacity>
                </View>
                <View style={taskStyles.container}>
                  <View style={taskStyles.topRow}>
                    <Text style={taskStyles.label}>
                      {item?.date ?? "dd.mm.yyyy"} {item?.time ?? "hh:mm"}
                    </Text>
                    <Text style={taskStyles.label}>{item?.type ?? "–"}</Text>
                  </View>
                  <View>
                    <Text style={taskStyles.title}>{item?.name ?? "–"}</Text>
                  </View>
                  <Collapsible collapsed={!(collapsedItem === item)}>
                    <Text style={taskStyles.description}>
                      {item?.description ?? "–"}
                    </Text>
                  </Collapsible>
                </View>
                <View style={taskStyles.rightButtons}>
                  <TouchableOpacity
                    style={taskStyles.actionsModalButton}
                    onPress={() => setActiveActionsModal(item)}
                  >
                    <Image
                      style={taskStyles.dotsIcon}
                      source={require("./assets/dots-icon.svg")}
                    />
                  </TouchableOpacity>

                  <View
                    style={[
                      activeActionsModal === item ? null : { display: "none" },
                      taskStyles.actionsModal,
                    ]}
                  >
                    <TouchableOpacity
                      onPress={() => null}
                      style={taskStyles.actionsModalItem}
                    >
                      <Image
                        style={{ width: 20, height: 20 }}
                        source={require("./assets/star-icon.svg")}
                      />
                      <Text>Add to favorite</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => null}
                      style={taskStyles.actionsModalItem}
                    >
                      <Image
                        style={{ width: 20, height: 20 }}
                        source={require("./assets/edit-icon.svg")}
                      />
                      <Text>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => null}
                      style={taskStyles.actionsModalItem}
                    >
                      <Image
                        style={{ width: 20, height: 20 }}
                        source={require("./assets/delete-icon.svg")}
                      />
                      <Text>Delete</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>
    </>
  );
};

export const buttonStyles = StyleSheet.create({
  button: {
    paddingHorizontal: 16,
    height: 40,
    justifyContent: "center",
    backgroundColor: "#eeeeee",
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#808080",
    textTransform: "none",
  },
  buttonText: {
    color: "black",
    textAlign: "center",
  },
});

export const inputStyles = StyleSheet.create({
  input: {
    minHeight: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 6,
    padding: 6,
  },
  inputText: {
    color: "gray",
  },
  textarea: {
    minHeight: 120,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 6,
    padding: 6,
    paddingTop: 12,
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
    fontFamily: "RobotoLight",
  },
  subheader: {
    fontSize: 16,
    fontFamily: "RobotoLight",
  },
  addTaskForm: {
    margin: 16,
    gap: 16,
  },
  topFormRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
  },
  taskTypeInput: {
    flex: 8,
  },
  taskTypePicker: {
    borderColor: "red",
    borderRadius: 6,
  },
  taskDurationInput: {
    flex: 4,
  },
  dateTimePicker: {
    alignItems: "center",
    flexDirection: "row",
    minHeight: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 6,
    padding: 8,
  },
  dateTimePickerText: {
    color: "#808080",
  },
  dateTimeButtons: {
    flexDirection: "row",
    gap: 6,
    marginLeft: "auto",
  },
  dateTimeButton: {
    ...buttonStyles.button,
    backgroundColor: "#eee",
  },
  dateTimeButtonText: {
    color: "black",
  },

  ...buttonStyles,
  ...inputStyles,
  ...modalStyles,
});

const taskFilters = StyleSheet.create({
  search: {},
  sort: {},
  filter: {},
});

const taskStyles = StyleSheet.create({
  list: {
    gap: 12,
    margin: 16,
  },
  item: {
    borderWidth: 1,
    justifyContent: "space-between",
    backgroundColor: "white",
    borderColor: "#ccc",
    padding: 12,
    gap: 20,
    borderRadius: 6,
    flexDirection: "row",
  },
  container: {
    flex: 1,
    height: "fit-content",
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    height: 16,
    gap: 20,
  },
  label: {
    color: "#808080",
    fontFamily: "RobotoRegular",
    fontSize: 14,
  },
  leftButtons: {
    alignItems: "center",
    height: 53,
    justifyContent: "space-between",
  },
  rightButtons: {
    height: 53,
    justifyContent: "center",
  },
  dotsIcon: {
    transform: "translateY(20%)",
    width: 20,
    height: 20,
  },
  actionsModalButton: {
    position: "relative",
  },
  title: {
    fontSize: 18,
    marginTop: 18,
    fontFamily: "RobotoMedium",
    color: "#808080",
  },
  description: {
    marginTop: 8,
    fontSize: 16,
  },
  actionsModal: {
    zIndex: 999,
    position: "absolute",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#808080",
    padding: 8,
    borderRadius: 6,
    width: 200,
    transform: "translate(-100%, 50%)",
    left: 15,
    top: -20,
  },
  actionsModalItem: {
    backgroundColor: "white",
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  actionsModalPopover: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
});

export default App;
