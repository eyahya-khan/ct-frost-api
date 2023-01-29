import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect, useContext } from "react";
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

const Details = ({ route }) => {
  const detailsContext = useContext(GlobalCont);
  const { id, name } = route.params;
  const [items, setItems] = useState([]);
  const [txtInput, setTxtInput] = useState(0);

  const handleAdd = async () => {
    await AsyncStorage.setItem("id", JSON.stringify(items));
    detailsContext.AddProduct(id, name, txtInput);
  };

  const handleText = (x) => {
    setTxtInput(x);
  };

  useEffect(
    () => {
      setItems(id);
    },
    [id],
    txtInput
  );

  return (
    <View style={styles.container}>
      <CartIcon quantity={txtInput} />
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
              <TextInput
                style={styles.textInput}
                onChangeText={handleText}
                value={txtInput}
                placeholder="1"
                keyboardType="default"
              />
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
    paddingHorizontal: 42,
  },
  quantity: {
    flexDirection: "row",
    marginBottom: 15,
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
