// import AsyncStorage from "@react-native-async-storage/async-storage";
import { StyleSheet, Pressable } from "react-native";
import { Avatar, Badge } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
// import { useState } from "react";

const CartIcon = (props) => {
  // const [value, setValue] = useState([])

  const navigation = useNavigation();

  // AsyncStorage.getItem("quantity").then((value) => {
  //   console.log(value)
  //   setValue(value);
  // });

  return (
    <>
      <Pressable
        style={styles.container}
        onPress={() =>
          navigation.navigate("Cartproducts", {
            quantity: `${props.quantity}`,
            id: `${props.id}`,
          })
        }
      >
        <Avatar rounded source={require("../assets/cart.png")} size="small" />
        {props.cartQuantity ? (
          <Badge
            status="success"
            value={props.quantity}
            containerStyle={{ position: "absolute", top: 2, left: 25 }}
          />
        ) : null}
      </Pressable>
    </>
  );
};

export default CartIcon;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 30,
    right: -110,
  },
});
