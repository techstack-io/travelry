import React from 'react';
import { Text, View } from 'react-native';
import { useAuth } from '../hooks/useAuth';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';




export default function HomeScreen() {
  const { user } = useAuth();

  return (
    <View className="w-full h-full bg-white">
      <View className="mx-8 -my-28 h-5/6 flex justify-center align-center space-y-6">
        <MaterialCommunityIcons 
          name="hand-wave" 
          size={28} 
          color="orange" />
        <Text className="text-black-100 text-left text-xl">
          Hello {user?.email}!</Text>
        <Text className='text-black-200 text-4xl leading-10 font-semibold'>
          Where do you want to explore today?
        </Text>
      </View>
      <View className='flex-row items-center justify-center mx-4 py-1 px-4 bg-white rounded-xl shadow-lg'>
      <MaterialIcons name="search" size={24} color="black" />
      <GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: 'AIzaSyBF6Sq7hU3Y3hm8IKRZ2Jt-29fORr5PSbk',
        language: 'en',
      }}
    />
      </View>
    </View>
    
  );
}

