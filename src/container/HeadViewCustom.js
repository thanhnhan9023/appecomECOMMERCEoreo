import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'
import FontSize from '../config/FontSize'
import Icon from '../config/Icon'
import { Context } from '../config/ThemeProvider2'

export default class HeadViewCustom extends Component {
    render() 
{
    const {ViewLeft,ViewCenter
        ,ViewRight
        ,ContainerStyle={},
        LeftContainerStyle={},
        CenterContainerStyle={},
        RightContainerStyle={}}
        =this.props
        return (
                <View style={{...styles.Container,ContainerStyle}}>
                    {ViewLeft ? 
                    (
                        <View style={[{padding:0,flexDirection:'row'},LeftContainerStyle]}>
                                {ViewLeft}
                        </View>
                    ):null}
                    {ViewCenter?
                    (
                        <View style={[{padding:0,flexDirection:'row'},CenterContainerStyle]}>
                                {ViewCenter}
                        </View>
                    ):null}
                    {ViewRight?
                    (
                        <View style={[{padding:0,flexDirection:'row'},RightContainerStyle]}>
                                {ViewRight}
                        </View>
                    ):null}
                </View>
           
        )
    }
}
const styles = StyleSheet.create({
    Container:{
        paddingVertical:FontSize.scale(10),
        paddingHorizontal:FontSize.scale(15),
        height:FontSize.scale(60),
        justifyContent:'space-between',
        flexDirection:'row'
    }
})
