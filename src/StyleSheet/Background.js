import React from 'react';
import {ImageBackground} from 'react-native';
import * as GS from "../StyleSheet/GeneralStyles";

export const Background= ({children}) =>{
  return(
    <ImageBackground source={require("../Assets/SplashBg.png")} style={GS.fullDisplay}>
      {children}
    </ImageBackground>

  );
}
