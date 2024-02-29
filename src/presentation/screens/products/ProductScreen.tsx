import React, {useEffect} from "react";
import {View, Text, StyleSheet} from "react-native";
import {useRoute, useNavigation} from "@react-navigation/native";

const ProductScreen = () => {
  const {params} = useRoute();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: params.name,
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>{params.name}</Text>
      <Text>{params.price}</Text>
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
});
