import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Details from "./component/Details";
import Home from "./component/Home";
import CartProducts from "./component/CartProducts";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="CartProducts" component={CartProducts} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
