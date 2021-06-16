import React, { createContext, useState, useContext } from "react";
import AsyncStorage from "@react-native-community/async-storage";

export const AuthContext = createContext({
  appData: {},
  data: () => null,
  appendData: () => null,
});
const AuthProvider = ({ children }) => {
  const [appData, setAppData] = useState({});
  return (
    <AuthContext.Provider value={{
      appData,
      appendData: async (param1, param2, param3) => {
        //Store in Asyncstorage
        await AsyncStorage.setItem("AUTH_DATA", JSON.stringify({account: param1, key: param2, pin: param3}));
        console.log("88888888888888888888888888888888888888",value);
        // .then(()=>{
        // AsyncStorage.getItem("auth_data")
        //   console.log(AsyncStorage.getItem("auth_data"))
        // })
      },
      data: (param) => {
        Object.keys(param).forEach(key => {
          appData[key] = param[key];
        });
        setAppData(appData);
      },
    }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
