import { useReducer } from "react";
import { Text, View, Image, Button, StyleSheet } from "react-native";
import { Avatar, Badge } from '@rneui/themed';

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

const Details = ({ route}) => {
  const [quantity, dispatch] = useReducer(reducer, initialValue);
  const { name, image, stock, price, description } = route.params;
  return (
    <View style={styles.container}>
        <View>
          {/* <Avatar
            rounded
            source={{
              uri: 'https://randomuser.me/api/portraits/women/40.jpg',
            }}
            size="large"
          /> */}
          <Image source={require("../assets/icon.png")} style={styles.itemImage}/>
          <Badge
            status="primary"
            value={quantity}
            containerStyle={{ position: 'absolute', top: 5, left: 60 }}
          />
        </View>
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
      <Button title="Add" />
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
    padding:15
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
