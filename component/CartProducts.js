import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext, useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { GlobalCont } from "../App";

const CartProducts = ({ route, navigation }) => {
  const { quantity, id } = route.params;
  const cartContext = useContext(GlobalCont);
  const [value, setValue] = useState([])

  const handleRemove = async() =>{
    await AsyncStorage.removeItem('id')
    .then((value)=>{
      setValue(value)
    })
 
    navigation.navigate("Success")
  }

  return (
    <View style={styles.container}>
      {cartContext.data.products.map((data, dataId) =>
        dataId == id && value? (
          <View style={styles.quantity}>
            <Text style={styles.text}>{data.name}</Text>
            <Text style={styles.text}>{data.price}</Text>
            <Text>Total: {data.price * quantity} SEK</Text>
          </View>
        ) : null
        )}
      <Pressable
      style={styles.button}
      onPress={handleRemove}
      >
        <Text style={styles.btnText}>Buy</Text>
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
    padding: 10,
    fontSize: 22,
    fontWeight: "bold",
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
