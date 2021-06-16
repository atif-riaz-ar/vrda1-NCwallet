import React, { useContext, useEffect, useState } from "react";
import { View, Text, Button, TouchableOpacity, Image, ToastAndroid } from "react-native";
import Clipboard from "@react-native-community/clipboard";
import { Background } from "../StyleSheet/Background";
import * as GS from "../StyleSheet/GeneralStyles";
import Colors from "../StyleSheet/Colors";
import { AuthContext } from "../Components/AuthProvider";
import getUsd from "../Api/getUsd";


const Receive = () => {
  const { appData } = useContext(AuthContext);
  const [usd, setUSD] = useState(getUsd._W);
  const copyToClipboard = () => {
    Clipboard.setString(appData.address);
  };
  const showToastWithGravityAndOffset = () => {
    ToastAndroid.showWithGravityAndOffset(
      "Text Copied",
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
  };

  return (
    <Background>
      <View style={[
        GS.Axis("80%", 140),
        GS.Colour(null, Colors.dark, null),
        GS.Margin("10%", "10%", "10%", "10%", ""),
        GS.Radius(25, 25, 25, 25),
        GS.Padding("5%", "5%", "5%", "5%"),
      ]}>
        <View style={[
          GS.Flex(null, "row"),
        ]}>
          <Image
            source={require("../Assets/img.png")}
            style={[
              GS.Axis(45, 45),
              { marginTop: -7, marginLeft: -12 },
            ]} />
          <View style={[
            GS.Flex(null, "column"),
          ]}>
            <Text style={[
              GS.font(19, Colors.white),
              { fontWeight: null },
            ]}>
              Ethereum
            </Text>
            <Text style={[
              GS.font(11, Colors.balance),
              { fontWeight: null },
            ]}>
              Balance
            </Text>
            <Text style={[
              GS.font(14, Colors.white),
              { fontWeight: null },
            ]}>
              {appData.balance ? (appData.balance).toFixed(4):appData.balance } ETH
            </Text>
            <Text style={[
              GS.font(14, Colors.white),
              { fontWeight: null },
            ]}>
              {usd * appData.balance ? (usd * appData.balance).toFixed(2): usd * appData.balance} USD
            </Text>
          </View>
        </View>
      </View>
      <View style={[
        GS.Justify("center", null, null),
        GS.Align("center", null, null, "center"),
      ]}>
        <Text style={[
          GS.font(16, Colors.white),
          {fontWeight:null},
        ]}>
          Tap to Copy
        </Text>
        <TouchableOpacity onPress={()=>{copyToClipboard();showToastWithGravityAndOffset();}}>
          <Text style={[
            GS.Axis("100%", null),
            GS.Margin("0%", "10%", "0%", "10%", ""),
            GS.Colour(Colors.white, null, null),
          ]}>
            {appData.address}
          </Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};
export default Receive;
