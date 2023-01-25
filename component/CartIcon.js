import { View, StyleSheet, Text, Pressable } from "react-native";
import { Avatar, Badge, Button } from "@rneui/themed";
import React, { useContext, useEffect } from "react";
import { GlobalContext } from "./Details";

const CartIcon = ({ navigation }) => {
  const GlobalContextData = useContext(GlobalContext);
  return (
    <Pressable
      style={styles.container}
    //   onPress={() => navigation.navigate("cartProducts")}
    >
      <Avatar rounded source={require("../assets/cart.png")} size="small" />
      {GlobalContextData.cartQuantity ? (
        <Badge
          status="success"
          value={GlobalContextData.quantity}
          containerStyle={{ position: "absolute", top: 2, left: 25 }}
        />
      ): null}
    </Pressable>
  );
};

export default CartIcon;

const styles = StyleSheet.create({
  container: {
    // marginTop: -50,
    marginBottom: 50,
    right: -110,
  },
});
