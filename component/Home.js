import React, { useContext} from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import { GlobalCont } from "../App";

const Home = ({ navigation }) => {
  const GlobalConstantData = useContext(GlobalCont)
  return (
    <ScrollView>
      <View style={styles.container}>
        {GlobalConstantData.loading ? (
          <Text>loading....</Text>
        ) : (
          GlobalConstantData.data.products.map((data, id) => (
            <>
              <Image source={{ uri: 'https://reactnative.dev/img/tiny_logo.png', }} style={styles.itemImage}/>
              {/* <Image source={{ uri: `${data.imageUrl}`, }} style={styles.itemImage}/> */}
              <Text style={{ fontSize: 22, marginBottom:15, fontWeight: "bold" }}
              >
                {data.name}
              </Text>
              <Text style={{ fontSize: 18, marginBottom:15}}>{data.description}</Text>
              <Pressable
                style={styles.button}
                onPress={() =>
                  navigation.navigate("Details", {
                    id: `${id}`,
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
