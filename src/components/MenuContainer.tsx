import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react'
import { Image } from 'react-native';

const MenuContainer = ({ title, imageSrc }) => {
  return (
    <TouchableOpacity className='items-center justify-center space-y-2'>
      <View className='w-24 h-24 shadow-sm rounded-full'>
        <Image
            source={imageSrc}
        />

      </View>
    </TouchableOpacity>
  )
}

export default MenuContainer