import React from "react";
import { View, StyleSheet } from "react-native";
import { Icon, Card, Text } from "@ui-kitten/components";
import { Colors } from "../config";
import { Chip } from "./Chip";
export const BeachCard = ({
  beach,
  city,
  distance,
  district,
  price,
  rating,
}) => (
  <Card
    status="primary"
    style={{
      marginHorizontal: "5%",
      marginVertical: "1%",
    }}
  >
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "3%",
        }}
      >
        <Icon
          style={{ width: 30, height: 30 }}
          fill={Colors.blue}
          name="pin-outline"
        />

        <Text style={styles.Text}>{beach}</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <View>
          <Chip title="Rating" sub={rating} unitR="/10" />
          <Chip
            title="Hourly Rate"
            unitL=" Rs."
            sub={price}
            name="credit-card-outline"
          />
        </View>
        <View>
          <Chip title="City" sub={city} name="compass-outline" />
          <Chip
            title="Distance"
            sub={distance}
            unitR=" KM"
            name="navigation-outline"
          />
        </View>
      </View>
    </View>
  </Card>
);

const styles = StyleSheet.create({
  Text: { fontSize: 16, marginHorizontal: "2%", fontWeight: "bold" },
  Chip: { margin: "3%" },
});
