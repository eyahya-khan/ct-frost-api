import { createContext, useEffect, useReducer, useState } from "react";
import { Text, View, Image, Button, StyleSheet } from "react-native";
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

  const [cartQuantity, setCartQuantity] = useState(true)
  
  return (
    <GlobalContext.Provider value={{quantity, cartQuantity}}>
      <View style={styles.container}>
        <CartIcon />
        <Image source={image} />
        <Text style={{ fontSize: 16, fontWeight: "bold" }}> {name}</Text>
        <Text>In details: {description}</Text>
        <Text>Price: {price} SEK</Text>
        <Text>In Stock: {stock}</Text>
        <View style={styles.quantity}>
          <Button title="-" onPress={() => dispatch({ type: "decreament" })} />
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
          />
        </View>
        <Button title="Add" onPress={()=>setCartQuantity(false)}/>
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
    padding: 15,
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
});
