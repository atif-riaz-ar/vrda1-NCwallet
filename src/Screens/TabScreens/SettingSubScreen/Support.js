import React from "react";
import {ScrollView, Text} from "react-native";

export const SupportScreen = ({}) => {
  return (
    <ScrollView>
      <Text style={{ marginLeft: 25, marginRight: 25, textAlign: "justify" }}>
        {"\n"}Crypto wallet was made to meet the demands of both
        beginner and advanced users, thus it combines a high
        level of security and complete anonymity together with
        a simple, yet eye-catching interface.{"\n"}{"\n"}
        Crypto wallet application works on both Android and
        ios devices.{"\n"}{"\n"}
        Security{"\n"}{"\n"}
        Private keys are generated on the user's
        device and never sent or stored outsIde of
        it. Crypto wallet application makes sure that you
        always remain the only person in charge of your funds.{"\n"}{"\n"}
        Usability{"\n"}{"\n"}
        You can store and exchange digital assets in just a few
        clicks. You can organize your digital asset portfolio
        in the most convenient way by hiding, exposing, and
        shifting digital assets.{"\n"}{"\n"}
        Crypto Wallet Team{"\n"}{"\n"}
        Our team is always ready for new ideas and
        Suggestions. we are absolutely customer-focused
        that's why we're always improving our wallet and
        adding more features to make your work with
        cryptocurrency smooth and comfortable.
      </Text>
    </ScrollView>
  );
};
