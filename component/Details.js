import AsyncStorage from "@react-native-async-storage/async-storage";
import { useReducer, useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  Pressable,
  TextInput,
} from "react-native";
import CartIcon from "./CartIcon";

const initialValue = 1;
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state < action.value ? state + 1 : state;

    case "decreament":
      return state >= 2 ? state - 1 : state;
    default:
      return initialValue;
  }
};

const Details = ({ route }) => {
  const [quantity, dispatch] = useReducer(reducer, initialValue);
  const { name, id, image, stock, price, description } = route.params;
  const [cartQuantity, setCartQuantity] = useState(false);
  const [items, setItems] = useState([]);
  // const [itemQuantity, setItemQuantity] = useState([]);

  const handleAdd = async() => {
    await AsyncStorage.setItem('id', JSON.stringify(items))
    // await AsyncStorage.setItem('quantity', JSON.stringify(itemQuantity))
    setCartQuantity(true);
  };
  
  useEffect(()=>{
    setItems(id)
    // setItemQuantity(quantity)
  },[])

  return (
    <View style={styles.container}>
      <CartIcon quantity={quantity} cartQuantity={cartQuantity} id={id}/>
      <Image source={image} />
      <Text style={styles.text}>
        {name}
      </Text>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>{description}</Text>
      <Text style={styles.text}>{price} SEK /st</Text>
      <Text style={styles.text}>In Stock: {stock}</Text>
      <View style={styles.quantity}>
        <Pressable
          style={styles.buttonIncrease}
          onPress={() => dispatch({ type: "decreament", value: stock })}
        >
          <Text style={styles.btnTextIncrease}>-</Text>
        </Pressable>
        {/* <TextInput
            style={styles.textInput}
            onChangeText={setQuantity}
            value={quantity}
            placeholder="1"
            keyboardType="numeric"
            /> */}
        <Text style={styles.text}>{quantity}</Text>

        <Pressable
          style={styles.buttonIncrease}
          onPress={() => dispatch({ type: "increment", value: stock })}
        >
          <Text style={styles.btnTextIncrease}>+</Text>
        </Pressable>
      </View>
      <Pressable style={styles.button} onPress={handleAdd}>
        <Text style={styles.btnText}>Add to cart</Text>
      </Pressable>
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
    padding:5,
  },
  itemImage: {
    width: 60,
    height: 60,
    marginTop: 25,
    alignSelf: "center",
    marginHorizontal: 20,
  },
  textInput: {
    // height: 40,
    // margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 22,
    fontWeight: "bold",
  },
  quantity: {
    flexDirection: "row",
    // justifyContent: "center",
    // marginTop: 25,
    
  },
  buttonIncrease: {
    alignItems: "center",
    justifyContent: "center",
    // paddingVertical: 5,
    paddingHorizontal: 15,
    padding: 5,
    borderRadius: 4,
    // elevation: 3,
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
    // lineHeight: 21,
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
