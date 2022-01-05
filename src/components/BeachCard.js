import React from "react";
import { View, StyleSheet } from "react-native";
import { Icon, Card, Text } from "@ui-kitten/components";
import { Chip, Caption } from "react-native-paper";

function AppStock(props) {
  const NewIcon = (props) => <Icon {...props} name="plus-outline" />;

  return (
    <Card
      status="success"
      style={{
        justifyContent: "center",
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
          }}
        >
          <Icon
            style={{ width: 30, height: 30 }}
            fill="black"
            name="cube-outline"
          />
          <Text style={styles.Text}>mdkmed</Text>

          <Icon
            style={{ width: 30, height: 30 }}
            fill="black"
            name="checkmark-circle-2-outline"
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginVertical: "5%",
          }}
        >
          <Chip style={{ marginRight: "3%" }}>
            <Caption style={{ fontSize: 8 }}>Stock: </Caption>
            250
          </Chip>
          <Chip>
            <Caption style={{ fontSize: 8 }}>Wholesale Price </Caption>
            Rs.250
          </Chip>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <Chip>
            <Caption style={{ fontSize: 8 }}>A Category</Caption> Rs.250
          </Chip>
          <Chip>
            <Caption style={{ fontSize: 8 }}>B Category</Caption> Rs.250
          </Chip>
          <Chip>
            <Caption style={{ fontSize: 8 }}>C Category</Caption> Rs.250
          </Chip>
        </View>
      </View>
    </Card>
  );
}

export default AppStock;

const styles = StyleSheet.create({
  Text: { fontSize: 16, marginHorizontal: "2%" },
});
