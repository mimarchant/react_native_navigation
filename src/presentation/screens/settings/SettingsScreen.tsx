import React from "react";
import {View, Text} from "react-native";
import {globalStyles} from "../../theme/theme";
import PrimaryButton from "../../components/shared/PrimaryButton";
import {useNavigation} from "@react-navigation/native";

const SettingsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={globalStyles.container}>
      <Text style={{textAlign: "center", marginBottom: 20}}>
        Settings Screen
      </Text>
      <PrimaryButton title="Go back" onPress={() => navigation.goBack()} />
      <PrimaryButton title="Go to Home" onPress={() => navigation.popToTop()} />
    </View>
  );
};

export default SettingsScreen;
