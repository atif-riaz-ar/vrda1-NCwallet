import React from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import * as GS from "../StyleSheet/GeneralStyles";
export const Monogram=()=>{
  return(
    <View style={[GS.contentCenter, GS.Margin(35,0,0,0,"%")]}>
      <Image source={require("../Assets/SplashLogo.png")} style={GS.squareImage(100)}/>
    </View>
  )
}

