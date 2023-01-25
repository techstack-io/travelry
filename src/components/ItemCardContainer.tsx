import { View, Text, TouchableOpacity, Image } from 'react-native'
import { Entypo } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 

import React from 'react'

type ItemCards = {
    imageSrc: string;
    title: string;
    location: string;
}

const ItemCardContainer: React.FunctionComponent<ItemCards> = ({ imageSrc, title, location }) => {
    return (
        <View>
            <TouchableOpacity>
                <Image 
                    source={{uri:imageSrc}}
                    style={{width: 178, height: 160, borderWidth: 6, borderColor: 'white'}}
                /> 
                <View>
                    <Text style={{padding: 2}}>{title?.length > 14 ? `${title.slice(0, 14)}...` : title} {location}
                        <Ionicons name="location-outline" size={24} color="black" />
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default ItemCardContainer