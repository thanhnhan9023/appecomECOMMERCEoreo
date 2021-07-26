import { Color } from 'chalk';
import { Type } from 'es-abstract/es5';
import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text } from 'react-native';
import Utils from '../../app/Utilis';
import FontSize from '../../config/FontSize';
import Icon, { TypeIcon } from '../../config/Icon';
import { colors } from '../../config/style';
import ButtonLinear from '../../container/ButtonLinear';
import Config from '../Config';

 class ModalCartSuccess extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkcart:false,
    };
  }
  _goback= () =>{
    const {checkcart}=this.state
    if(!checkcart)
    {
    Utils.goBack();
    }
  }
  _goCart=() =>{
    this.setState({checkcart:true})
  }
  componentDidUpdate=() =>{
    const {checkcart}=this.state
    if(checkcart==true)
    {
      Utils.navigate(Config.CartScreen);
    }
  }
  render() {
    console.log(this.state.checkcart)
    return (
      <View 
      onTouchEnd={this._goback}
      style={{flex:1,backgroundColor: 'transparent',justifyContent:'center',alignItems:'center',paddingHorizontal:FontSize.scale(40)
      }}>
         <View style={{width:'100%',height:FontSize.scale(300),backgroundColor:colors.whiteTwo,borderRadius:FontSize.scale(8),
       paddingVertical:FontSize.scale(50),
       alignItems:'center'
         }}>
           <View style={{width:FontSize.scale(100),height:FontSize.verticalScale(100),
            borderRadius:FontSize.scale(100),
            backgroundColor:colors.white,elevation:FontSize.scale(8),
            justifyContent:'center',
            alignItems:'center',
            shadowColor: "#000000",
            shadowOpacity: 0.8,
            shadowRadius: FontSize.scale(10),
            shadowOffset: {
              height: FontSize.verticalScale(5),
              width: FontSize.scale(5),
            }
            }}>
             <View style={{width:FontSize.scale(85),height:FontSize.verticalScale(85),borderRadius:FontSize.scale(85),backgroundColor:colors.black,
            justifyContent:'center',alignItems:'center'
            }}>
               <Icon name={'shopping-bag'}  type={TypeIcon.FontAwesome5} size={30} style={{color:colors.white}}/>
             </View>
            <View style={{position:'absolute',top:FontSize.verticalScale(60),bottom:FontSize.verticalScale(10),right:FontSize.scale(0),
            }}>
                <View style={{width:FontSize.scale(30),height:FontSize.verticalScale(30),
                backgroundColor:colors.greenFE,borderRadius:FontSize.scale(30),
                shadowColor: colors.green,
                elevation:FontSize.scale(2),
                shadowOpacity: 0.8,
                shadowRadius: FontSize.scale(10),
                shadowOffset: {
                  height: FontSize.verticalScale(5),
                  width: FontSize.scale(5),
                 },
                 justifyContent:'center',
                 alignItems:'center',
                 }}>
                   <Icon name={'check'} type={TypeIcon.Feather} size={22} color={colors.white}/>
              </View>
            </View>
           </View>
           <View style={{height:FontSize.scale(30)}}/>
           <Text style={{...FontSize.TextStyles.semiBold,fontSize:FontSize.sizes.sText20}}>{'Success !'}</Text>
           <View style={{height:FontSize.scale(15)}}/>
           <Text style={{...FontSize.TextStyles.roboto,fontSize:FontSize.sizes.sText14}}>{'1 product has been add to your cart !'}</Text>
           <View style={{height:FontSize.scale(15)}}/>
          <ButtonLinear
            title={'CheckOut'}
            styleContainer={{width:'100%',paddingHorizontal:FontSize.scale(20)}}
            style={{height:FontSize.scale(35),justifyContent:'center',alignItems:'center',borderRadius:FontSize.scale(30)}}
            color={[colors.blackShadow,colors.grey2]}
            txtStyle={{color:colors.white,...FontSize.TextStyles.roboto,fontSize:FontSize.sizes.sText18}}
            onPress={this._goCart}
           />
         </View>
      </View>
    );
  }
}
export default ModalCartSuccess