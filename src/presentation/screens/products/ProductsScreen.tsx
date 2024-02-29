import React from "react";
import {View, Text, FlatList} from "react-native";
import {globalStyles} from "../../theme/theme";
import PrimaryButton from "../../components/shared/PrimaryButton";
import {useNavigation, NavigationProp} from "@react-navigation/native";
import {StackParamList} from "../../routes/StackNavigator";

const products = [
  {
    id: "1",
    name: "Product 1",
    price: 100,
  },
  {
    id: "2",
    name: "Product 2",
    price: 200,
  },
  {
    id: "3",
    name: "Product 3",
    price: 300,
  },
  {
    id: "4",
    name: "Product 4",
    price: 400,
  },
  {
    id: "5",
    name: "Product 5",
    price: 500,
  },
  {
    id: "6",
    name: "Product 6",
    price: 600,
  },
];

const ProductsScreen = () => {
  const navigation = useNavigation<NavigationProp<StackParamList>>();

  return (
    <View style={globalStyles.container}>
      <Text style={{textAlign: "center", fontSize: 30, marginBottom: 10}}>
        Products
      </Text>

      <FlatList
        data={products}
        renderItem={({item}) => (
          <PrimaryButton
            title={item.name}
            onPress={() => navigation.navigate("Product", {...item})}
          />
        )}
      />

      <PrimaryButton
        title="Settings"
        onPress={() => navigation.navigate("Settings")}
      />
    </View>
  );
};

export default ProductsScreen;
