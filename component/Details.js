import React from "react";
import { useContext } from "react";
import { View, Text } from "react-native";
import globalContext from "./Home";

const Details = () => {
  const data = useContext(globalContext);
  return (
    <View>
      <Text>hello</Text>
    </View>
  );
};

export default Details;
