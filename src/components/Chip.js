import React from "react";
import { View } from "react-native";
import { Icon, Text } from "@ui-kitten/components";
import { Colors } from "../config";

export const Chip = ({
  name = "star-outline",
  title,
  sub,
  unitL = " ",
  unitR,
}) => (
  <View
    style={{
      flexDirection: "row",
      borderColor: Colors.mediumGray,
      borderWidth: 0.5,
      justifyContent: "center",
      alignItems: "center",
      padding: "5%",
      borderRadius: 10,
      margin: "2%",
    }}
  >
    <Icon
      style={{ width: 20, height: 20, marginHorizontal: "1%" }}
      fill={Colors.mediumGray}
      name={name}
    />
    <Text category="label">{title}:</Text>
    <Text category="s1" style={{ fontWeight: "bold" }}>
      {unitL}
      {sub}
      {unitR}
    </Text>
  </View>
);
