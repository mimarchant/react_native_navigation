import React from "react";
import {View, Pressable, Text} from "react-native";
import {globalStyles} from "../../theme/theme";

interface PrimaryButtonProps {
  title: string;
  onPress: () => void;
}

const PrimaryButton = ({title, onPress}: PrimaryButtonProps) => {
  return (
    <Pressable onPress={() => onPress()} style={globalStyles.primaryButton}>
      <Text style={globalStyles.buttonText}>{title}</Text>
    </Pressable>
  );
};

export default PrimaryButton;
