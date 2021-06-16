import React, { useContext, useEffect, useState } from "react";
import { Text, View, TouchableOpacity, ScrollView, Image, RefreshControl, FlatList, ToastAndroid } from "react-native";
import { Background } from "../../StyleSheet/Background";
import axios from "axios";
import * as GS from "../../StyleSheet/GeneralStyles";
import Colors from "../../StyleSheet/Colors";
import { AuthContext } from "../../Components/AuthProvider";

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

export const TransactionScreen = ({ navigation }) => {
  const [refreshing, setRefreshing] = React.useState(false);
  const { appData, data } = useContext(AuthContext);
  const [tx, setTx] = useState([]);
  const [processing, setProcessing] = useState(false);

  if(!processing) {
    setProcessing(true);
    try {
      let conf = {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "d8ef76579a17db9c700b1cdfb02a534829966829",
        },
      };
      axios.get(
        "https://api.cryptoapis.io/v1/bc/eth/ropsten/address/" + appData.address + "/transactions?index=0&limit=30",
        conf,
      ).then(response => {
        setTx(response.data.payload);
      });
    } catch (e) {
      console.log("Error function in working in Transactions Screen", e);
    }
  }
  const onRefresh = React.useCallback(() => {
    setProcessing(false);
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
  }, [tx]);

  const renderItem = ({ item }) => (
    <>
      {
        (item.from).toLowerCase() === (appData.address).toLowerCase() ? (
          <>
            <TouchableOpacity
              onPress={() => {
                var Tdate = tx.date;
                var Tfrom = tx.from;
                var Tto = tx.to;
                var Tfee = tx.fee;
                var Tvalue = (tx.value) / 1000000000000000000;
                var Tstatus = tx.status;
                var Thash = tx.hash;
                navigation.navigate("TransactionDetail", {
                  Tdate,
                  Tfrom,
                  Tto,
                  Tfee,
                  Tvalue,
                  Tstatus,
                  Thash,
                });
              }}
              style={[
                GS.Colour(null, Colors.dark, Colors.white),
                GS.Radius(7, 7, 7, 7),
                GS.BorderWidth(null, null, 2, null),
                GS.Axis("100%", null),
                GS.Padding("3%", "3%", "3%", "3%"),
              ]}>
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={require("../../Assets/transfer.png")}
                  style={[
                    GS.Axis(20, 20),
                  ]}
                />
                <Text style={[
                  GS.font(16, Colors.white),
                  { fontWeight: null },
                ]}>
                  Transfer
                </Text>
                <Text style={[
                  GS.font(16, Colors.white),
                  GS.Padding(null, null, null, "5%"),
                  { fontWeight: null },
                ]}>
                  {((item.value) / 1000000000000000000).toFixed(4)} ETH
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={[
                  GS.Margin("0%", "0%", "0%", "6%", ""),
                  GS.font(13, Colors.lightgray),
                  { fontWeight: null },
                ]}>
                  Sent On: {item.date}
                </Text>
              </View>
            </TouchableOpacity>
          </>
        ) : (<></>)}
      {
      (item.from).toLowerCase() !== (appData.address).toLowerCase() ? (<>
        <TouchableOpacity
          onPress={() => {
            var Tdate = item.date;
            var Tfrom = item.from;
            var Tto = item.to;
            var Tfee = item.fee;
            var Tvalue = (item.value) / 1000000000000000000;
            var Tstatus = item.status;
            var Thash = item.hash;
            navigation.navigate("TransactionDetail", {
              Tdate,
              Tfrom,
              Tto,
              Tfee,
              Tvalue,
              Tstatus,
              Thash,
            });
          }}
          style={[
            GS.Colour(null, Colors.dark, Colors.white),
            GS.Radius(7, 7, 7, 7),
            GS.BorderWidth(null, null, 2, null),
            GS.Axis("100%", null),
            GS.Padding("3%", "3%", "3%", "3%"),
          ]}>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../../Assets/deposit.png")}
              style={[
                GS.Axis(20, 20),
              ]}
            />
            <Text style={[
              GS.font(16, Colors.white),
              { fontWeight: null },
            ]}>
              Deposit
            </Text>
            <Text style={[
              GS.font(16, Colors.white),
              GS.Padding(null, null, null, "5%"),
              { fontWeight: null },
            ]}>
              {((item.value) / 1000000000000000000).toFixed(4)} ETH
            </Text>
          </View>
          <Text style={[
            GS.Margin("0%", "0%", "0%", "6%", ""),
            GS.font(13, Colors.lightgray),
            { fontWeight: null },
          ]}>
            Received On: {item.date}
          </Text>
        </TouchableOpacity>
      </>):(<></>)
      }
    </>
  );
  return (
    <>
      <Background>
        <FlatList
          data={tx}
          renderItem={renderItem}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
        />
      </Background>
    </>
  );
}
