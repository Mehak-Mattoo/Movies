import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Bookmark,  House, Search, User } from "lucide-react-native";
import { LucideIcon } from "lucide-react-native";
const FocusedIcon = ({
  Icon,
  focused,
  title,
}: {
  Icon: LucideIcon;
  focused: boolean;
  title:string;
}) => {
  if (focused) {
    return (
      <View className="min-w-[7rem] md:min-w-[8rem] py-[20px] md:py-[18px]  bg-bone  rounded-full flex flex-row items-center justify-center">
        <Icon size={18}  />
        <Text
          className={`font-bold ml-2` }
        >
          {title}
        </Text>
      </View>
    );
  }

  return (
    <View className="min-w-[8rem] flex flex-row items-center justify-center">
      <Icon size={18} color="white" />
    </View>
  );
};

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#0C0A3E",
          position: "absolute",
          borderColor: "transparent",
          borderRadius: 60,
          marginHorizontal: 20,
          marginBottom: 15,
          overflow: "hidden",
        },
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Home",

          tabBarIcon: ({ focused }) => (
            <FocusedIcon focused={focused} Icon={House} title={"Home"} />
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          headerShown: false,
          title: "Search",
          tabBarIcon: ({ focused }) => (
            <FocusedIcon focused={focused} Icon={Search} title={"Search"} />
          ),
        }}
      />

      <Tabs.Screen
        name="saved"
        options={{
          headerShown: false,
          title: "Saved",
          tabBarIcon: ({ focused }) => (
            <FocusedIcon focused={focused} Icon={Bookmark} title={"Saved"} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <FocusedIcon focused={focused} Icon={User} title={"Profile"} />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;

const styles = StyleSheet.create({});
