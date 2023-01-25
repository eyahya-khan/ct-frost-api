import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, Button, ScrollView } from "react-native";
import { url } from "./ApiData";

const Home = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [loading, setLoadoing] = useState(true);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoadoing(false));
  }, []);

  return (
    <ScrollView>

    <View style={styles.container}>
      {loading ? (
          <Text>loading....</Text>
          ) : (
              data.products.map((data) => (
                  <>
            {/* <Image source={{ uri: `${data.imageUrl}` }} style={styles.itemImage}/> */}
            <Image
              source={require("../assets/icon.png")}
              style={styles.itemImage}
              />
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              {data.name}
            </Text>
            <Text style={{ fontSize: 16 }}>{data.description}</Text>
            <Button
              title="Details"
              onPress={() =>
                navigation.navigate("Details", {
                    name: `${data.name}`,
                    description: `${data.description}`,
                    image: `${data.imageUrl}`,
                    stock: `${data.stock}`,
                    price: `${data.price}`,
                })
            }
            />
          </>
        ))
        )}
    </View>
        </ScrollView>
  );
};

export default Home;

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
});
