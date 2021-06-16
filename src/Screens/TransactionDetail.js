import React from "react";
import { Image, Text, View } from "react-native";
import * as GS from "../StyleSheet/GeneralStyles";
import Colors from "../StyleSheet/Colors";

const TransactionDetail = ({ route }) => {
  var date = route.params.Tdate;
  var from = route.params.Tfrom;
  var to = route.params.Tto;
  var value = route.params.Tvalue;
  var status = route.params.Tstatus;
  var fee = route.params.Tfee;
  var hash = route.params.Thash;
  return (
    <>
      <View style={[
        GS.Margin("6%", "6%", "6%", "6%", ""),
        GS.Axis("100%", null),
      ]}>
        <View style={{ flexDirection: "row" }}>
          <Text style={[
            GS.font(15, Colors.dark),
          ]}>
            Transaction On:
          </Text>
          <Text style={{ marginHorizontal: "5%" }}>
            {date}
          </Text>
        </View>
        <View style={[
          GS.Axis("88%", 250),
          GS.Radius(10, 10, 10, 10),
          GS.BorderWidth(2, 2, 2, 2),
          GS.Margin("5%", "0%", "5%", "0%", ""),
        ]}>
          <View style={{ margin: "4%" }}>
            <View style={[
              GS.Axis("80%", null),
              GS.Flex(null, "row"),
            ]}>
              <Text style={[
                GS.Axis("30%", null),
                GS.Align(null, null, null, "center"),
                { fontWeight: "bold" },
              ]}>From</Text>
              <Text style={{fontWeight:"bold"}}>=  </Text>
              <Text style={[
                GS.Axis("88%", null),
              ]}>{from}</Text>
            </View>
            <View style={[
              GS.Axis("80%", null),
              GS.Flex(null, "row"),
            ]}>
              <Text style={[
                GS.Axis("30%", null),
                GS.Align(null, null, null, "center"),
                { fontWeight: "bold" },
              ]}>To</Text>
              <Text style={{fontWeight:"bold"}}>=  </Text>
              <Text style={[
                GS.Axis("88%", null),
              ]}>{to}</Text>
            </View>
            <View style={[
              GS.Axis("80%", null),
              GS.Flex(null, "row"),
            ]}>
              <Text style={[
                GS.Axis("30%", null),
                GS.Align(null, null, null, "center"),
                { fontWeight: "bold" },
              ]}>Value</Text>
              <Text style={{fontWeight:"bold"}}>=  </Text>
              <Text style={[
                GS.Axis("100%", null),
              ]}>{value} ETH</Text>
            </View>
            <View style={[
              GS.Axis("80%", null),
              GS.Flex(null, "row"),
            ]}>
              <Text style={[
                GS.Axis("30%", null),
                GS.Align(null, null, null, "center"),
                { fontWeight: "bold" },
              ]}>Status</Text>
              <Text style={{fontWeight:"bold"}}>=  </Text>
              <Text style={[
                GS.Axis("100%", null),
              ]}>{status === "0x1"?(<Text style={{color:"#3e922f"}}>Success</Text>):(<Text style={{color:"#891728"}}>Fail</Text>)}</Text>
            </View>
            <View style={[
              GS.Axis("80%", null),
              GS.Flex(null, "row"),
            ]}>
              <Text style={[
                GS.Axis("30%", null),
                GS.Align(null, null, null, "center"),
                { fontWeight: "bold" },
              ]}>Fee</Text>
              <Text style={{fontWeight:"bold"}}>=  </Text>
              <Text style={[
                GS.Axis("100%", null),
              ]}>{fee}</Text>
            </View>
            <View style={[
              GS.Axis("80%", null),
              GS.Flex(null, "row"),
            ]}>
              <Text style={[
                GS.Axis("30%", null),
                GS.Align(null, null, null, "center"),
                { fontWeight: "bold" },
              ]}>Tx Hash</Text>
              <Text style={{fontWeight:"bold"}}>=  </Text>
              <Text style={[
                GS.Axis("88%", null),
              ]}>{hash}</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};
export default TransactionDetail;
