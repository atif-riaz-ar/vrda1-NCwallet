import React, {useState, useEffect} from "react";
import {Text} from "react-native";
import * as Colors from "../StyleSheet/Colors";
import getUsd from "./getUsd";

const USD = (props) => {
  const [usd, setUSD] = useState("0");

  useEffect(() => {
    const interval = setInterval(() => setUSD(getUsd._W), 100);
    return () => {
      clearInterval(interval);
    }
  }, []);
  return (
    <Text
      style={{
        justifyContent: "center",
        marginLeft: "2%",
        color: Colors.default.white,
        fontSize:14
      }}>
      {(usd * props.usd).toFixed(2)}
    </Text>
  );
}
export default USD;
