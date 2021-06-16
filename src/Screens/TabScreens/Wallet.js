import React, { useState, useEffect, useContext } from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  Platform,
  Alert,
  BackHandler,
  UIManager,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import { Background } from "../../StyleSheet/Background";
import WalletViewSC from "../WalletView";
import getUsd from "../../Api/getUsd";
import * as GS from "../../StyleSheet/GeneralStyles";
import Colors from "../../StyleSheet/Colors";
import { AuthContext } from "../../Components/AuthProvider";
import Ionicons from "react-native-vector-icons/Ionicons";

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

export const WalletScreen = ({ route, navigation }) => {

  useEffect(() => {
    const backAction = () => {
      Alert.alert("Hold on!", "Are you sure you want to Exit?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel",
        },
        { text: "YES", onPress: () => BackHandler.exitApp() },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  const [refreshing, setRefreshing] = React.useState(false);
  const [usd, setUsd] = useState(getUsd._W);
  const { appData, appendData } = useContext(AuthContext);

  console.log("+_+_+_+_+_+_+_+_+_", appData);
  appendData(appData.address, appData.privateKey, appData.password);
  if (Platform.OS === "android") {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  return (
    <>
      <Background>
        <ScrollView
          style={{ flex: 1 }}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
        >
          <View style={[
            GS.Axis("100%", "100%"),
          ]}>
            <View style={[
              GS.Axis("100%", 200),
              GS.Radius(0, 0, 70, 60),
              GS.Colour(null, Colors.dark),
            ]}>
              <Image style={[
                GS.Axis(60, 60),
                GS.Align(null, null, "center", null),
                GS.Margin("6%", "0%", "0%", "0%", ""),
              ]} source={require("../../Assets/CryptoLogo.png")} />
              <Text style={[
                GS.font(18, Colors.white),
                GS.Align(null, null, "center", null),
                { fontWeight: null },
              ]}>Total Crypto Assets</Text>
              <View style={[
                GS.Justify("center", null, null),
                GS.Align("center", null, null, null),
                GS.Flex(1, "row"),
              ]}>
                <Text style={[
                  GS.font(14, Colors.white),
                ]}>
                  = {isNaN(usd * appData.balance) ? "0" : usd * appData.balance ? (usd * appData.balance).toFixed(2) : usd * appData.balance} USD
                </Text>
              </View>
            </View>
            <WalletViewSC />
          </View>
        </ScrollView>
        <View style={[
          GS.SP(null, 0, 0, 0),
          GS.Axis("100%", 50),
          GS.Positions(null, "relative"),
          GS.Colour(null, Colors.MyAppPrimaryColor, null),
          GS.Radius(30, 30, null, null),
        ]}>
        </View>
      </Background>
    </>
  );
};

