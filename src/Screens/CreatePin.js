import React, { useContext, useState } from "react";
// import type { Node } from "react";
import { View, Text, ImageBackground, ScrollView } from "react-native";
import { Background } from "../StyleSheet/Background";
import * as GS from "../StyleSheet/GeneralStyles";
import { Monogram } from "../StyleSheet/Monogram";
import SingleDot from "./SingleDot";
import { TouchableOpacity } from "react-native-gesture-handler";
import Colors from "../StyleSheet/Colors";
import axios from "axios";
import * as Ngrok from "../StyleSheet/Ngrok";
import { AuthContext } from "../Components/AuthProvider";
//
// const Section = ({ children, title }): Node => {
//   const isDarkMode = useColorScheme() === "dark";
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

const CreatePin = ({ navigation, route }) => {

  const { data } = useContext(AuthContext);
  var mnemonicValue = route.params.value;
  console.log("*******************************************",mnemonicValue)

  let [fill, setFill] = useState("");
  let [color1, setColor1] = useState(Colors.lightdark);
  let [color2, setColor2] = useState(Colors.lightdark);
  let [color3, setColor3] = useState(Colors.lightdark);
  let [color4, setColor4] = useState(Colors.lightdark);

  const triggerFill = (num) => {
    let new_fill = "";
    if (num === "remove") {
      new_fill = fill.substring(0, fill.length - 1);
    } else {
      if (fill.length >= 4) {
        console.log("false length exceed");
        return false;
      }
      new_fill = fill + num;
    }
    setFill(new_fill);
    let counter = new_fill.length;
    setColor4(counter > 3 ? Colors.MyAppPrimaryColor : Colors.lightdark);
    setColor3(counter > 2 ? Colors.MyAppPrimaryColor : Colors.lightdark);
    setColor2(counter > 1 ? Colors.MyAppPrimaryColor : Colors.lightdark);
    setColor1(counter > 0 ? Colors.MyAppPrimaryColor : Colors.lightdark);
  };
  return (
    <Background>
      <ScrollView>
      <Monogram />
      <Text style={[
        GS.font(17, Colors.white),
        GS.Align(null, null, null, "center"),
        { fontWeight: "" }]}>
        Create
      </Text>
      <Text style={[
        GS.Colour(Colors.white),
        GS.Align(null, null, null, "center")]}>
        New Pin
      </Text>
      <View style={[
        GS.Colour("", Colors.dark, ""),
        GS.Axis("100%", "100%"),
        GS.Align(null, null, "center"),
        GS.Radius(70, 70, 0, 0),
        GS.Margin("5%", "0%", "0%", "0%")]}>
        <View style={[
          GS.Flex(null, "row"),
          GS.Justify("center", null, null),
          GS.Align("center", null, null, null),
          GS.Margin("10%", "0%", "0%", "0%")]}>
          <SingleDot color={color1} />
          <SingleDot color={color2} />
          <SingleDot color={color3} />
          <SingleDot color={color4} />
        </View>
        <View style={[
          GS.Align("center", null, null, null),
          GS.Justify("center", null, null)]}>
          <View style={[
            GS.Axis("57%", 360),
            GS.Align("center", "center", "center", "center"),
            GS.Justify("center", null, null),
            { flexWrap: "wrap",flexDirection:"row" },
          ]}>
            <TouchableOpacity onPress={() => {
              return triggerFill("1");
            }} style={[
              GS.Axis(56, 56),
              GS.Radius(56, 56, 56, 56),
              GS.Colour(null, Colors.MyAppPrimaryColor, Colors.MyAppPrimaryColorLight),
              GS.BorderWidth(6, 6, 6, 6),
              GS.Margin("5%", "3%", "5%", "3%"),
              GS.Justify("center", null, null),
              GS.Align("center", null, null, null),
            ]}>
              <Text style={[
                GS.font(25, Colors.dark),
                GS.Align(null, null, null, "center"),
                { letterSpacing: 0, fontWeight: "" }]}>
                1
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                return triggerFill("2");
              }}
              style={[
                GS.Axis(56, 56),
                GS.Radius(56, 56, 56, 56),
                GS.Colour(null, Colors.MyAppPrimaryColor, Colors.MyAppPrimaryColorLight),
                GS.BorderWidth(6, 6, 6, 6),
                GS.Margin("5%", "3%", "5%", "3%"),
                GS.Justify("center", null, null),
                GS.Align("center", null, null, null),
              ]}>
              <Text style={[
                GS.font(25, Colors.dark),
                GS.Align(null, null, null, "center"),
                { letterSpacing: 0, fontWeight: "" }]}>
                2
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                return triggerFill("3");
              }}
              style={[
                GS.Axis(56, 56),
                GS.Radius(56, 56, 56, 56),
                GS.Colour(null, Colors.MyAppPrimaryColor, Colors.MyAppPrimaryColorLight),
                GS.BorderWidth(6, 6, 6, 6),
                GS.Margin("5%", "3%", "5%", "3%"),
                GS.Justify("center", null, null),
                GS.Align("center", null, null, null),
              ]}>
              <Text style={[
                GS.font(25, Colors.dark),
                GS.Align(null, null, null, "center"),
                { letterSpacing: 0, fontWeight: "" }]}>
                3
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                return triggerFill("4");
              }}
              style={[
                GS.Axis(56, 56),
                GS.Radius(56, 56, 56, 56),
                GS.Colour(null, Colors.MyAppPrimaryColor, Colors.MyAppPrimaryColorLight),
                GS.BorderWidth(6, 6, 6, 6),
                GS.Margin("5%", "3%", "5%", "3%"),
                GS.Justify("center", null, null),
                GS.Align("center", null, null, null),
              ]}>
              <Text style={[
                GS.font(25, Colors.dark),
                GS.Align(null, null, null, "center"),
                { letterSpacing: 0, fontWeight: "" }]}>
                4
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                return triggerFill("5");
              }}
              style={[
                GS.Axis(56, 56),
                GS.Radius(56, 56, 56, 56),
                GS.Colour(null, Colors.MyAppPrimaryColor, Colors.MyAppPrimaryColorLight),
                GS.BorderWidth(6, 6, 6, 6),
                GS.Margin("5%", "3%", "5%", "3%"),
                GS.Justify("center", null, null),
                GS.Align("center", null, null, null),
              ]}>
              <Text style={[
                GS.font(25, Colors.dark),
                GS.Align(null, null, null, "center"),
                { letterSpacing: 0, fontWeight: "" }]}>
                5
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                return triggerFill("6");
              }}
              style={[
                GS.Axis(56, 56),
                GS.Radius(56, 56, 56, 56),
                GS.Colour(null, Colors.MyAppPrimaryColor, Colors.MyAppPrimaryColorLight),
                GS.BorderWidth(6, 6, 6, 6),
                GS.Margin("5%", "3%", "5%", "3%"),
                GS.Justify("center", null, null),
                GS.Align("center", null, null, null),
              ]}>
              <Text style={[
                GS.font(25, Colors.dark),
                GS.Align(null, null, null, "center"),
                { letterSpacing: 0, fontWeight: "" }]}>
                6
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                return triggerFill("7");
              }}
              style={[
                GS.Axis(56, 56),
                GS.Radius(56, 56, 56, 56),
                GS.Colour(null, Colors.MyAppPrimaryColor, Colors.MyAppPrimaryColorLight),
                GS.BorderWidth(6, 6, 6, 6),
                GS.Margin("5%", "3%", "5%", "3%"),
                GS.Justify("center", null, null),
                GS.Align("center", null, null, null),
              ]}>
              <Text style={[
                GS.font(25, Colors.dark),
                GS.Align(null, null, null, "center"),
                { letterSpacing: 0, fontWeight: "" }]}>
                7
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                return triggerFill("8");
              }}
              style={[
                GS.Axis(56, 56),
                GS.Radius(56, 56, 56, 56),
                GS.Colour(null, Colors.MyAppPrimaryColor, Colors.MyAppPrimaryColorLight),
                GS.BorderWidth(6, 6, 6, 6),
                GS.Margin("5%", "3%", "5%", "3%"),
                GS.Justify("center", null, null),
                GS.Align("center", null, null, null),
              ]}>
              <Text style={[
                GS.font(25, Colors.dark),
                GS.Align(null, null, null, "center"),
                { letterSpacing: 0, fontWeight: "" }]}>
                8
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                return triggerFill("9");
              }}
              style={[
                GS.Axis(56, 56),
                GS.Radius(56, 56, 56, 56),
                GS.Colour(null, Colors.MyAppPrimaryColor, Colors.MyAppPrimaryColorLight),
                GS.BorderWidth(6, 6, 6, 6),
                GS.Margin("5%", "3%", "5%", "3%"),
                GS.Justify("center", null, null),
                GS.Align("center", null, null, null),
              ]}>
              <Text style={[
                GS.font(25, Colors.dark),
                GS.Align(null, null, null, "center"),
                { letterSpacing: 0, fontWeight: "" }]}>
                9
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                if (fill === "")
                {
                  alert("Enter a valid pin")
                }
                else if (fill.length <=3){
                  alert("Pin length should be 4 numbers")
                }
                else
                {
                if (route.params.wallet_type !== "new") {
                  axios.post(Ngrok.Url + "/importWallet", {
                    mnemonic: mnemonicValue,
                    newPassword: fill,
                  }).then(function(response) {
                    console.log("------------------------------",response)
                    if (response.data.result.status === true) {
                      data({
                        password: fill,
                      });
                      navigation.navigate("Mnemonic", { fill, wallet_type: route.params.wallet_type });
                    } else {
                      alert("Invalid Mnemonics");
                    }
                  })
                    .catch(function(error) {
                      // handle error
                      console.log("Err function is working IN Create Wallet Screen", error);
                    });
                } else {
                  data({
                    password: fill,
                  });
                  navigation.navigate("Mnemonic", { fill, wallet_type: route.params.wallet_type });
                }
                }
              }}
              style={[
                GS.Axis(56, 56),
                GS.Radius(56, 56, 56, 56),
                GS.Colour(null, Colors.MyAppPrimaryColor, Colors.MyAppPrimaryColorLight),
                GS.BorderWidth(6, 6, 6, 6),
                GS.Margin("5%", "3%", "5%", "3%"),
                GS.Justify("center", null, null),
                GS.Align("center", null, null, null),
              ]}>
              <Text style={[
                GS.font(16, Colors.dark),
                GS.Align(null, null, null, "center"),
                { letterSpacing: 0, fontWeight: "bold" }]}>
                OK
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                return triggerFill("0");
              }}
              style={[
                GS.Axis(56, 56),
                GS.Radius(56, 56, 56, 56),
                GS.Colour(null, Colors.MyAppPrimaryColor, Colors.MyAppPrimaryColorLight),
                GS.BorderWidth(6, 6, 6, 6),
                GS.Margin("5%", "3%", "5%", "3%"),
                GS.Justify("center", null, null),
                GS.Align("center", null, null, null),
              ]}>
              <Text style={[
                GS.font(25, Colors.dark),
                GS.Align(null, null, null, "center"),
                { letterSpacing: 0, fontWeight: "" }]}>
                0
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                return triggerFill("remove");
              }}
              style={[
                GS.Axis(56, 56),
                GS.Radius(56, 56, 56, 56),
                GS.Colour(null, Colors.MyAppPrimaryColor, Colors.MyAppPrimaryColorLight),
                GS.BorderWidth(6, 6, 6, 6),
                GS.Margin("5%", "3%", "5%", "3%"),
                GS.Justify("center", null, null),
                GS.Align("center", null, null, null),
              ]}>
              <ImageBackground
                source={require("../Assets/Back.png")}
                style={GS.Axis(23, 23)} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      </ScrollView>
    </Background>
  );
};
export default CreatePin;
