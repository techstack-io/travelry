import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { useAuth } from "../hooks/useAuth";
import { MaterialIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Avatar } from "@rneui/themed";
import { Hotels, Attractions, Restaurants } from "../../assets";
import ItemCardContainer from '../components/ItemCardContainer';

export default function HomeScreen() {
  const { user } = useAuth();
  // const { type, setType } = useState("restaurants");

  return (
    // Main View
    <View className="items-center justify-start h-screen bg-white">
      {/* Welcome View */}
      <View className="mx-6 -my-48 h-5/6 flex justify-center items-left align-center space-y-6">
        <Text className="text-black-100 text-left text-xl px-6">
          <Avatar
            size={32}
            rounded
            source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
          />
          Hello {user?.email}!
        </Text>
        {/* Main Text View */}
        <Text
          className="leading-[42px] text-[28px] pb-6"
          style={{ fontFamily: "Urbanist-Light", fontSize: 30 }}
        >
          Where do you want to explore today?
        </Text>
      </View>
      <View className="flex-row w-[350px] items-center -my-20 mx-6 px-4 bg-white rounded-xl shadow-lg">
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
      <View className="flex flex-row my-32 space-x-14">
        <TouchableOpacity>
          <Image source={Hotels} style={{ width: 50, height: 50 }} />
          <Text className="uppercase font-bold">Hotels</Text>
        </TouchableOpacity>
        <TouchableOpacity className="">
          <Image source={Attractions} style={{ width: 50, height: 50 }} />
          <Text className="uppercase font-bold">Hotels</Text>
        </TouchableOpacity>
        <TouchableOpacity className="">
          <Image source={Restaurants} style={{ width: 50, height: 50 }} />
          <Text className="uppercase font-bold">Hotels</Text>
        </TouchableOpacity>
      </View>
      {/* Cards */}
      <View>
        <View className='flex-row items-center gap-4 -mt-24 -ml-44'>
          <Text className="text-xl uppercase">
            Explore
          </Text>
          <TouchableOpacity>
            <MaterialIcons name="explore" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View className='flex-row flex-wrap items-center justify-evenly -my-6 px-4'>
          <ItemCardContainer 
            key={101} 
            imageSrc={'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'} 
            title={'restaurant-1'} 
            location={'Kona'} 
          />
          <ItemCardContainer 
            key={102} 
            imageSrc={'https://lh3.googleusercontent.com/0acXBgqCRGlxqk2SijosLlj3O9PIglqIMMk1pME5GChnVYHXE_JlNgCvubHelUthaigXZxqDdkHzcyS_nLjecnm3aGDmqRVx3GPA2NxmvPEqMXYzFiDo3f56mhWSW5wDopW2PniaOQ=w2400'} 
            title={'restaurant-2'} 
            location={'Waikiloa'} 
          />
        </View>
      {/* You are logged in */}
      {/* <Text className="absolute inset-x-4 bottom-14 ml-4 h-16">
        <Fontisto name="checkbox-active" size={24} color="black" />
        You are logged in
      </Text> */}

      {/* Menu Container */}
      {/* <ScrollView>
        <View className='flex-row w-full h-auto justify-evenly mt-32'>
          <MenuContainer
            key={'hotel'}
            title='Hotels'
            imageSrc={Hotels}
            type={type} 
            setType={setType}          
          />
          <MenuContainer
            key={'attractions'}
            title='Attractions'
            imageSrc={Attractions} 
            type={type} 
            setType={setType}          
          />

          <MenuContainer
            key={'restaurants'}
            title='Restaurants'
            imageSrc={Restaurants} 
            type={type} 
            setType={setType}          
          />
        </View>
    </ScrollView> */}
    </View>
  );
}
