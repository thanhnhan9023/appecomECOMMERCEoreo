import React, { Component } from 'react'
import { Text, View,ActivityIndicator } from 'react-native'
import { colors } from '../config/style'

export default class Loading extends Component {
    render() {
        return (
            <View>
                <ActivityIndicator size={'large'}  color={colors.grayLight}/>
            </View>
        )
    }
}
