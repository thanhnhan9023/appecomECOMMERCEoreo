import React, { Component } from 'react'
import { Text, View,TouchableOpacity,StyleSheet } from 'react-native'
import Utils from '../app/Utilis';
import FontSize from '../config/FontSize';
import { colors } from '../config/style';


class Button2 extends Component {
    render() {
        // Utils.nlog('This prop button__________'+this.props)
        const  {
            title='Sign',
            style={},
            onPress=() =>{},
            styleTxt={} 
        } = this.props
        return (
                <TouchableOpacity  onPress={onPress}  style={{...styles.commontBt,...style,}}  >
                                <Text style={{...styles.commonText,...styleTxt,}} >
                                        {title}
                                </Text>
                </TouchableOpacity>
        )
    }
}

const  styles = StyleSheet.create({
    commontBt:{
        justifyContent:'center',
        alignItems:'center',
        borderRadius:FontSize.scale(3),
        backgroundColor:colors.white,
    },
    commonText:{
        fontSize:FontSize.reText(18),
        color:colors.black,    
        textAlign:'center'
    }
})
export default Button2