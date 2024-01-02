import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const FormField = ({ label, isRequired, children, style }) => {
  return (
    <View style={{ ...styles.fieldContainer, ...style }}>
      <View style={styles.label}>
        <Text style={styles.filedLabel}>{label}</Text>
        <Text style={styles.requiredAsterisk}>{isRequired ? "*" : null}</Text>
      </View>
      <View>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  fieldContainer: {
    marginBottom: 16,
    gap: 8,
  },
  filedLabel: {
    fontSize: 14,
    fontFamily: "RobotoMedium",
    color: "gray",
  },
  label: {
    flexDirection: "row",
    alignItems: "top",
    gap: 3,
  },
  requiredAsterisk: {
    color: "red",
    display: "",
  },
});

export default FormField;
