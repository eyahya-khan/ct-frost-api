import { StyleSheet, Pressable } from "react-native";
import { Avatar, Badge } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { GlobalCont } from "../App";

const CartIcon = (props) => {
  const navigation = useNavigation();
  const cartIconContext = useContext(GlobalCont);

  const handleCartIcon = async () => {
    {
      props.quantity > 0 && props.quantity <= cartIconContext.cartItem.stock
        ? navigation.navigate("Cartproducts", { quant: `${props.quantity}` })
        : alert("No product selected.");
    }
  };

  return (
    <>
      <Pressable style={styles.container} onPress={handleCartIcon}>
        <Avatar rounded source={require("../assets/cart.png")} size="small" />
        {props.quantity > 0 &&
        props.quantity <= cartIconContext.cartItem.stock ? (
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
