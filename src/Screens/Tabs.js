import React, { useContext, useEffect } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { WalletScreen } from "./TabScreens/Wallet";
import { TransactionScreen } from "./TabScreens/Transaction";
import { SettingScreen } from "./TabScreens/Setting";
import Colors from "../StyleSheet/Colors";
import { AuthContext } from "../Components/AuthProvider";
import * as Ngrok from "../StyleSheet/Ngrok";
import axios from "axios";
import WalletViewSC from "./WalletView";
import { Image, Text, TouchableOpacity } from "react-native";
import * as GS from "../StyleSheet/GeneralStyles";

const Tab = createMaterialTopTabNavigator();


function MyTabs({ navigation }) {

  const { appData, data } = useContext(AuthContext);

  let myURL = (Ngrok.Url + "/getAccountBalance/" + appData.address).toString();
  axios.get(myURL)
    .then(function(response) {
      data({
        balance: response.data,
      });
      appData["balance"] = response.data;
    })
    .catch(err => {
      console.log("Err function is working in Wallet View Screen", err);
    });

  return (
    <Tab.Navigator
      lazy={true}
      optimizationsEnabled={true}
      initialRouteName="Wallet"
      tabBarOptions={{
        indicatorStyle: {
          height: null,
          top: 0,
          backgroundColor: Colors.MyAppPrimaryColor,
          borderBottomColor: Colors.white,
          borderBottomWidth: 3,
        },
        activeTintColor: Colors.lightdark,
        inactiveTintColor: Colors.white,
        labelStyle: { fontSize: 12 },
        style: { backgroundColor: Colors.MyAppPrimaryColor },
      }}
    >
      <Tab.Screen name="Wallet" component={WalletScreen} options={{ tabBarLabel: "Wallet" }} />
      <Tab.Screen name="Transaction" component={TransactionScreen} />
      <Tab.Screen name="Setting" component={SettingScreen} />
    </Tab.Navigator>
  );
}

export default MyTabs;
