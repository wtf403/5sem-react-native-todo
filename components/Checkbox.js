// Checkbox.js
import React, { useState } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";

const Checkbox = ({ checked, onToggleChecked }) => {
  return (
    <TouchableOpacity onPress={onToggleChecked}>
      <View style={[styles.container, checked && styles.checked]}>
        <Image
          source={require("../assets/checkmark-icon.svg")}
          style={[styles.icon, !checked && { display: "none" }]}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  checked: {
    backgroundColor: "#eee",
  },
  icon: {
    margin: "auto",
    width: 12,
    height: 12,
  },
});

export default Checkbox;
