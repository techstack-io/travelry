import React from "react";
import { Text, View, ScrollView } from "react-native";
import { useAuth } from "../hooks/useAuth";
import { MaterialIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Avatar } from "@rneui/themed";
import MenuContainer from "../components/MenuContainer";
import { Hotels } from "../../assets";

export default function HomeScreen() {
  const { user } = useAuth();

  return (
    <View className="w-full h-full bg-white">
      <View className="mx-8 -my-36 h-5/6 flex justify-center align-center space-y-6">
        <Text className="text-black-100 text-left text-xl px-6 pb-2">
          <Avatar
            size={32}
            rounded
            source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
          />
          Hello {user?.email}!
        </Text>
        <Text
          className="leading-[42px] text-[28px]"
          style={{ fontFamily: "Urbanist-Light", fontSize: 30 }}
        >
          Where do you want to explore today?
        </Text>
      </View>
      <View className="flex-row w-[350px] items-center justify-center -my-24 mx-6 py-1 px-4 bg-white rounded-xl shadow-lg">
        <MaterialIcons name="search" size={24} color="black" />
        {/* Google Search */}
        <GooglePlacesAutocomplete
          GooglePlacesDetailsQuery={{ fields: "geometry" }}
          placeholder="Search"
          fetchDetails={true}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(details?.geometry?.viewport);
          }}
          query={{
            key: "AIzaSyBF6Sq7hU3Y3hm8IKRZ2Jt-29fORr5PSbk",
            language: "en",
          }}
        />
      </View>
      <Text className="absolute inset-x-4 bottom-0 h-16">
        <Fontisto name="checkbox-active" size={24} color="black" />
        You are logged in
      </Text>
      {/* Menu Container */}
      <ScrollView>
        <View className='flex-row items-left my-32 justify-left px-10 py-4 inline'>
          <MenuContainer
            key={'hotel'}
            title='Hotels'
            imageSrc = {Hotels}
          />
        </View>
    </ScrollView>
    </View>
  );
}
