import { StyleSheet, Pressable } from "react-native";
import { Avatar, Badge } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

const CartIcon = (props) => {
  const navigation = useNavigation();
  return (
    <>
      <Pressable
        style={styles.container}
        onPress={() => navigation.navigate("Cartproducts",{quantity:`${props.quantity}`, id:`${props.id}`})}
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
