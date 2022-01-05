import React from "react";
import { StyleSheet } from "react-native";
import { View } from "./View";
import { Spinner } from "@ui-kitten/components";

export const LoadingIndicator = () => {
  return (
    <View style={styles.container}>
      <Spinner status="info" size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
