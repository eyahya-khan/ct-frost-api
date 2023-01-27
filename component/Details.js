import AsyncStorage from "@react-native-async-storage/async-storage";
import { useReducer, useState, useEffect, useContext } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  Pressable,
  TextInput,
} from "react-native";
import { GlobalCont } from "../App";
import CartIcon from "./CartIcon";

const initialValue = 1;
const reducer = (state, action) => {
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
      return initialValue;
  }
};

const Details = ({ route }) => {
  const detailsContext = useContext(GlobalCont);

  const [quantity, dispatch] = useReducer(reducer, initialValue);
  const { id, name } = route.params;
  const [cartQuantity, setCartQuantity] = useState(false);
  const [items, setItems] = useState([]);
  const [itemQuantity, setItemQuantity] = useState([]);
  // const [txtInput, setTxtInput] = useState(initialValue);
  // console.log(txtInput);

  const handleAdd = async () => {
    await AsyncStorage.setItem("id", JSON.stringify(items));
    await AsyncStorage.setItem("quantity", JSON.stringify(itemQuantity));
    setCartQuantity(true);
    detailsContext.AddProduct(id, name, itemQuantity);
  };

  // const handleText = (x) => {
  //   setTxtInput(x) 
  // };

  useEffect(() => {
    setItems(id);
    setItemQuantity(quantity);
  }, [id, quantity]);

  return (
    <View style={styles.container}>
      <CartIcon quantity={quantity} cartQuantity={cartQuantity} />
      {detailsContext.data.products.map((data, Id) =>
        Id == id ? (
          <>
            <Image source={data.imageUrl} />
            <Text style={styles.text}>{data.name}</Text>
            <Text style={{ fontSize: 18, marginBottom: 10 }}>
              {data.description}
            </Text>
            <Text style={styles.text}>{data.price} kr /st</Text>
            <Text style={styles.text}>In Stock: {data.stock}</Text>
            <View style={styles.quantity}>
              <Pressable
                style={styles.buttonIncrease}
                onPress={() =>
                  dispatch({ type: "decreament", value: data.stock })
                }
              >
                <Text style={styles.btnTextIncrease}>-</Text>
              </Pressable>
              {/* <TextInput
                style={styles.textInput}
                onChangeText={handleText}
                value={txtInput}
                placeholder="1"
                keyboardType="default"
              /> */}
              <Text style={styles.text}>{quantity}</Text>

              <Pressable
                style={styles.buttonIncrease}
                onPress={() =>
                  dispatch({ type: "increment", value: data.stock })
                }
              >
                <Text style={styles.btnTextIncrease}>+</Text>
              </Pressable>
            </View>
            <Pressable style={styles.button} onPress={handleAdd}>
              <Text style={styles.btnText}>Add to cart</Text>
            </Pressable>
          </>
        ) : null
      )}
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 13,
  },
  text: {
    fontSize: 22,
    marginBottom: 10,
    fontWeight: "bold",
    padding: 5,
  },
  itemImage: {
    width: 60,
    height: 60,
    marginTop: 25,
    alignSelf: "center",
    marginHorizontal: 20,
  },
  textInput: {
    borderWidth: 1,
    fontSize: 18,
    fontWeight: "bold",
    paddingLeft: 10,
    paddingRight: 10,
  },
  quantity: {
    flexDirection: "row",
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
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 42,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
  },
  btnTextIncrease: {
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  btnText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
