/* eslint-disable semi */

import React from "react";
import {View} from "react-native";
import {globalStyles} from "../../theme/theme";
import PrimaryButton from "../../components/shared/PrimaryButton";
import {useNavigation} from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={globalStyles.container}>
      <PrimaryButton
        title="Products"
        onPress={() => navigation.navigate("Products" as never)}
      />
      <PrimaryButton
        title="Settings"
        onPress={() => navigation.navigate("Settings" as never)}
      />
    </View>
  );
};

export default HomeScreen;
