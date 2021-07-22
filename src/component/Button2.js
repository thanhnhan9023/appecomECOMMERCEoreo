import React, { Component } from 'react'
import { Text, View,TouchableOpacity,StyleSheet } from 'react-native'
import Utils from '../app/Utilis';
import FontSize from '../config/FontSize';
import { colors } from '../config/style';
import Loading from './Loading';


class Button2 extends Component {
    render() {
        // Utils.nlog('This prop button__________'+this.props)
        const  {
            title='Sign',
            style={},
            onPress=() =>{},
            styleTxt={} ,
            isloading=false,
        } = this.props
        return (
                <TouchableOpacity  onPress={onPress}  style={{...styles.commontBt,...style,}}  >
                                {isloading ? <Loading/>:
                                <Text style={{...styles.commonText,...styleTxt,}} >
                                        {title}
                                </Text>
                                }
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