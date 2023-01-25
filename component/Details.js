import { createContext, useEffect, useReducer, useState } from "react";
import { Text, View, Image, Button, StyleSheet,Pressable } from "react-native";
import CartIcon from "./CartIcon";

const initialValue = 1;
export const GlobalContext = createContext();

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
  const { name, image, stock, price, description } = route.params;

  const [cartQuantity, setCartQuantity] = useState(true);

  return (
    <GlobalContext.Provider value={{ quantity, cartQuantity }}>
      <View style={styles.container}>
        <CartIcon />
        <Image source={image} />
        <Text style={styles.text}> {name}</Text>
        <Text style={{ fontSize: 18, marginBottom: 10 }}>{description}</Text>
        <Text style={styles.text}>{price} SEK /st</Text>
        <Text style={styles.text}>In Stock: {stock}</Text>
        <View style={styles.quantity}>
          <Button
            title="-"
            onPress={() => dispatch({ type: "decreament" })}
            style={styles.button}
          />
          {/* <TextInput
        style={styles.input}
        onChangeText={setQuantity}
        value={quantity}
        placeholder="1"
        keyboardType="numeric"
      /> */}
          <Text>{quantity}</Text>
          <Button
            title="+"
            onPress={() => dispatch({ type: "increment", value: stock })}
            style={styles.button}
          />
        </View>
        <Pressable style={styles.button}>
          <Text style={styles.btnText}>Add</Text>
        </Pressable>
      </View>
    </GlobalContext.Provider>
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
  },
  itemImage: {
    width: 60,
    height: 60,
    marginTop: 25,
    alignSelf: "center",
    marginHorizontal: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  quantity: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 25,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  btnText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
