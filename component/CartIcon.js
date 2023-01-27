import { StyleSheet, Pressable } from "react-native";
import { Avatar, Badge } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CartIcon = (props) => {
  const navigation = useNavigation();
  
  // const localQty = AsyncStorage.getItem("quantity")

  const handleCartIcon = async() =>{
    const localId = await AsyncStorage.getItem("id")
    if(localId){
      navigation.navigate("Cartproducts")
    }else{
      alert('Click Add to cart')
    }
  }

  return (
    <>
      <Pressable
        style={styles.container}
        onPress={handleCartIcon}
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
