import React from "react";
import {View} from "react-native";

const SingleDot = (props) => {

  return (
    <View style={{
      height: 13,
      width: 13,
      borderRadius: 13,
      backgroundColor: props.color,
      borderColor: "#ffffff",
      alignSelf: "center",
      margin: "2%",
    }}>
    </View>
  );
};

export default SingleDot;
