import React, { useContext, useEffect, useState } from "react";
import { Image } from "react-native";
import * as GS from "../StyleSheet/GeneralStyles";
import AsyncStorage from "@react-native-community/async-storage";
import { AuthContext } from "../Components/AuthProvider";

const Splash = (navigation) => {
  const {data}=useContext(AuthContext);
  const [result,setResult]=useState("")
  useEffect(async () => {
    setTimeout(() => {
      AsyncStorage.getItem("AUTH_DATA").then((res) => {
        if (result === null) {
          navigation.navigation.replace("UserModule");
        } else {
          let result = JSON.parse(res);
          data({
            address:result.account,
            privateKey:result.key,
            password:result.pin,
          })
          navigation.navigation.replace("Home");
        }
      }).catch((err) => {
        navigation.navigation.replace("UserModule");
      })
    }, 2000);
  }, []);
  return (
    // <ImageBackground style={[GS.fullDisplay]} source={require("../Assets/SplashBg.png")}>
    //   <View style={[GS.fullDisplay, GS.row, GS.contentCenter]}>
        <Image style={[GS.squareImage("100%","100%")]} source={require("../Assets/Splash.gif")} />
    // {/*    <View style={[GS.row]}>*/}
    // {/*      <Text style={[GS.font(23, Colors.MyAppPrimaryColor)]}>*/}
    // {/*        Crypto*/}
    // {/*      </Text>*/}
    // {/*      <Text style={[GS.font(23, Colors.white)]}>*/}
    // {/*        Wallet*/}
    // {/*      </Text>*/}
    // {/*    </View>*/}
    // {/*  </View>*/}
    // {/*</ImageBackground>*/}
  );
};

export default Splash;
