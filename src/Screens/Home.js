import React, { useContext, useState } from "react";
import { Background } from "../StyleSheet/Background";
import Colors from "../StyleSheet/Colors";
import CheckBox from "@react-native-community/checkbox";
import { AuthContext } from "../Components/AuthProvider";
import * as Ngrok from "../StyleSheet/Ngrok";
import axios from "axios";
import { Linking, ScrollView, Text, TouchableOpacity, View } from "react-native";
import * as GS from "../StyleSheet/GeneralStyles";

function MyTabs({ navigation }) {
  const { appData, data } = useContext(AuthContext);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [toggleCheckBox1, setToggleCheckBox1] = useState(false);
  const [toggleCheckBox2, setToggleCheckBox2] = useState(false);
  const [toggleCheckBox3, setToggleCheckBox3] = useState(false);
  const [toggleCheckBox4, setToggleCheckBox4] = useState(false);
  const [toggleCheckBox5, setToggleCheckBox5] = useState(false);

  if (typeof appData.address !== "undefined") {
    let myURL = (Ngrok.Url + "/getAccountBalance/" + appData.address).toString();
    axios.get(myURL)
      .then(function(response) {
        data({
          balance: response.data,
        });
        navigation.navigate("Tabs");
      })
      .catch(err => {
        console.log("Err function is working in Wallet View Screen", err);
      });
  }
  if (typeof appData.address == "undefined") {
    let CheckBoxComponent = () => {
      return (
        <CheckBox
          disabled={false}
          value={toggleCheckBox1}
          onValueChange={(newValue) => setToggleCheckBox1(newValue)}
          tintColors={{ true: "#E1951E", false: "white" }}
        />
      );
    };
    let CheckBoxComponent1 = () => {
      return (
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={(newValue) => setToggleCheckBox(newValue)}
          tintColors={{ true: "#E1951E", false: "white" }}
        />
      );
    };
    let CheckBoxComponent2 = () => {
      return (
        <CheckBox
          disabled={false}
          value={toggleCheckBox2}
          onValueChange={(newValue) => setToggleCheckBox2(newValue)}
          tintColors={{ true: "#E1951E", false: "white" }}
        />
      );
    };
    let CheckBoxComponent3 = () => {
      return (
        <CheckBox
          disabled={false}
          value={toggleCheckBox3}
          onValueChange={(newValue) => setToggleCheckBox3(newValue)}
          tintColors={{ true: "#E1951E", false: "white" }}
        />
      );
    };
    let CheckBoxComponent4 = () => {
      return (
        <CheckBox
          disabled={false}
          value={toggleCheckBox4}
          onValueChange={(newValue) => setToggleCheckBox4(newValue)}
          tintColors={{ true: "#E1951E", false: "white" }}
        />
      );
    };
    let CheckBoxComponent5 = () => {
      return (
        <CheckBox
          disabled={false}
          value={toggleCheckBox5}
          onValueChange={(newValue) => setToggleCheckBox5(newValue)}
          tintColors={{ true: "#E1951E", false: "white" }}
        />
      );
    };
      return (
      <>
        <Background>
          <ScrollView>
            <View style={[
              GS.Flex(1,"column"),
              GS.Margin("20%","5%","0%","5%",""),
            ]}>
              <Text style={[
                GS.font(20,Colors.white),
                GS.Align(null,null,"center",null),
                {textDecorationLine:"underline"},
              ]}>Almost done! Let's Review</Text>
              <View style={[
                {marginTop:"20%",marginHorizontal:"4%"},
                GS.Flex(null,"row"),
                GS.Axis("80%",null),
              ]}>
              <CheckBoxComponent/>
                <Text style={[
                  GS.Colour(Colors.white,null,null),
                ]}>I understand that my funds are held securely on this device, not by a company.</Text>
              </View><View style={[
                {marginTop:"2%",marginHorizontal:"4%"},
                GS.Flex(null,"row"),
                GS.Axis("80%",null),
              ]}>
              <CheckBoxComponent1/>
                <Text style={[
                  GS.Colour(Colors.white,null,null),
                ]}>I understand that i am solely responsible for the safety of my mnemonics, the company neither holds a copy of my mnemonics nor can help me recover the same.</Text>
              </View><View style={[
                {marginTop:"2%",marginHorizontal:"4%"},
                GS.Flex(null,"row"),
                GS.Axis("80%",null),
              ]}>
              <CheckBoxComponent2/>
                <Text style={[
                  GS.Colour(Colors.white,null,null),
                ]}>I understand that i should never disclose or share my mnemonics with anyone under any circumstances.</Text>
              </View><View style={[
                {marginTop:"2%",marginHorizontal:"4%"},
                GS.Flex(null,"row"),
                GS.Axis("80%",null),
              ]}>
              <CheckBoxComponent3/>
                <Text style={[
                  GS.Colour(Colors.white,null,null),
                ]}>I understand that if this app is moved to another device or delete, i can recover my wallet using mnemonics.</Text>
              </View><View style={[
                {marginTop:"2%",marginHorizontal:"4%"},
                GS.Flex(null,"row"),
                GS.Axis("80%",null),
              ]}>
              <CheckBoxComponent4/>
                <Text style={[
                  GS.Colour(Colors.white,null,null),
                ]}>I understand that if i lose my mnemonics, i would never be able to recover my wallet.</Text>
              </View>
              <View style={{flexDirection:"column"}}>
              <View style={[
                {marginTop:"2%",marginHorizontal:"4%"},
                GS.Flex(null,"row"),
                GS.Axis("80%",null),
              ]}>
              <CheckBoxComponent5/>
                <Text style={[
                  GS.Colour(Colors.white,null,null),
                ]}>I have read, understood and agree to the</Text>
              </View>
                <Text
                  style={[
                    GS.font(14,Colors.MyAppPrimaryColor),
                    {marginLeft:"15%",marginTop:-15},
                  ]}
                  onPress={() => Linking.openURL(`https://www.lipsum.com/`)}>
                  Terms of use.
                </Text>
              </View>
            </View>
            {toggleCheckBox === true && toggleCheckBox1 === true && toggleCheckBox2 === true && toggleCheckBox3 === true && toggleCheckBox4 === true && toggleCheckBox5 === true?(
              <>
                <TouchableOpacity
                  style={[
                    GS.Align(null, null, "center", null),
                    GS.Margin("10%","0%","0%","0%",""),
                    GS.Colour(null,Colors.MyAppPrimaryColor,null),
                    GS.Radius(25,25,25,25),
                  ]}
                  onPress={() => {
                    axios.post(Ngrok.Url + "/createAccount", {
                      password: appData.password,
                    })
                      .then(function(response) {
                        data({
                          address: response.data.result.address,
                          privateKey: response.data.result.privateKey,
                        });
                        let myURL = (Ngrok.Url + "/getAccountBalance/" + appData.address).toString();
                        axios.get(myURL)
                          .then(function(response) {
                            data({
                              balance: response.data,
                            });

                            navigation.navigate("Tabs");
                          })
                          .catch(err => {
                            console.log("Err function is working in Wallet View Screen", err);
                          });
                      })
                      .catch(function(error) {
                        // handle error
                        console.log("Err function is working in Wallet Screen", error);
                      });
                  }}
                >
                  <Text style={[
                    GS.font(15, Colors.white),
                    GS.Padding(8,15,8,15),
                    { fontWeight: null },
                  ]}>Add Wallet</Text>
                </TouchableOpacity>
              </>
            ):(
              <>
              </>
            ) }
          </ScrollView>
        </Background>
      </>
    );
  } else {
    navigation.navigate("Tabs");
  }
  return <>
  </>;
}
export default MyTabs;
