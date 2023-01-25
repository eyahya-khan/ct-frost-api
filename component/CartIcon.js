import { View, StyleSheet, Text } from "react-native";
import { Avatar, Badge } from "@rneui/themed";
import React, { useContext, useEffect } from "react";
import { GlobalContext } from "./Details";

const CartIcon = ({ navigation }) => {
  const GlobalContextData = useContext(GlobalContext);
  // useEffect(()=>{
  //     GlobalContext.cartQuantity
  // })
  return (
    <View style={styles.container}>
      <Avatar rounded source={require("../assets/cart.png")} size="small" />
      {GlobalContext.cartQuantity ? null : (
        <Badge
          status="success"
          value={GlobalContextData.quantity}
          containerStyle={{ position: "absolute", top: 2, left: 25 }}
        />
      )}
    </View>
  );
};

export default CartIcon;

const styles = StyleSheet.create({
  container: {
    marginTop: -180,
    marginBottom: 50,
    right: -110,
  },
});
