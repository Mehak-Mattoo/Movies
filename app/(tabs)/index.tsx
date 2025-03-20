import { Image, ScrollView, View, Text, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import SearchBar from "../components/searchBar";
import { useRouter } from "expo-router";
const MyComponent = () => {
  const router = useRouter();
  return (
    <LinearGradient
      colors={["#322F80", "#0C0A3E"]} // Lighter blue to darker blue
      start={{ x: 0, y: 0 }} // Start at the top
      end={{ x: 0, y: 0.8 }} // End at the bottom
      className="h-full"
    >
      <ScrollView className="m-5">
        <View className="flex items-center justify-center ">
          <Image
            source={require("../../assets/images/logo.png")}
            className="h-16 w-16 resize-contain"
          />
        </View>

        <SearchBar
          onPress={() => {
            router.push("/search");
          }}
          placeholder="Search for a movie"
        />
      </ScrollView>
    </LinearGradient>
  );
};

export default MyComponent;
