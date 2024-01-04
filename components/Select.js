// Select.js
import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { View } from "react-native-web";

const Select = ({
  value,
  onTypeChange,
  options = [],
  placeholder,
  rightIconName,
  style,
}) => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <Dropdown
      style={[style, styles.dropdown, isFocus && { borderColor: "#808080" }]}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      data={options}
      search={false}
      maxHeight={300}
      activeColor={"#eee"}
      fontFamily={"RobotoLight"}
      labelField="label"
      valueField="value"
      itemContainerStyle={styles.containerStyle}
      itemTextStyle={styles.textStyle}
      renderRightIcon={() => (
        <Image
          style={[styles.icon, isFocus && { transform: "rotate(180deg)" }]}
          source={require(`../assets/${rightIconName}`)}
        />
      )}
      value={value}
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
    width: 16,
    height: 16,
  },
  label: {
    display: "none",
  },
  placeholderStyle: {
    fontSize: 14,
    userSelect: "none",
    marginStart: 6,
    fontFamily: "RobotoRegular",
  },
  containerStyle: {
    marginTop: 6,
    borderRadius: 4,
    borderColor: "#808080",
  },
  textStyle: {
    fontSize: 14,
  },
  selectedTextStyle: {
    fontSize: 14,
    marginStart: 6,
  },
});

export default Select;
