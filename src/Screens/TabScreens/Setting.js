import React from "react";
import Colors from "../../StyleSheet/Colors";
import * as GS from "../../StyleSheet/GeneralStyles";
import {FAQScreen} from "./SettingSubScreen/FAQ";
import {SupportScreen} from "./SettingSubScreen/Support";
import {createStackNavigator} from "@react-navigation/stack";
import {Background} from "../../StyleSheet/Background";
import {AboutScreen} from "./SettingSubScreen/AboutScreentxt";
import {Text, TouchableOpacity, ScrollView, View} from "react-native";
import {TermsAndConditionsScreen} from "./SettingSubScreen/Terms & conditions";
import {PrivacyPoliciesScreen} from "./SettingSubScreen/PrivacyPoliciesScreen";
import AsyncStorage from "@react-native-community/async-storage";
import { useNavigation } from "@react-navigation/native";

const Stack = createStackNavigator();
function SetScreen() {

  const navigation = useNavigation();
  let Remove= ()=> {
    AsyncStorage.removeItem("AUTH_DATA").then(()=>{
      navigation.navigate("UserModule")
    })
  }

  return (
    <>
      <Background>
        <ScrollView>
          <Text style={[
            GS.font(15,Colors.MyAppPrimaryColor),
            GS.Padding(10,10,10,10),
            GS.Margin("1.5%","1.5%","1.5%","1.5%",""),
          ]}>Crypto Wallet</Text>
          <TouchableOpacity
              style={[
                GS.Axis("94%",null),
                GS.Padding(13,10,13,20,),
                GS.Margin("0%","3%","0%","3%",""),
                GS.BorderWidth(null,null,1,null),
                GS.Radius(25,25,25,25),
                GS.Colour(null,Colors.dark,Colors.MyAppPrimaryColor),
              ]}
            onPress={() => navigation.navigate("About us")}>
            <Text style={{ color: Colors.white }}>AboutUs</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              GS.Axis("94%",null),
              GS.Padding(13,10,13,20,),
              GS.Margin("2%","3%","0%","3%",""),
              GS.BorderWidth(null,null,1,null),
              GS.Radius(25,25,25,25),
              GS.Colour(null,Colors.dark,Colors.MyAppPrimaryColor),
            ]}
            onPress={() => navigation.navigate("TermsAndCondition")}>
            <Text style={{ color: Colors.white }}>Terms & Conditions</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              GS.Axis("94%",null),
              GS.Padding(13,10,13,20,),
              GS.Margin("2%","3%","0%","3%",""),
              GS.BorderWidth(null,null,1,null),
              GS.Radius(25,25,25,25),
              GS.Colour(null,Colors.dark,Colors.MyAppPrimaryColor),
            ]}
            onPress={() => navigation.navigate("PrivacyPolicies")}>
            <Text style={{ color: Colors.white }}>Privacy Policies</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              GS.Axis("94%",null),
              GS.Padding(13,10,13,20,),
              GS.Margin("2%","3%","0%","3%",""),
              GS.BorderWidth(null,null,1,null),
              GS.Radius(25,25,25,25),
              GS.Colour(null,Colors.dark,Colors.MyAppPrimaryColor),
            ]}
            onPress={() => navigation.navigate("FAQ")}>
            <Text style={{ color: Colors.white }}>FAQ</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              GS.Axis("94%",null),
              GS.Padding(13,10,13,20,),
              GS.Margin("2%","3%","0%","3%",""),
              GS.BorderWidth(null,null,1,null),
              GS.Radius(25,25,25,25),
              GS.Colour(null,Colors.dark,Colors.MyAppPrimaryColor),
            ]}
            onPress={() => navigation.navigate("Support")}>
            <Text style={{ color: Colors.white }}>Support</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={Remove}
            style={[
              GS.Axis("94%",null),
              GS.Padding(8,10,8,20,),
              GS.Margin("2%","3%","0%","3%",""),
              GS.BorderWidth(null,null,1,null),
              GS.Radius(25,25,25,25),
              GS.Colour(null,Colors.dark,Colors.MyAppPrimaryColor),
            ]}>
            <View>
              <Text style={{ color: Colors.white }}>LOG OUT</Text>
              <Text style={[
                GS.font(10,Colors.MyAppPrimaryColor),
                {fontWeight:null},
              ]}>Switch wallet</Text>
            </View>
          </TouchableOpacity>
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
}

export const SettingScreen = ({}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SetScreen"
        component={SetScreen}
        options={{ headerShown: false }} />
      <Stack.Screen
        name="About us"
        component={AboutScreen}
        options={{
          title: "About Us",
          headerTintColor: Colors.MyAppPrimaryColor,
          headerStyle: {
            height: 45,
            backgroundColor: "#2f2c2c",
          },
        }} />
      <Stack.Screen
        name="TermsAndCondition"
        component={TermsAndConditionsScreen}
        options={{
          title: "Terms & Conditions",
          headerTintColor: Colors.MyAppPrimaryColor,
          headerStyle: {
            height: 45,
            backgroundColor: "#2f2c2c",
          },
        }} />
      <Stack.Screen
        name="PrivacyPolicies"
        component={PrivacyPoliciesScreen}
        options={{
          title: "Privacy Policies",
          headerTintColor: Colors.MyAppPrimaryColor,
          headerStyle: {
            height: 45,
            backgroundColor: "#2f2c2c",
          },
        }} />
      <Stack.Screen
        name="FAQ"
        component={FAQScreen}
        options={{
          title: "FAQ",
          headerTintColor: Colors.MyAppPrimaryColor,
          headerStyle: {
            height: 45,
            backgroundColor: "#2f2c2c",
          },
        }} />
      <Stack.Screen name="Support" component={SupportScreen} options={{
        title: "Support",
        headerTintColor: Colors.MyAppPrimaryColor,
        headerStyle: {
          height: 45,
          backgroundColor: "#2f2c2c",
        },
      }} />
    </Stack.Navigator>
  );
};
