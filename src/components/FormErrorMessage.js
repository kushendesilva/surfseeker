import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "@ui-kitten/components";

export const FormErrorMessage = ({ error, visible }) => {
  if (!error || !visible) {
    return null;
  }

  return (
    <Text style={styles.errorText} status="danger" category="label">
      {error}
    </Text>
  );
};

const styles = StyleSheet.create({
  errorText: {
    marginLeft: 15,
  },
});
