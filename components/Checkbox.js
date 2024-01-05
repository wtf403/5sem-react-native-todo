// Checkbox.js
import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Image } from "expo-image";

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
    width: 14,
    height: 14,
  },
});

export default Checkbox;
