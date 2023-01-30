import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import React from "react";
import { data } from "./ApiData";

const Home = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {data.products.map((data, id) => (
          <View key={id} style={styles.headerWrapper}>
            <Pressable
              style={styles.button}
              onPress={() =>
                navigation.navigate("Details", {
                  id: `${id}`,
                  name: `${data.name}`,
                })
              }
            >
              <Image
                source={{ uri: `${data.imageUrl}` }}
                style={styles.itemImage}
              />
              <Text style={styles.text}>{data.name}</Text>
            </Pressable>
          </View>
        ))}
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
    borderBottomColor: "grey",
    borderBottomWidth: 2,
  },
  itemImage: {
    width: 90,
    height: 90,
    alignSelf: "center",
    marginHorizontal: 20,
    borderRadius: 10,
  },
  headerWrapper: {
    borderBottomColor: "red",
    borderBottomWidth: 2,
    marginBottom: 30,
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
    padding: 5,
  },
});
