import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Details, { GlobalContext } from "./component/Details";
import Home from "./component/Home";
import CartProducts from "./component/CartProducts";
import { createContext, useState, useEffect } from "react";
import { url } from "./component/ApiData";
import CartIcon from "./component/CartIcon";
import Success from "./component/Success";

export const GlobalCont = createContext()

export default function App() {
  const [data, setData] = useState([])
  const [loading, setLoadoing] = useState(true);
  const Stack = createNativeStackNavigator();
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoadoing(false));
  }, []);
  return (
    <GlobalCont.Provider value={{data, loading}}>
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
