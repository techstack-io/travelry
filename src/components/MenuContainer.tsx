import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react'


function MenuContainer({ title, imageSrc, type, setType }): JSX.Element {
  return (
    <TouchableOpacity className='items-center justify-center space-y-2'>
      <View className={`w-24 h-24 shadow-sm rounded-full ${type === title.toLowerCase() ? 'bg-gray-200' : ''}`}>
        <Image
          source={imageSrc}
          className='w-full h-full object-contain'
          style={{ width: 50, margin: 32, height: 50}}
        />
      </View>
      <Text className='text-[#F7481D] text-xl pt-4 font-semibold'>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default MenuContainer;