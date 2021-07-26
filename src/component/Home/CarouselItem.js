import React, { Component } from 'react'
import { Text, View,Image,StyleSheet, Dimensions,ImageBackground,Animated } from 'react-native'
import { colors } from '../../config/style';
import Icon, { TypeIcon } from '../../config/Icon'
import FontSize from '../../config/FontSize'

const {width,height}=Dimensions.get('window')
export default class CarsoulItem extends Component {
    render() {
        const {item,data=null}=this.props
        const scrollX = new Animated.Value(0)
        let position=Animated.divide(scrollX, width)
        return (
            <View style={styles.cardView}>
                <ImageBackground style={styles.image} source={item.img} resizeMode={'stretch'} >
                    <View>
                        <Text style={styles.txtSale}>{'30%  OFF'}</Text>
                        <Text style={styles.txtTitle}>{'New Capp'}</Text>
                    </View>
                </ImageBackground>
                <View style={{
                    position:'absolute',
                    right:FontSize.scale(14),
                    backgroundColor:colors.black,
                    width:FontSize.scale(45),
                    height:FontSize.scale(45),
                    borderRadius:FontSize.scale(45),
                    bottom:FontSize.scale(10),
                    shadowColor:'#000',
                    shadowOffset:{width:FontSize.scale(0.5),height:FontSize.scale(0.5)},
                    shadowOpacity:0.5,
                    shadowRadius:0.5,
                    justifyContent:'center',
                    alignItems:'center'
                    }}>
                        <Icon  type={TypeIcon.AntDesign} name='arrowright' color={colors.white} size={25}/>
                    </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    cardView:{
        flex:1,
        width:FontSize.Width(100),
        height:FontSize.Height(52),
        backgroundColor:'white',
        shadowColor:'#000',
        shadowOffset:{width:0.5,height:0.5},
        shadowOpacity:0.5,
        shadowRadius:0.5,
        elevation:5,
        // backgroundColor:'red'
    },  
    image:
    {
        width:FontSize.Width(100),
        height:FontSize.Height(48),
        alignItems:'flex-end',
        paddingHorizontal:FontSize.scale(14),
        paddingVertical:FontSize.scale(10),
        flexDirection:'row',
        justifyContent:'space-between',
    },
    txtSale:
    {
        fontSize:FontSize.reText(18)
    },
    txtTitle:{
        fontSize:FontSize.reText(40)
    },
    dotView:{
        flexDirection:'row',
        paddingHorizontal:FontSize.scale(10),
    }
})


