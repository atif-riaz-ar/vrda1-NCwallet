import React, { useContext, useState } from "react";
import { Text, View, TouchableOpacity, ScrollView, Image, ActivityIndicator, Linking } from "react-native";
import { Background } from "../StyleSheet/Background";
import Colors from "../StyleSheet/Colors";
import axios from "axios";
import { TextInput } from "react-native-paper";
import * as GS from "../StyleSheet/GeneralStyles";
import { AuthContext } from "../Components/AuthProvider";
import getUsd from "../Api/getUsd";
import * as Ngrok from "../StyleSheet/Ngrok";
import AntDesign from "react-native-vector-icons/AntDesign";

const Send = ({ navigation }) => {
  const { appData, data } = useContext(AuthContext);
  console.log(appData.balance);
  var privatekey = appData.privateKey;
  const [value, setValue] = useState("");
  // const [gasprice, setGasprice] = useState("");
  const [amount, setAmount] = useState("");
  // const [gaslimit, setGaslimit] = useState("");
  const [txhash, setTxhash] = useState("");
  const [usd, setUSD] = useState(getUsd._W);
  // const [text, setText] = React.useState('1');
  // const [limit, setLimit] = React.useState('21000');
  let handleValue = (text) => {
    setValue(text);
  };
  // let handleGasPrice = (text) => {
  //   setGasprice(text);
  // };
  // let handleGasLimit = (text) => {
  //   setGaslimit(text);
  // };
  let handleAmount = (text) => {
    setAmount(text);
  };

  let Next = () => {
    return (<>
        <TouchableOpacity
          onPress={() => {
            {
              if (amount !== "" && value !== ""){
              if (amount < appData.balance) {
                axios.post(Ngrok.Url + "/createTransaction", {
                  "privateKey": privatekey,
                  "recipient": value,
                  "amount": amount,
                  "gasPrice": "1",
                  "gasLimit": "21000",
                })
                  .then(function(response) {
                    setTxhash(response.data.txHash);

                    let myURL = (Ngrok.Url + "/getAccountBalance/" + appData.address).toString();
                    axios.get(myURL)
                      .then(function(response) {
                        data({
                          balance: response.data,
                        });
                      })
                      .catch(err => {
                        console.log("Err function is working in Wallet View Screen", err);
                      });
                    console.log("+++++++++++++++++++",response.data.txHash);
                  })
                  .catch(err => {
                    console.log("Err function is working", err);
                  });
              } else {
                alert("Invalid Amount");
                return null;
              }
              }else
              {
                alert("Field should not be empty!");
                return null;
              }
            }
          }}
          style={[
            GS.Colour(null, Colors.MyAppPrimaryColor, null),
            GS.Justify("center", null, null),
            GS.Align("center", null, "center", null),
            GS.Radius(25, 25, 25, 25),
            GS.Axis(80, null),
            GS.Margin("10%", "0%", "0%", "0%", ""),
            GS.Padding(5, null, 5, null),
          ]}>
          <Text style={[
            GS.font(17, Colors.white),
            { fontWeight: null, fontStyle: "italic" },
          ]}>Next</Text>
        </TouchableOpacity>

      </>
    );
  };
  return (
    <>
      <Background>
        <ScrollView>
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
            GS.Margin("0%", "10%", "0%", "10%", ""),
          ]}>
            <Text style={[
              GS.font(18, Colors.MyAppPrimaryColor),
              { fontWeight: null },
            ]}>Enter Amount in ETH</Text>
            <TextInput
              label={"Amount"}
              theme={{
                roundness: 10,
                colors: {
                  placeholder: Colors.MyAppPrimaryColor,
                  text: "white",
                  primary: Colors.MyAppPrimaryColor,
                  underlineColor: "transparent",
                },
              }}
              style={[
                GS.Colour(Colors.white, Colors.dark, Colors.MyAppPrimaryColor),
                GS.BorderWidth(null, null, 2, null),
              ]}
              underlineColorAndroid="transparent"
              placeholder="Enter Amount in ETH"
              numaric
              keyboardType="phone-pad"
              placeholderTextColor="#aaaaab"
              autoCapitalize="none"
              onChangeText={handleAmount}
            />
            <View style={[
              GS.Margin("8%", "0%", "0%", "0%", ""),
            ]}>
              <TextInput
                label={"Enter Address"}
                theme={{
                  roundness: 10,
                  colors: {
                    placeholder: Colors.MyAppPrimaryColor, text: "white", primary: Colors.MyAppPrimaryColor,
                    underlineColor: "transparent",
                  },
                }}
                style={[
                  GS.Colour(Colors.white, Colors.dark, Colors.MyAppPrimaryColor),
                  GS.BorderWidth(null, null, 2, null),
                ]}
                underlineColorAndroid="transparent"
                placeholder="Enter ETH Address"
                placeholderTextColor="#aaaaab"
                autoCapitalize="none"
                onChangeText={handleValue}
              />
              {/*<View style={[*/}
              {/*  GS.Margin("7%", "0%", "0%", "0%", ""),*/}
              {/*  GS.Axis("100%", null),*/}
              {/*  GS.Flex(null, "row"),*/}
              {/*]}>*/}
                {/*<TextInput*/}
                {/*  label={"Gas Price(GWEI):"}*/}
                {/*  theme={{*/}
                {/*    roundness: 10,*/}
                {/*    colors: {*/}
                {/*      placeholder: Colors.MyAppPrimaryColor,*/}
                {/*      text: "white",*/}
                {/*      primary: Colors.MyAppPrimaryColor,*/}
                {/*      underlineColor: "transparent",*/}
                {/*    },*/}
                {/*  }}*/}
                {/*  style={[*/}
                {/*    GS.Colour(Colors.white, Colors.dark, Colors.MyAppPrimaryColor),*/}
                {/*    GS.BorderWidth(null, null, 2, null),*/}
                {/*    GS.Axis("58%", null),*/}
                {/*    GS.Margin("1%", "1%", "1%", "1%", ""),*/}
                {/*  ]}*/}
                {/*  underlineColorAndroid="transparent"*/}
                {/*  placeholder="1"*/}
                {/*  numaric*/}
                {/*  keyboardType="phone-pad"*/}
                {/*  placeholderTextColor="#aaaaab"*/}
                {/*  autoCapitalize="none"*/}
                {/*  value={text}*/}
                {/*  onChangeText={(text => {setText(text);},()=>handleGasPrice)}*/}
                {/*/>*/}
                {/*<TextInput*/}
                {/*  label={"Gas Limit:"}*/}
                {/*  theme={{*/}
                {/*    roundness: 10,*/}
                {/*    colors: {*/}
                {/*      placeholder: Colors.MyAppPrimaryColor, text: "white", primary: Colors.MyAppPrimaryColor,*/}
                {/*      underlineColor: "transparent",*/}
                {/*    },*/}
                {/*  }}*/}
                {/*  style={[*/}
                {/*    GS.Colour(Colors.white, Colors.dark, Colors.MyAppPrimaryColor),*/}
                {/*    GS.BorderWidth(null, null, 2, null),*/}
                {/*    GS.Axis("38%", null),*/}
                {/*    GS.Margin("1%", "1%", "1%", "1%", ""),*/}
                {/*  ]}*/}
                {/*  underlineColorAndroid="transparent"*/}
                {/*  placeholder="21000"*/}
                {/*  placeholderTextColor="#aaaaab"*/}
                {/*  autoCapitalize="none"*/}
                {/*  numaric*/}
                {/*  keyboardType="phone-pad"*/}
                {/*  value={"21000"}*/}
                {/*  onChangeText={(limit => {setLimit(limit);},()=>handleGasLimit)}*/}
                {/*/>*/}
              {/*</View>*/}
            </View>
            <Next />
            {txhash ? (<>
              <Text style={[
                GS.font(18, Colors.MyAppPrimaryColor),
                { fontWeight: null,marginTop:"3%" },
              ]}>
                Transaction Hash:
              </Text>
                <Text style={{ color: "#07aff5" }}
                      onPress={() => Linking.openURL(`https://ropsten.etherscan.io/tx/${txhash}`)}>
                  {txhash}
                </Text>
              </>) :
              null
            }
          </View>
        </ScrollView>
      </Background>
    </>
  );
};
export default Send;
