import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { Search } from "lucide-react-native";

interface Props {
  placeholder: string;
  onPress?: () => void;
}

const SearchBar = ({ onPress, placeholder }: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      className="flex-row mx-auto items-center justify-center rounded-full p-2 "
    >
      <Search size={18} color={"white"} />
      <TextInput
        className=" ml-2"
        placeholder={placeholder}
        value=""
        onChangeText={() => {}}
        placeholderTextColor="#A0AEC0"
        editable={false} // To prevent keyboard popup if just routing
      />
    </TouchableOpacity>
  );
};

export default SearchBar;
