import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext, useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { GlobalCont } from "../App";
import Feather from "react-native-vector-icons/Feather";

const CartProducts = ({ navigation }) => {
  const cartContext = useContext(GlobalCont);
  const [value, setValue] = useState([]);
  const [buy, setBuy] = useState("Buy");

  const handleRemove = async () => {
    const localId = await AsyncStorage.getItem("id");
    if (localId) {
      await AsyncStorage.removeItem("id").then((value) => {
        setValue(value);
      });
      navigation.navigate("Success");
    }
  };
  const handleDelete = async () => {
    await AsyncStorage.removeItem("id").then((value) => {
      setValue(value);
    });
    setBuy("Deleted");
  };

  // const name = {cartContext.cartItem.name}.replace(/[0-9]/g, '')

  return (
    <View style={styles.container}>
      {value ? (
        <View style={styles.quantity}>
          <Text style={styles.text}>{cartContext.cartItem.name}</Text>
          {/* <Text style={styles.text}>{name}</Text> */}
          <Text style={styles.text}>{cartContext.cartItem.price} kr/st</Text>
          <Text style={styles.text}>
            Total: {cartContext.cartItem.quantity * cartContext.cartItem.price}{" "}
            kr
          </Text>
          <Feather
            onPress={handleDelete}
            name="delete"
            size={22}
            color={"red"}
          />
        </View>
      ) : null}
      <Pressable style={styles.button} onPress={handleRemove}>
        <Text style={styles.btnText}>{buy}</Text>
      </Pressable>
    </View>
  );
};

export default CartProducts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 13,
  },
  text: {
    flex: 1,
    flexWrap: "wrap",
    fontSize: 12,
    marginBottom: 10,
    fontWeight: "bold",
    padding: 1,
  },
  quantity: {
    flexDirection: "row",
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 42,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
  },

  btnText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
