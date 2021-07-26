import React, { Component } from 'react'
import { Text, View,StyleSheet} from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import FontSize from '../config/FontSize'
import { colors } from '../config/style'

export default class NumberCart extends Component {
    render() {
        const {number=''}=this.props
        return (
            <View style={styles.Container}>
                <Text style={styles.TextNumber}>{''+number}</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
Container:{
    width:FontSize.scale(20),
    height:FontSize.scale(20),
    borderRadius:FontSize.scale(20),
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:colors.redStar,
},
TextNumber:{
    color:colors.white,
    fontSize:RFValue(14,FontSize.Height(100)),
}

})
