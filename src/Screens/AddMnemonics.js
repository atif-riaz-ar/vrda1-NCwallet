import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ImageBackground, FlatList } from "react-native";
import CheckBox from "@react-native-community/checkbox";
import { Background } from "../StyleSheet/Background";
import { ScrollView } from "react-native-gesture-handler";
import * as Colors from "../StyleSheet/Colors";
import * as GS from "../StyleSheet/GeneralStyles";

const AddMnemonic = ({ route, navigation }) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [mnemonic, setMnemonic] = useState([]);
  const [final, setFinal] = useState("");

  let AddItemTOArray = (param) => {
    let arr_length = mnemonic.length;
    if (!mnemonic.includes(param)) {
      mnemonic[arr_length] = param;
      setMnemonic(mnemonic);
      setFinal(mnemonic.join(" "));
      let b = mnemonic.toString();
      let c = b.replace(/,/g, " ");
      console.log(c);
    }
  };
  let CheckBoxComponent = () => {
    return (
      <CheckBox
        disabled={false}
        value={toggleCheckBox}
        onValueChange={(newValue) => setToggleCheckBox(newValue)}
        tintColors={{ true: "#E1951E", false: "white" }} />
    );
  };
  let Next = () => {
    if (toggleCheckBox === true) {
      return (
        <TouchableOpacity
          style={[
            GS.Colour(null, Colors.default.MyAppPrimaryColor, null),
            GS.Justify("center", null, null),
            GS.Align("center", null, "flex-end", null),
            GS.Radius(25, 25, 25, 25),
            GS.Axis(80, null),
            GS.Padding(5, null, 5, null),
          ]}
          onPress={() => {
            if (route.params.mnemonic === final) {
              navigation.navigate("Home");
            } else {
              alert("Mnemonics not matched");
            }
          }}>
          <View>
            <Text style={[
              GS.font(17, Colors.default.white),
              { fontWeight: null, fontStyle: "italic" },
            ]}>Next</Text>
          </View>
        </TouchableOpacity>
      );

    } else {
      return (<></>);
    }
  };
  return (
    <Background>
      <ScrollView>
        <View style={[
          GS.Margin("25%", "0%", "0%", "0%", ""),
          GS.Axis("100%", "100%"),
          GS.Colour(null, Colors.default.dark, null),
          GS.Radius(70, 70, 0, 0),
        ]}>
          <View style={[
            GS.Margin("0%", "12%", "50%", "12%", ""),
          ]}>
            <Text style={[
              GS.Colour(Colors.default.white, null, null),
              GS.Margin("12%", "0%", "0%", "0%", ""),
            ]}>
              Please keep the Mnemonics in safe place to safeguard from any intruder attack</Text>
            <Text style={{ color: Colors.default.lightgray }}>
              * If you lose your Mnemonics phase, your wallet cannot be recovered</Text>
            <ImageBackground
              style={[
                GS.Axis("100%", 200),
                GS.Justify("center", null, null),
                GS.Margin("5%", "0%", "0%", "0%", ""),
              ]}
              source={require("../Assets/mnemonicFrame.png")}>
              <Text style={[
                GS.font(20, Colors.default.white),
                GS.Margin("0%", "2%", "0%", "2%", ""),
                GS.Align(null, null, null, "center"),
                { fontWeight: null },
              ]}>{final}</Text>
            </ImageBackground>
            <FlatList
              numColumns={3}
              data={route.params.mnemonicArr}
              keyExtractor={(product, idx) => product + idx}
              renderItem={(item) => (
                <TouchableOpacity
                  onPress={() => {
                    AddItemTOArray(item.item);
                  }}
                  style={[
                    GS.Align("center", null, null, null),
                    GS.Justify("center", null, null),
                    GS.Padding(5, 5, 5, 5),
                    GS.Axis("100%", "8%"),
                    GS.Flex(1, "column"),
                    GS.Margin("4%", "0%", "0%", "0%", ""),
                  ]}>
                  <View style={[
                    GS.Align("center", null, null, null),
                    GS.Axis("100%", "10%"),
                    GS.Flex(1, "column"),
                    GS.BorderWidth(null, null, 1, null),
                    GS.Colour(null, null, Colors.default.MyAppPrimaryColor),
                    GS.Radius(5, 5, 5, 5),
                  ]}>
                    <Text style={[
                      GS.Align("center", null, null, "center"),
                      GS.font(18, Colors.default.white),
                      { fontWeight: null },
                    ]}>
                      {item.item}
                    </Text>
                  </View>
                </TouchableOpacity>
              )}

            />
            <View style={[
              GS.Flex(null, "row"),
              GS.Justify("center", null, null),
            ]}>
              <CheckBoxComponent />
              <Text style={{ color: Colors.default.white }}>
                Tab the words to put them in next to each other in the correct order
              </Text>
            </View>
            <Next />
          </View>
        </View>
      </ScrollView>
    </Background>
  );
};
export default AddMnemonic;
