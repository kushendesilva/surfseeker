import React from "react";
import { StyleSheet, StatusBar } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Layout } from "@ui-kitten/components";

export const View = ({ isSafe, style, children }) => {
  const insets = useSafeAreaInsets();

  if (isSafe) {
    return (
      <Layout style={{ paddingTop: insets.top, ...style }}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        {children}
      </Layout>
    );
  }

  return <Layout style={StyleSheet.flatten(style)}>{children}</Layout>;
};
