import React from 'react';
import { Text, Pressable,Image, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';


function WelcomeScreen<StackScreenProps>({ navigation }) {
  return (
    <View className="w-full h-full bg-white">

      <View className="mx-4 h-full flex justify-center align-center space-y-6">
      <View>
      <Image source={require('../../assets/travelry-logo.png')} style={{width: 350, height: 250, alignSelf: 'center'}}/>
      </View>
      <Text className="text-blue text-2xl font-bold text-center mx-6" ></Text>
      {/* <Text className="text-black text-base text-center mx-4" >Do you need a reliable travel advisor? Book a hotel, find a restaurant, find popular attractions and book excursions!</Text> */}
      <View >
        <Pressable className="bg-white border-2 border-[#F6481D] rounded-3xl py-4 px-4 m-4" ><Text className="text-center text-black font-bold text-base uppercase" onPress={() => navigation.navigate('Sign In')}>Sign In</Text></Pressable>
        <Pressable className="bg-[#F6481D] rounded-3xl py-4 px-4 m-4" ><Text className="text-center text-white font-bold text-base uppercase" onPress={() => navigation.navigate('Sign Up')}>Sign Up</Text></Pressable>
      </View>
    </View>
    </View>
  );
}


export default WelcomeScreen;
