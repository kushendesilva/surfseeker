import React from "react";
import { Layout, Button, Icon, Card, Text } from "@ui-kitten/components";

export const AccountCard = ({ email, onPress, onEditPress }) => {
  const LogoutIcon = (props) => <Icon {...props} name="log-out-outline" />;
  const EditIcon = (props) => <Icon {...props} name="edit-2-outline" />;

  return (
    <Card status="basic" style={{ margin: "3%" }}>
      <Layout
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          style={{
            position: "absolute",
            right: 1,
            top: 1,
            borderRadius: 5,
          }}
          size="tiny"
          status="basic"
          onPress={onEditPress}
          accessoryRight={EditIcon}
        >
          Edit
        </Button>
        <Layout
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            backgroundColor: "#edf1f7",
            padding: "3%",
            marginBottom: "3%",
            borderRadius: 25,
            elevation: 2,
          }}
        >
          <Icon
            style={{ width: 40, height: 40 }}
            fill="#262e48"
            name="person-outline"
          />
        </Layout>
        <Text style={{ margin: "1%", fontWeight: "bold" }} category="h6">
          {email.charAt(0).toUpperCase() + email.slice(1)}
        </Text>
      </Layout>
      <Layout
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginTop: "2%",
        }}
      >
        <Button
          style={{
            alignSelf: "center",
            marginVertical: "3%",
            borderRadius: 5,
          }}
          status="basic"
          onPress={onPress}
          accessoryRight={LogoutIcon}
        >
          Logout
        </Button>
      </Layout>
    </Card>
  );
};
