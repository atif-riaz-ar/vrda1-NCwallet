import React, { useState, useEffect, useContext } from "react";
import { Text, View, LayoutAnimation, Platform, UIManager, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as GS from "../StyleSheet/GeneralStyles";
import * as  Colors from "../StyleSheet/Colors";
import USD from "../Api/USD";
import { AuthContext } from "../Components/AuthProvider";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";

const WalletViewSC = () => {
  const [expand, setExpand] = useState(false);
  const { appData } = useContext(AuthContext);

  const navigation = useNavigation();

  if (Platform.OS === "android") {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
  let changeLayout = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpand(!expand);
  };
  return (
    <>
      <View style={[
        GS.Flex(1, null),
        GS.Padding((Platform.OS === "ios") ? 20 : 0, 10, null, 10),
        GS.Justify("center", null, null),
      ]}>

        <View style={[
          GS.Colour(null, Colors.default.dark, null),
          GS.Margin("25%", "8%", "8%", "8%", ""),
          GS.Radius(17, 17, 17, 17),
        ]}>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={changeLayout}
            style={[
              GS.Axis("80%", 180),
              GS.Colour(null, Colors.default.dark, null),
              GS.Align(null, null, "center", null),
              GS.Radius(18, 18, 18, 18),
              GS.Margin("2%", "10%", "0%", "10%", ""),
              GS.Flex(1, "row"),
            ]}>

            <View style={[
              GS.Flex(1, "row"),
              { marginBottom: -5 },
            ]}>
              <Image source={require("../Assets/img.png")}
                     style={{ height: 45, width: 45, marginLeft: -20 }} />
              <View style={[
                GS.Flex(null, "column"),
                GS.Margin("3.5%", "0%", "0%", "0%", ""),
              ]}>
                <Text style={[
                  GS.font(16, Colors.default.white),
                ]}>
                  Ethereum
                </Text>
                <View style={[
                  GS.Flex(null, "row"),
                  GS.Margin("5%", "0%", "0%", "0%", ""),
                ]}>
                  <Text style={[
                    GS.font(14, Colors.default.white),
                    GS.Padding(null, 4, null, null),
                    { fontWeight: null },
                  ]}>
                    1 ETH =
                  </Text>
                  <USD />
                </View>
                <Text style={[
                  GS.font(16, Colors.default.white),
                  GS.Margin("3%", "0%", "0%", "0%", ""),
                ]}>
                  Market Value
                </Text>
                <Text style={[
                  GS.font(15, Colors.default.white),
                  { fontWeight: null },
                ]}>
                  {appData.balance ? (appData.balance.toFixed(4)) : appData.balance} ETH
                </Text>
              </View>
              {
                expand ? (
                  <View style={{ marginLeft: "30%", alignSelf: "flex-start",marginTop:"3%" }}>
                    <Entypo name="chevron-thin-up" color="white" size={20}/>
                  </View>
                ) : (
                  <View style={{ marginLeft: "30%", alignSelf: "flex-start",marginTop:"3%" }}>
                    <Entypo name="chevron-thin-down" color="white" size={20}/>
                  </View>
                )
              }
            </View>
          </TouchableOpacity>
          <View style={{ height: expand ? null : 0, overflow: "hidden" }}>
            <View style={[
              GS.Flex(1, "row"),
              GS.Justify("space-between", null, null),
              GS.Margin("15%", "15%", "15%", "15%", ""),
            ]}>
              <TouchableOpacity onPress={() => navigation.navigate("Send")}>
                <Text style={[
                  GS.BorderWidth(null, null, 4, null),
                  GS.Radius(null, null, 4, 4),
                  GS.Padding(null, 10, null, 10),
                  GS.Colour(Colors.default.white, null, Colors.default.MyAppPrimaryColor),
                ]}>
                  Send
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("Receive")}>
                <Text style={[
                  GS.BorderWidth(null, null, 4, null),
                  GS.Radius(null, null, 4, 4),
                  GS.Padding(null, 10, null, 10),
                  GS.Colour(Colors.default.white, null, Colors.default.MyAppPrimaryColor),
                ]}>
                  Receive
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};
export default WalletViewSC;

