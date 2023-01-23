import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const ItemCardContainer =({ imageSrc, title, location }) => {
    return (
        <View>
            <TouchableOpacity className='w-[182px] rounded-md border border-gray-300 px-3 py-3 bg-red'>
                <Image 
                    source={{uri : imageSrc}}
                    className='w-full h-40 object-cover'
                /> 
            </TouchableOpacity>
            <Text>ItemCardContainer</Text>
        </View>
    )
}

export default ItemCardContainer