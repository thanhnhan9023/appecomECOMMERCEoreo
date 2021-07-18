import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import { FlatList } from 'react-native';
import { View, Text,TouchableOpacity,StyleSheet} from 'react-native';
import Utils from '../../app/Utilis';
import FontSize from '../../config/FontSize';
import Icon, { TypeIcon } from '../../config/Icon';
import { colors } from '../../config/style';


export default class ProductHorizontal extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      }
      componentDidMount(){
          
      }
_renderItem({item,index})
{
    // const {OnPress=() =>{} }=this.props
            return(
                <View style={{height:FontSize.scale(350),width:FontSize.scale(250),marginRight:FontSize.scale(10)}}>
                <View style={{flex:7,backgroundColor:colors.grayLight,flexDirection:'row'}}>
                                <ImageBackground  source={item.img} style={{position:'absolute',width:'100%' ,height:'100%'}}>
                                </ImageBackground>
                        <View style={{flex:2,justifyContent:'space-between',alignItems:'flex-end',paddingVertical:FontSize.verticalScale(8),paddingHorizontal:FontSize.scale(8)}}>
                            <Icon type={TypeIcon.AntDesign} name={'hearto'} color={colors.white} size={22} ></Icon>
                            <TouchableOpacity >
                            <Icon type={TypeIcon.AntDesign} name={'plussquare'}   size={30}></Icon>
                            </TouchableOpacity>
                        </View>
                </View>
                <View style={{height:FontSize.scale(10)}}>
                </View>
                <Text style={{color:colors.grayLight,fontSize:FontSize.reText(18)}}>{item.name}</Text>
                <Text style={{fontSize:FontSize.reText(25)}}>{item.price}</Text>

            </View>
            )
}
  render() {
      const {txtLeft=null,txtRight=null,styleTextLeft={},datanew=[]}=this.props
      // Utils.nlog('data=====================:',datanew)
    return (
      <View style={{backgroundColor:colors.white,paddingVertical:FontSize.scale(15)}}>
          <View style={{flexDirection:'row',paddingHorizontal:FontSize.scale(12),justifyContent:'space-between'}}>
                <Text style={{...styles.StyleTextLeftBasic,...styleTextLeft}} >{txtLeft}</Text>
                <Text style={styles.styleTxt}>{txtRight}</Text>
                </View>
                <View
                style={{height:FontSize.scale(20)}}
                />
                      <FlatList
                        showsHorizontalScrollIndicator={false}
                        style={{height:FontSize.scale(400),backgroundColor:'white',paddingHorizontal:FontSize.scale(15)}}
                        renderItem={this._renderItem}
                        data={datanew}
                        horizontal={true}
                        keyExtractor={(item,index) => index}
                      >
                      </FlatList>
      </View>
    );
  }
}
const styles = StyleSheet.create({
       StyleTextLeftBasic : {
          ...FontSize.TextStyles.semiBold,
           fontSize:FontSize.sizes.sText22
      },
      styleTxt:{
        fontSize:FontSize.reText(19)
      }

});