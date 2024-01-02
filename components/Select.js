import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { View } from "react-native-web";

const Select = ({
  type,
  onTypeChange,
  list = [],
  placeholder = "Select item",
  style,
}) => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <Dropdown
      style={[style, styles.dropdown, isFocus && { borderColor: "#808080" }]}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      data={list}
      search={false}
      maxHeight={300}
      activeColor={"#eee"}
      fontFamily={"RobotoLight"}
      labelField="label"
      valueField="value"
      containerStyle={styles.containerStyle}
      placeholder={placeholder}
      renderRightIcon={() => (
        <View>
          <Image
            style={[styles.icon, isFocus && { transform: "rotate(180deg)" }]}
            source={require("../assets/arrow-icon.svg")}
          />
        </View>
      )}
      value={type}
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      onChange={(item) => {
        onTypeChange(item.value);
        setIsFocus(false);
      }}
      renderLeftIcon={() => null}
    />
  );
};

const styles = StyleSheet.create({
  dropdown: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 2,
  },
  icon: {
    marginRight: 5,
    width: 20,
    height: 20,
  },
  label: {
    display: "none",
  },
  placeholderStyle: {
    fontSize: 14,
    userSelect: "none",
    marginStart: 8,
    fontFamily: "RobotoRegular",
  },
  containerStyle: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#808080",
  },
  selectedTextStyle: {
    fontSize: 14,
    marginStart: 8,
  },
});

export default Select;
