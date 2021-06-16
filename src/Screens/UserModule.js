import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import * as GS from "../StyleSheet/GeneralStyles";
import { Background } from "../StyleSheet/Background";
import { Monogram } from "../StyleSheet/Monogram";
import Colors from "../StyleSheet/Colors";

const UserModule = ({ navigation }) => {
  const [value, setValue] = useState("");
  let handleValue = (text) => {
    setValue(text);
  };
  return (
    <>
      <Background>
        <ScrollView>
          <Monogram />
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Text style={GS.font(23, Colors.MyAppPrimaryColor)}>Welcome to </Text>
            <Text style={GS.font(23, Colors.white)}>Crypto Wallet</Text>
          </View>

          <View style={[
            GS.Radius(20, 20, 0, 0),
            GS.View("80%", 200, Colors.white),
            GS.Margin("20%", "10%", "0%", "10%", ""),
            GS.Padding("5%", "0%", "0%", "5%"),
          ]}>
            <Text>Import</Text>
            <Text style={{ color: Colors.lightgray }}>Existing Wallet</Text>
            <TextInput
              style={[
                GS.Axis("93%", 40),
                GS.Colour(Colors.dark, Colors.white, Colors.MyAppPrimaryColor),
                GS.BorderWidth(0, 0, 2, 0),
              ]}
              placeholder="Enter Mnemonics"
              onChangeText={handleValue}
            />
            <TouchableOpacity
              style={[
                GS.Flex(1, null),
                GS.Justify("flex-end", null, null),
                GS.Margin("0%", "5%", "5%", "65%", ""),
              ]}
              onPress={() => {
                if (value === ""){
                  alert("Please enter mnemonic");
                }else {
                  navigation.navigate("CreatePin", { wallet_type: "existing", value })
                }
              }}>
              <Text
                style={[
                  GS.Colour(Colors.dark, Colors.MyAppPrimaryColor, Colors.white),
                  GS.Align("center", null, null,"center"),
                  GS.Padding("10%", "20%", "10%", "20%"),
                  GS.font(14, Colors.dark),
                  GS.Radius(25, 25, 25, 25),
                ]}>
                Next
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("CreatePin", { wallet_type: "new" })}
            style={[
              GS.Colour("", Colors.MyAppPrimaryColor, ""),
              GS.Axis("80%", 90),
              GS.Radius(0, 0, 20, 20),
              GS.Margin("0%", "10%", "0%", "10%"),
              GS.Padding("0%", "0%", "0%", "5%"),
            ]}>
            <Text
              style={[
                GS.Padding("5%", "0%", "0%", "0%"),
              ]}>
              Create
            </Text>
            <Text
              style={[
                GS.Colour(Colors.lightdark, "", ""),
              ]}>
              New Wallet
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </Background>
    </>
  );
};
export default UserModule;
