import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";

const Home = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [loading, setLoadoing] = useState(true);
  const url = "http://cat-store-api.frostdigital.se/api";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoadoing(false));
  }, []);


  return (
    <View style={styles.container}>
      {/* <globalContext.Provider value={data}> */}
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
                onPress={() => navigation.navigate("Details")}
              />
            </>
          ))
        )}
      {/* </globalContext.Provider> */}
    </View>
  );
};

export default Home;

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
