import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Details from "./component/Details";
import Home from "./component/Home";
import CartProducts from "./component/CartProducts";
import { createContext, useState } from "react";
import CartIcon from "./component/CartIcon";
import Success from "./component/Success"
import { data } from "./component/ApiData";

export const GlobalCont = createContext();

export default function App() {
  const [cartItem, setCartItem] = useState({});
  const [txtInputDisplay, setTxtInputDisplay] = useState(false);

  const Stack = createNativeStackNavigator();

  const AddProduct = (Id, Name, txtInput) => {
    const result = data.products.find(({ name }) => name === Name);
    
    txtInput > result.stock || txtInput < 1
      ? alert("Check stock limit")
      : setTxtInputDisplay(true);

    const newResult = Object.assign(result, { quantity: txtInput }, { id: Id });
    setCartItem(newResult);

    AsyncStorage.setItem("id", JSON.stringify(newResult));
  };

  return (
    <GlobalCont.Provider
      value={{ AddProduct, cartItem, txtInputDisplay }}
    >
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="Carticon" component={CartIcon} />
          <Stack.Screen name="Cartproducts" component={CartProducts} />
          <Stack.Screen name="Success" component={Success} />
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalCont.Provider>
  );
}
