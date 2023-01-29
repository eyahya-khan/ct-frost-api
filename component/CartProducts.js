import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext, useReducer, useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { GlobalCont } from "../App";
import Feather from "react-native-vector-icons/Feather";

const reducer = (state, action) => {
  state = Number(state);
  switch (action.type) {
    case "increment":
      if (state < action.value) {
        return state + 1;
      } else {
        if (alert("Large value")) {
          window.location.reload();
        }
      }
    case "decreament":
      if (state >= 2) {
        return state - 1;
      } else {
        if (alert("Small value")) {
          window.location.reload();
        }
      }
    default:
      return 1;
  }
};

const CartProducts = ({ route, navigation }) => {
  const { quant } = route.params;
  const cartContext = useContext(GlobalCont);
  const [value, setValue] = useState([]);
  const [buy, setBuy] = useState("Buy");

  const [quantity, dispatch] = useReducer(reducer, quant);

  const handleRemove = async () => {
    const localId = await AsyncStorage.getItem("id");
    if (localId) {
      navigation.navigate("Success");
      handleDelete();
    }else{
      alert('Go back and click add to cart')
    }
  };
  const handleDelete = async () => {
    await AsyncStorage.removeItem("id").then((value) => {
      setValue(value);
    });
    setBuy("Item Deleted");
  };

  return (
    <View style={styles.container}>
      {value ? (
        <>
          <View style={styles.quantity}>
            <Pressable
              style={styles.buttonIncrease}
              onPress={() =>
                dispatch({
                  type: "decreament",
                  value: cartContext.cartItem.stock,
                })
              }
            >
              <Text style={styles.btnTextIncrease}>-</Text>
            </Pressable>
            <Text style={styles.textQnty}>{quantity}</Text>

            <Pressable
              style={styles.buttonIncrease}
              onPress={() =>
                dispatch({
                  type: "increment",
                  value: cartContext.cartItem.stock,
                })
              }
            >
              <Text style={styles.btnTextIncrease}>+</Text>
            </Pressable>
          </View>
          <View style={styles.quantity}>
            <Text style={styles.text}>{cartContext.cartItem.name}</Text>
            <Text style={styles.text}>{cartContext.cartItem.price} kr/st</Text>
            <Text style={styles.text}>
              Total: {quantity * cartContext.cartItem.price} kr
            </Text>
            <Feather
              onPress={handleDelete}
              name="delete"
              size={22}
              color={"red"}
            />
          </View>
        </>
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
  buttonIncrease: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
    padding: 5,
    borderRadius: 4,
    backgroundColor: "green",
    marginBottom: 15,
  },
  textQnty: {
    fontSize: 22,
    marginBottom: 10,
    fontWeight: "bold",
    padding: 5,
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
