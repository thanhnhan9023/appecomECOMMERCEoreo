import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import { Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../config/style';

const ButtonLinear=(props) =>{
    const {title='',style={},txtStyle={},onPress=() =>{},
    color=[colors.white,colors.whiteTwo],styleContainer={}
}= props
    return(
        <TouchableOpacity onPress={onPress} style={styleContainer}>
            <LinearGradient  colors={color} style={style}>
                <Text style={txtStyle} >{title}</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

export default ButtonLinear
