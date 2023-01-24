import { Text, View, Image, Button, StyleSheet } from "react-native";

const Details = ({ route }) => {
  const { name, image, stock, price, description } = route.params;
  return (
    <View style={styles.container}>
      <Image source={image}/>
      <Text style={{ fontSize: 16, fontWeight: "bold" }}> {name}</Text>
      <Text>In details: {description}</Text>
      <Text>In Stock: {stock}</Text>
      <Text>Price: {price} SEK</Text>
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
  },
  itemImage: {
    width: 60,
    height: 60,
    marginTop: 25,
    alignSelf: "center",
    marginHorizontal: 20,
  },
});
