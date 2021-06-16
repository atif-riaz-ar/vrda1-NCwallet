import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import axios from "axios";
import Colors from "../StyleSheet/Colors";

const USD = ({}) => {
  const [usd, setUSD] = useState("");

  useEffect(() => {
    setInterval(()=>{


    axios.post("https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD")
      .then(function(response) {
        setUSD(response.data.USD)
      })
      .catch(err => {
        // handle error
        console.log("Err function is working in USD.JS Screen", err);
      });
    }, 5000)
  }, []);
  return (
    <Text
      style={{
        fontSize: 14,
        color: Colors.white,
      }}>{usd}</Text>
  );
};
export default USD;
