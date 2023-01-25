import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView,
  Pressable,
} from "react-native";
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
              <Text style={{ fontSize: 22, marginBottom:15, fontWeight: "bold" }}>
                {data.name}
              </Text>
              <Text style={{ fontSize: 18, marginBottom:15}}>{data.description}</Text>
              <Pressable
                style={styles.button}
                onPress={() =>
                  navigation.navigate("Details", {
                    name: `${data.name}`,
                    description: `${data.description}`,
                    image: `${data.imageUrl}`,
                    stock: `${data.stock}`,
                    price: `${data.price}`,
                  })
                }
              >
                <Text style={styles.btnText}>Details</Text>
              </Pressable>
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
    width: 90,
    height: 90,
    marginTop: 25,
    marginBottom: 15,
    alignSelf: "center",
    marginHorizontal: 20,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
    marginBottom:25,
  },
  btnText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
