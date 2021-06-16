import React, { useState } from "react";
import { Button, Text, View, TextInput, TouchableOpacity } from "react-native";
import Colors from "../StyleSheet/Colors";
import * as GS from "../StyleSheet/GeneralStyles";
import USD from "../Api/ShowUsd";

const IncAndDec = ({}) => {
  const [number, setNumber] = useState(0);
  const [value, setValue] = useState(null);
  //Declaration of decrement function
  let decrement = () => {
    //To update the state we need invoke this.setState
    //with new value for variable 'number'
    setNumber(number - 1);
  };
  let TotalUSD = (num) => {
    setNumber(num + 1);
  };
  let handleValue = (text) => {
    setValue(text);
  };
  return (
    <>
      <View style={[
        GS.Flex(null, "row"),
        GS.Justify("space-between", null, null),
        GS.Align("center", null, null, null),
        GS.Margin("8%", "50%", "0%", "5%", ""),
        GS.Axis("50%",null),
      ]}>
        <TouchableOpacity
          onPress={decrement}
          style={[
            GS.Axis(45, 45),
            GS.Colour(null, Colors.MyAppPrimaryColor, null),
            GS.Radius(45, 45, 45, 45),
            GS.Justify("center", null, null),
          ]}>
          <Text style={[
            GS.font(23, Colors.dark),
            GS.Padding("0%", "5%", "0%", "5%"),
            GS.Align(null, null, null, "center"),
          ]}> - </Text>
        </TouchableOpacity>
        <TextInput
          style={[
            GS.Colour(Colors.MyAppPrimaryColor, null, Colors.MyAppPrimaryColor),
            GS.Padding("0%", "10%", "0%", "10%"),
            GS.Align(null, null, null, "center"),
            GS.Margin("0%", "3%", "0%", "3%", ""),
            GS.BorderWidth(null, null, 2, null),

          ]}
          onChangeText={handleValue}
          keyboardType="phone-pad"
        >
          {number}
        </TextInput>
        <TouchableOpacity
          onPress={() => {
            TotalUSD(number);
          }}
          style={[
            GS.Axis(45, 45),
            GS.Colour(null, Colors.MyAppPrimaryColor, null),
            GS.Radius(45, 45, 45, 45),
            GS.Justify("center", null, null),
          ]}>
          <Text style={[
            GS.font(23, Colors.dark),
            GS.Padding("0%", "5%", "0%", "5%"),
            GS.Align(null, null, null, "center"),
          ]}> + </Text>
        </TouchableOpacity>
        <USD usd={number} />

      </View>
    </>
  );
};
export default IncAndDec;
