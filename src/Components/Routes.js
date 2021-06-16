import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Colors from "../StyleSheet/Colors";
import Splash from "../Screens/Splash";
import UserModule from "../Screens/UserModule";
import CreatePin from "../Screens/CreatePin";
import Mnemonic from "../Screens/Mnemonics";
import AddMnemonic from "../Screens/AddMnemonics";
import MyTabs from "../Screens/Home";
import Send from "../Screens/Wallet_SendScreen";
import Receive from "../Screens/Wallet_ReceiveScreen";
import TransactionDetail from "../Screens/TransactionDetail";
import Tabs from "../Screens/Tabs";


const Stack = createStackNavigator();

const Routes = ({}) => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen">
          <Stack.Screen name="SplashScreen" component={Splash} options={{ headerShown: false }} />
          <Stack.Screen name="UserModule" component={UserModule} options={{ headerShown: false }} />
          <Stack.Screen name="CreatePin" component={CreatePin} options={{ headerShown: false }} />
          <Stack.Screen name="Mnemonic" component={Mnemonic} options={{ headerShown: false }} />
          <Stack.Screen name="AddMnemonic" component={AddMnemonic} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={MyTabs} options={{ headerShown: false, headerLeft: () => null }} />
          <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false, headerLeft: () => null }} />
          <Stack.Screen name="Send" component={Send} options={{ headerTintColor:Colors.dark, headerStyle: { backgroundColor: Colors.MyAppPrimaryColor, }, }} />
          <Stack.Screen name="Receive" component={Receive} options={{ headerTintColor:Colors.dark, headerStyle: { backgroundColor: Colors.MyAppPrimaryColor, }, }} />
          <Stack.Screen name="TransactionDetail" component={TransactionDetail} options={{ title:"Transaction Detail",headerTintColor:Colors.dark, headerStyle: { backgroundColor: Colors.MyAppPrimaryColor, }, }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
export default Routes;
