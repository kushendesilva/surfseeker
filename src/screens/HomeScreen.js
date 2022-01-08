import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";

import {
  Icon,
  Text,
  BottomNavigation,
  BottomNavigationTab,
  Layout,
  Button,
} from "@ui-kitten/components";
import { Searchbar } from "react-native-paper";
import { collection, getDocs } from "firebase/firestore/lite";

import { signOut } from "firebase/auth";
import { auth, db, Colors } from "../config";
import { userData } from "../config/database";
import { View, CityCard, BeachCard, AccountCard } from "../components";
import AppRenderIf from "../config/AppRenderIf";

export const HomeScreen = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleLogout = () => {
    signOut(auth).catch((error) => console.log("Error logging out: ", error));
  };

  const [beaches, setBeaches] = useState([]);
  const beachesCollectionRef = collection(db, "beaches");

  useEffect(() => {
    const getBeaches = async () => {
      const data = await getDocs(beachesCollectionRef);
      setBeaches(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getBeaches();
  }, []);

  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  const HomeIcon = (props) => <Icon {...props} name="home-outline" />;
  const AccountIcon = (props) => <Icon {...props} name="person-outline" />;

  return (
    <View isSafe style={{ flex: 1 }}>
      {AppRenderIf(
        selectedIndex == 0,
        <Layout style={{ flex: 1 }}>
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
          <FlatList
            data={beaches}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => (
              <BeachCard
                beach={item.beach}
                city={item.city}
                distance={item.distance}
                price={item.price}
                rating={item.rating}
              />
            )}
          />
          <FlatList
            data={beaches}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => (
              <CityCard city={item.city} district={item.district} />
            )}
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
                  appearance="ghost"
                >
                  See All
                </Button>
              </Layout>
            }
          />
        </Layout>
      )}
      {AppRenderIf(
        selectedIndex == 1,
        <Layout style={{ flex: 1 }}>
          <AccountCard
            onPress={handleLogout}
            name={userData.name}
            email={userData.email}
          />
        </Layout>
      )}
      <BottomNavigation
        style={{ paddingVertical: "2.5%" }}
        selectedIndex={selectedIndex}
        onSelect={(index) => setSelectedIndex(index)}
      >
        <BottomNavigationTab icon={HomeIcon} title="HOME" />
        <BottomNavigationTab icon={AccountIcon} title="ACCOUNT" />
      </BottomNavigation>
    </View>
  );
};

const styles = StyleSheet.create({
  accounttop: {
    backgroundColor: Colors.blue,
    borderRadius: 10,
    margin: "2%",
    padding: "2%",
    alignItems: "center",
  },
  accountMiddle: {
    padding: 20,
  },
  accountMiddleDetail: {
    marginTop: 20,
    marginLeft: 50,
    marginRight: 50,
    borderBottomWidth: 1,
    fontWeight: "bold",
  },
  accountBottom: {
    marginTop: 30,
    marginLeft: 20,
    fontWeight: "bold",
  },
  buttonContainer: {
    width: "18%",
    height: 30,
    marginLeft: "40%",
  },
  title: {
    marginTop: 20,
    marginLeft: 10,
  },
  fab: {
    position: "absolute",
    right: 10,
    top: 10,
    backgroundColor: "white",
  },
  ReportCards: {
    flex: 1,
    display: "flex",
    marginTop: "2%",
    marginHorizontal: "2%",
  },
});
