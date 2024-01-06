// App.js
import React, { useState, useEffect, useCallback } from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import Collapsible from "react-native-collapsible";
import "@expo/match-media";
import Checkbox from "./components/Checkbox";
import { EventProvider } from "react-native-outside-press";
import OutsidePressHandler from "react-native-outside-press";
import Select from "./components/Select";
import Field from "./components/Field";
import DateTimeModal from "./components/DateTimeModal";
import dayjs from "dayjs";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Constants from "expo-constants";

SplashScreen.preventAutoHideAsync();

const App = () => {
  const isWeb = Constants.platform.web;
  const statusBarHeight = Constants.statusBarHeight;

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
      name: "blank",
      date: "12.01.2021",
      time: "00:00",
      duration: 0,
      type: "blank",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      done: false,
      favorite: false,
      blank: true,
    },
    {
      name: "Task 1",
      date: "12.12.2025",
      time: "10:50",
      duration: 20,
      type: "Work",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      done: true,
      favorite: false,
    },
    {
      name: "Task 2",
      date: "12.12.2025",
      time: "00:20",
      duration: 120,
      type: "Work",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      done: false,
      favorite: false,
    },
    {
      name: "Task name",
      date: "12.12.2023",
      time: "15:15",
      duration: 60,
      type: "Work",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      done: false,
      favorite: false,
    },
  ]);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskType, setTaskType] = useState("");
  const [taskDuration, setTaskDuration] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskTime, setTaskTime] = useState("");

  const handleAddTask = () => {
    if (required) {
      return;
    }

    const newTask = {
      name: taskTitle,
      description: taskDescription,
      date: taskDate,
      time: taskTime,
      duration: parseInt(taskDuration),
      type: taskType,
      done: false,
      favorite: false,
    };

    setTasks([...tasks, newTask]);

    setTaskTitle("");
    setTaskDescription("");
    setTaskDuration("");
    setTaskType("");
    setTaskDate("");
    setTaskTime("");
  };

  const types = [
    { label: "Work", value: "work" },
    { label: "Education", value: "education" },
    { label: "Sport", value: "sport" },
    { label: "Other", value: "other" },
  ];

  const sortTypes = [
    { label: "Date", value: "date" },
    { label: "Duration", value: "duration" },
    { label: "Type", value: "type" },
  ];

  const [sortingValue, setSortingValue] = useState("date");
  const [searchValue, setSearchValue] = useState(null);
  const [filterValue, setFilterValue] = useState("all");

  const [chosenTasks, setChosenTasks] = useState([...tasks]);

  useEffect(() => {
    let tasksCopy = [...tasks];

    if (filterValue === "todo") {
      tasksCopy = tasksCopy.filter((item) => !item.done || item.blank);
    } else if (filterValue === "done") {
      tasksCopy = tasksCopy.filter((item) => item.done || item.blank);
    } else if (filterValue === "favorite") {
      tasksCopy = tasksCopy.filter((item) => item.favorite || item.blank);
    } else if (filterValue === "overdue") {
      tasksCopy = tasksCopy.filter((item) => {
        const dateWithDuration = dayjs(item.date + " " + item.time).add(
          item.duration,
          "minute"
        );
        return dayjs(dateWithDuration).isBefore(dayjs()) || item.blank;
      });
    }

    if (searchValue) {
      tasksCopy = tasksCopy.filter((item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    if (sortingValue === "date") {
      tasksCopy = tasksCopy.sort((a, b) => {
        if (dayjs(a.date + a.time).isBefore(dayjs(b.date + b.time))) {
          return -1;
        } else if (dayjs(a.date + a.time).isAfter(dayjs(b.date + b.time))) {
          return 1;
        } else {
          return 0;
        }
      });
    } else if (sortingValue === "duration") {
      tasksCopy = tasksCopy.sort((a, b) => {
        if (dayjs(a.duration).isBefore(dayjs(b.duration))) {
          return -1;
        } else if (dayjs(a.duration).isAfter(dayjs(b.duration))) {
          return 1;
        } else {
          return 0;
        }
      });
    } else if (sortingValue === "type") {
      tasksCopy = tasksCopy.sort((a, b) => {
        if (a.type < b.type) {
          return -1;
        } else if (a.type > b.type) {
          return 1;
        } else {
          return 0;
        }
      });
    }

    setChosenTasks(tasksCopy);
  }, [filterValue, searchValue, sortingValue, tasks]);

  const [isTimeModalOpen, toggleTimeModal] = useState(false);
  const [isDateModalOpen, toggleDateModal] = useState(false);

  const [modalTime, setModalTime] = useState(dayjs());
  const [modalDate, setModalDate] = useState(dayjs());

  const handleAddTime = useCallback(() => {
    setTaskTime(dayjs(modalTime).format("HH:mm"));
    toggleTimeModal(false);
  }, [modalTime]);

  const handleAddDate = useCallback(() => {
    setTaskDate(dayjs(modalDate).format("DD.MM.YYYY"));
    toggleDateModal(false);
  }, [modalDate]);

  const [activeActionsModal, setActiveActionsModal] = useState(null);
  const [collapsedItem, setCollapsedItem] = useState(null);

  const handleDeleteTask = (item) => {
    let taskCopy = [...tasks];
    const index = taskCopy.findIndex((task) => task === item);
    taskCopy.splice(index, 1);
    setTasks(taskCopy);
    setActiveActionsModal(null);
  };

  const handleToggleFavorite = (item) => {
    let taskCopy = [...tasks];
    const index = taskCopy.findIndex((task) => task === item);
    taskCopy[index].favorite = !taskCopy[index].favorite;
    setTasks(taskCopy);
    setActiveActionsModal(null);
  };

  const handleCheckTask = (item) => {
    let taskCopy = [...tasks];
    const index = taskCopy.findIndex((task) => task === item);
    taskCopy[index].done = !item.done;
    setTasks(taskCopy);
  };

  const required = !taskTitle || !taskDate || !taskTime;

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <EventProvider>
      <Image
        style={[
          {
            height: 10,
            position: "absolute",
            top: statusBarHeight,
            left: 0,
            width: "100%",
            zIndex: 9999,
          },
          isWeb && { display: "none" },
        ]}
        source={require("./assets/fade-white.svg")}
      />
      <ScrollView fadingEdgeLength={32} style={{ marginTop: statusBarHeight }}>
        <View style={styles.container} onLayout={onLayoutRootView}>
          <View style={styles.header}>
            <Text style={styles.h1}>Notes</Text>
            <Text style={styles.subheader}>{dayjs().format("DD.MM.YYYY")}</Text>
          </View>
          <View style={styles.addTaskForm}>
            <Field label="Title" isRequired={true}>
              <TextInput
                value={taskTitle}
                onChangeText={(text) => setTaskTitle(text)}
                style={styles.input}
              />
            </Field>

            <Field label="Description" isRequired={false}>
              <TextInput
                multiline={true}
                numberOfLines={8}
                style={styles.textarea}
                value={taskDescription}
                onChangeText={(newText) => setTaskDescription(newText)}
              />
            </Field>

            <Field label="Date & Time" isRequired={true}>
              <View style={styles.dateTimePicker}>
                <Text style={styles.dateTimePickerText}>
                  {taskDate !== "" ? taskDate : "dd.mm.yyyy"}{" "}
                  {taskTime !== "" ? taskTime : "hh:mm"}
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
            </Field>

            <View style={styles.topFormRow}>
              <Field
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
              </Field>

              <Field
                style={styles.taskTypeInput}
                label="Type"
                isRequired={false}
              >
                <Select
                  value={taskType}
                  onTypeChange={setTaskType}
                  style={styles.taskTypePicker}
                  options={types}
                  placeholder="Select task"
                  rightIconName={"arrow-icon.svg"}
                />
              </Field>
            </View>

            <TouchableOpacity
              style={[
                styles.button,
                required && {
                  backgroundColor: "whitesmoke",
                  borderColor: "#eee",
                },
              ]}
              disabled={!!required}
              onPress={handleAddTask}
            >
              <Text style={[styles.buttonText, required && { color: "#ccc" }]}>
                Add task
              </Text>
            </TouchableOpacity>
          </View>

          <View style={filterStyles.container}>
            <View style={filterStyles.search}>
              <TextInput
                value={searchValue}
                onChangeText={(text) => setSearchValue(text)}
                style={filterStyles.searchInput}
                placeholder="Search"
                placeholderTextColor={"#808080"}
              />
              <Image
                style={filterStyles.searchIcon}
                source={require("./assets/search-icon.svg")}
              />
              <View
                style={[
                  !!searchValue ? null : { display: "none" },
                  filterStyles.crossIcon,
                ]}
              >
                <TouchableOpacity onPress={() => setSearchValue("")}>
                  <Image
                    style={[{ width: 16, height: 16 }]}
                    source={require("./assets/cross-icon.svg")}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={filterStyles.sortingContainer}>
              <Select
                style={filterStyles.sorting}
                options={sortTypes}
                onTypeChange={setSortingValue}
                value={sortingValue}
                rightIconName={"sort-icon.svg"}
                placeholder={sortingValue}
              />
            </View>

            <ScrollView
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              horizontal={true}
            >
              <View style={filterStyles.filterContainer}>
                <TouchableOpacity
                  style={[
                    filterValue === "all" && { backgroundColor: "#eee" },
                    filterStyles.filterButton,
                  ]}
                  onPress={() => setFilterValue("all")}
                >
                  <Image
                    style={{ width: 16, height: 16 }}
                    source={require("./assets/all-icon.svg")}
                  />
                  <Text
                    style={[
                      { color: "#808080" },
                      filterValue === "all" && { color: "#000" },
                    ]}
                  >
                    All
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    filterValue === "todo" && { backgroundColor: "#eee" },
                    filterStyles.filterButton,
                  ]}
                  onPress={() => setFilterValue("todo")}
                >
                  <Image
                    style={{ width: 16, height: 16 }}
                    source={require("./assets/todo-icon.svg")}
                  />
                  <Text
                    style={[
                      { color: "#808080" },
                      filterValue === "todo" && { color: "#000" },
                    ]}
                  >
                    TODO
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    filterValue === "done" && { backgroundColor: "#eee" },
                    filterStyles.filterButton,
                  ]}
                  onPress={() => setFilterValue("done")}
                >
                  <Image
                    style={{ width: 16, height: 16 }}
                    source={require("./assets/done-icon.svg")}
                  />
                  <Text
                    style={[
                      { color: "#808080" },
                      filterValue === "done" && { color: "#000" },
                    ]}
                  >
                    Done
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    filterValue === "favorite" && {
                      backgroundColor: "#eee",
                    },
                    filterStyles.filterButton,
                  ]}
                  onPress={() => setFilterValue("favorite")}
                >
                  <Image
                    style={{ width: 16, height: 16 }}
                    source={require("./assets/star-icon.svg")}
                  />
                  <Text
                    style={[
                      { color: "#808080" },
                      filterValue === "favorite" && { color: "#000" },
                    ]}
                  >
                    Favorite
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    filterValue === "overdue" && { backgroundColor: "#eee" },
                    filterStyles.filterButton,
                  ]}
                  onPress={() => setFilterValue("overdue")}
                >
                  <Image
                    style={{ width: 16, height: 16 }}
                    source={require("./assets/overdue-icon.svg")}
                  />
                  <Text
                    style={[
                      { color: "#808080" },
                      filterValue === "overdue" && { color: "#000" },
                    ]}
                  >
                    Overdue
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>

          <View style={taskStyles.list}>
            {chosenTasks.map((item, i, arr) => (
              <View
                key="item.date + item.time + item.name"
                style={[
                  i !== 0 && { zIndex: `${arr.length - i}` },
                  i === 0 && {
                    opacity: 0,
                    visibility: "hidden",
                    zIndex: -100,
                    height: 0,
                  },
                ]}
              >
                <View style={taskStyles.item}>
                  <View style={taskStyles.leftButtons}>
                    <Checkbox
                      checked={item?.done}
                      onToggleChecked={() => handleCheckTask(item)}
                      style={styles.checkbox}
                    />
                    <TouchableOpacity
                      onPress={() =>
                        setCollapsedItem(!!collapsedItem ? null : item)
                      }
                    >
                      <Image
                        style={[
                          { width: 16, height: 16 },
                          !item.description && { display: "none" },
                          collapsedItem === item && {
                            transform: "rotate(180deg)",
                          },
                        ]}
                        source={require("./assets/arrow-icon.svg")}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={taskStyles.container}>
                    <ScrollView
                      horizontal={true}
                      showsHorizontalScrollIndicator={false}
                      contentContainerStyle={taskStyles.topRow}
                    >
                      <Text
                        style={[
                          taskStyles.label,
                          !item?.date && { display: "none" },
                        ]}
                      >
                        {item?.date ?? "–"}
                      </Text>
                      <Text
                        style={[
                          taskStyles.label,
                          !item?.time && { display: "none" },
                        ]}
                      >
                        {item?.time ?? "–"}
                      </Text>
                      <Text
                        style={[
                          taskStyles.label,
                          !item?.type && { display: "none" },
                        ]}
                      >
                        {item?.type ?? "–"}
                      </Text>
                      <Text
                        style={[
                          taskStyles.label,
                          !item?.duration && { display: "none" },
                        ]}
                      >
                        {item?.duration ?? "–"} minutes
                      </Text>
                      <View
                        style={[
                          {
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 2,
                          },
                          !item?.favorite && { display: "none" },
                        ]}
                      >
                        <Image
                          source={require("./assets/star-icon.svg")}
                          style={{ width: 12, height: 12 }}
                        />
                        <Text style={[taskStyles.label, { color: "#808080" }]}>
                          favorite
                        </Text>
                      </View>
                    </ScrollView>
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

                    <OutsidePressHandler
                      disabled={!activeActionsModal}
                      onOutsidePress={() => setActiveActionsModal(null)}
                    >
                      <View
                        style={[
                          activeActionsModal === item
                            ? null
                            : { display: "none" },
                          taskStyles.actionsModal,
                        ]}
                      >
                        <TouchableOpacity
                          onPress={() => handleToggleFavorite(item)}
                          style={taskStyles.actionsModalItem}
                        >
                          <Image
                            style={{ width: 20, height: 20 }}
                            source={require("./assets/star-icon.svg")}
                          />
                          <Text>
                            {item.favorite
                              ? "Remove from favorite"
                              : "Add to favorite"}
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() => handleDeleteTask(item)}
                          style={taskStyles.actionsModalItem}
                        >
                          <Image
                            style={{ width: 20, height: 20 }}
                            source={require("./assets/delete-icon.svg")}
                          />
                          <Text>Delete</Text>
                        </TouchableOpacity>
                      </View>
                    </OutsidePressHandler>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>

        <DateTimeModal
          visible={isDateModalOpen}
          dateTime={modalDate}
          onDateTimeChange={setModalDate}
          onClose={() => toggleDateModal(false)}
          onSubmit={handleAddDate}
          style={[isDateModalOpen ? null : { display: "none" }]}
          type={"date"}
        />

        <DateTimeModal
          visible={isTimeModalOpen}
          dateTime={modalTime}
          onDateTimeChange={setModalTime}
          onClose={() => toggleTimeModal(false)}
          onSubmit={handleAddTime}
          style={[isTimeModalOpen ? null : { display: "none" }]}
          type={"time"}
        />
      </ScrollView>
    </EventProvider>
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

const styles = StyleSheet.create({
  durationPicker: {
    backgroundColor: "blue",
    width: 200,
    width: "100%",
    height: 40,
  },
  container: {
    flex: 1,
    maxWidth: 800,
    marginHorizontal: "auto",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12,
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
    marginBottom: 64,
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
  checkbox: {
    width: 16,
    height: 16,
  },

  ...buttonStyles,
  ...inputStyles,
});

const filterStyles = StyleSheet.create({
  container: {
    gap: 12,
    marginBottom: 4,
  },
  sort: {},
  search: {
    position: "relative",
    paddingHorizontal: 14,
  },
  searchInput: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    paddingHorizontal: 40,
    paddingVertical: 12,
  },
  searchIcon: {
    width: 16,
    height: 16,
    position: "absolute",
    top: "30%",
    left: 26,
  },
  crossIcon: {
    position: "absolute",
    width: 8,
    height: 8,
    transform: [{ translateY: -8 }],
    top: "50%",
    right: 30,
  },
  bottomRow: {
    flexDirection: "row",
    flex: 1,
  },
  filterContainer: {
    flexDirection: "row",
    paddingHorizontal: 14,
    gap: 8,
  },
  filterButton: {
    flexDirection: "row",
    gap: 8,
    height: 28,
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
  },
  sortingContainer: {
    marginHorizontal: 14,
    height: 28,
  },
  sorting: {
    borderRadius: 6,
    width: "100%",
    backgroundColor: "#eee",
    height: 28,
  },
  sortingIcon: {
    width: 20,
    height: 20,
  },
});

const taskStyles = StyleSheet.create({
  list: {
    gap: 12,
    margin: 16,
    marginBottom: 100,
  },
  item: {
    minWidth: "80%",
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
    gap: 12,
  },
  label: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    color: "#808080",
    fontFamily: "RobotoRegular",
    fontSize: 12,
  },
  leftButtons: {
    alignItems: "center",
    height: 51,
    justifyContent: "space-between",
  },
  rightButtons: {
    height: 51,
    justifyContent: "center",
  },
  dotsIcon: {
    width: 20,
    height: 20,
  },
  actionsModalButton: {
    position: "relative",
  },
  title: {
    fontSize: 18,
    marginTop: 16,
    fontFamily: "RobotoMedium",
    color: "#808080",
  },
  description: {
    fontFamily: "RobotoRegular",
    color: "#808080",
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
    height: 90,
    transform: [{ translateX: -200 }, { translateY: 25 }],
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
    position: "absolute",
    top: 0,
    left: 0,
  },
});

export default App;
