import React from "react";
import { StyleSheet } from "react-native";
import { Card, Layout, Text, Avatar, Icon } from "@ui-kitten/components";
import { Colors } from "../config";

export const CityCard = ({ props, city, district }) => (
  <Card
    style={{
      borderRadius: 10,
      margin: "1%",
    }}
  >
    <Layout {...props}>
      <Layout
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Layout
          style={{ flexDirection: "row", justifyContent: "space-between" }}
        >
          <Avatar source={require("../../assets/splash.png")} size="large" />
          <Layout style={{ marginHorizontal: "2%", justifyContent: "center" }}>
            <Text category="h6">{city}</Text>
            <Text category="s1">{district}</Text>
          </Layout>
        </Layout>
        <Icon
          style={{ width: 30, height: 30 }}
          fill={Colors.blue}
          name="arrow-ios-forward-outline"
        />
      </Layout>
    </Layout>
  </Card>
);

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  footerControl: {
    marginHorizontal: 2,
  },
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
});
