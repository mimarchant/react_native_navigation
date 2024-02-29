import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "../screens/home/HomeScreen";
import SettingsScreen from "../screens/settings/SettingsScreen";
import ProductsScreen from "../screens/products/ProductsScreen";
import ProductScreen from "../screens/products/ProductScreen";

export type StackParamList = {
  Home: undefined;
  Products: {id: string; name: string; price: number};
  Settings: undefined;
  Product: undefined;
};
const Stack = createStackNavigator<StackParamList>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
    </Stack.Navigator>
  );
};
