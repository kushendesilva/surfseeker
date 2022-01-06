import React from "react";
import { StyleSheet, FlatList } from "react-native";

import { Searchbar } from "react-native-paper";
import { Button, Icon, Text, Layout } from "@ui-kitten/components";

import { signOut } from "firebase/auth";
import { View, CityCard, BeachCard } from "../components";
import { auth, Colors } from "../config";
import { cityList } from "../config/database";

export const HomeScreen = () => {
  const handleLogout = () => {
    signOut(auth).catch((error) => console.log("Error logging out: ", error));
  };

  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  const LogoutIcon = (props) => <Icon {...props} name="log-out-outline" />;
  return (
    <View isSafe style={styles.container}>
      <Searchbar
        selectionColor={Colors.blue}
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={{
          marginTop: "1%",
          marginBottom: "3%",
          marginHorizontal: "3%",
          borderRadius: 10,
          padding: "1%",
        }}
      />
      <BeachCard />
      <FlatList
        ListHeaderComponent={
          <Layout
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginLeft: "3%",
            }}
          >
            <Text category="h6" style={{ fontWeight: "bold" }}>
              Top Cities
            </Text>
            <Button
              style={{
                alignSelf: "center",
              }}
              status="info"
              appearance="ghost"
            >
              See All
            </Button>
          </Layout>
        }
        data={cityList}
        keyExtractor={(city) => city.id.toString()}
        renderItem={({ item }) => (
          <>
            <CityCard city={item.city} district={item.district} />
          </>
        )}
        ListFooterComponent={
          <Button
            style={{
              backgroundColor: Colors.blue,
              alignSelf: "center",
            }}
            onPress={handleLogout}
            accessoryRight={LogoutIcon}
          >
            Logout
          </Button>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
