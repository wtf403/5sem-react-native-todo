import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const FormField = ({ label, isRequired, children }) => {
  return (
    <View style={styles.fieldContainer}>
      <Text style={styles.filedLabel}>
        {label} {isRequired && <Text style={styles.requiredAsterisk}>*</Text>}
      </Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  fieldContainer: {
    marginBottom: 16,
    gap: 8,
  },
  filedLabel: {
    fontSize: 16,
    color: "gray",
    fontWeight: "bold",
  },
  requiredAsterisk: {
    color: "red",
  },
});

export default FormField;
