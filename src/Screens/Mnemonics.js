import React, { useState, useEffect, useContext } from "react";
import { View, Text, TouchableOpacity, ImageBackground, ActivityIndicator, Image, ToastAndroid } from "react-native";
import CheckBox from "@react-native-community/checkbox";
import { Background } from "../StyleSheet/Background";
import * as GS from "../StyleSheet/GeneralStyles";
import axios from "axios";
import Clipboard from "@react-native-community/clipboard";
import { ScrollView } from "react-native-gesture-handler";
import { ShuffleWords } from "../wordlists/en";
import * as Colors from "../StyleSheet/Colors";
import * as Ngrok from "../StyleSheet/Ngrok";
import { AuthContext } from "../Components/AuthProvider";

const Mnemonic = ({ route, navigation }) => {
  const { appData } = useContext(AuthContext);
  const [mnemonic, setMnemonic] = useState("");
  const [mnemonicArr, setMnemonicArr] = useState([]);
  if (route.params.wallet_type === "new") {
    useEffect(() => {
      axios.post(Ngrok.Url + "/createWallet", {
        password: appData.password,
      }).then(function(response) {
        setMnemonic(response.data);
        setMnemonicArr(ShuffleWords(response.data.split(" ")));
      }).catch(function(error) {
        console.log("Err function is working on Mnemonic screen", error);
      });
    }, []);

    const [toggleCheckBox, setToggleCheckBox] = useState(false);
    let CheckBoxComponent = () => {
      return (
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={(newValue) => setToggleCheckBox(newValue)}
          tintColors={{ true: "#E1951E", false: "white" }}
        />
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
            onPress={() => navigation.navigate("AddMnemonic", { mnemonicArr, mnemonic })}>
            <Text style={[
              GS.font(17, Colors.default.white),
              { fontWeight: null, fontStyle: "italic" },
            ]}>Next</Text>
          </TouchableOpacity>
        );
      } else {
        return (<></>);
      }
    };
    const copyToClipboard = () => {
      Clipboard.setString(mnemonic);
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
              <View style={{ flexDirection: "row", width: "100%" }}>
                <ImageBackground
                  style={[
                    GS.Axis("100%", 200),
                    GS.Justify("center", null, null),
                    GS.Margin("5%", "0%", "0%", "0%", ""),
                  ]}
                  source={require("../Assets/mnemonicFrame.png")}>
                  {mnemonic ? (
                      <Text
                        style={[
                          GS.font(20, Colors.default.white),
                          GS.Margin("0%", "2%", "0%", "2%", ""),
                          GS.Align(null, null, null, "center"),
                          { fontWeight: null },
                        ]}>
                        {mnemonic}
                      </Text>) :
                    <View Style={[
                      GS.Justify("center", null, null),
                      GS.Flex(1, "row"),
                    ]}>
                      <ActivityIndicator size="large" color="#000" />
                    </View>
                  }
                </ImageBackground>
                <TouchableOpacity
                  style={[
                    GS.Margin("69%", "0%", "0%", "92%", ""),
                    { position: "absolute" }]}
                  onPress={()=>{copyToClipboard();showToastWithGravityAndOffset();}}>
                  <Image style={[
                    GS.Axis(35, 35),
                  ]}
                         source={require("../Assets/Copy.png")}
                  />
                </TouchableOpacity>

              </View>
              <View style={[
                GS.Margin("40%", "0%", "10%", "0%", ""),
                GS.Justify("center", null, null),
                GS.Flex(null, "row"),
              ]}>
                <CheckBoxComponent />
                <Text style={{
                  color: Colors.default.white,
                }}>
                  Tab the words to put them in next to each other in the correct order
                </Text>
              </View>
              <Next />
            </View>
          </View>
        </ScrollView>
      </Background>
    );
  } else {
    useEffect(() => {
      navigation.navigate("Home");
    });
    return false;
  }
};
export default Mnemonic;
