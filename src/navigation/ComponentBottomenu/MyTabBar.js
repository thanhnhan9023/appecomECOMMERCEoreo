import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Config from '../Config';
import { colors,styleCommon } from '../../config/style';
import Icon, { TypeIcon } from '../../config/Icon';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontSize from '../../config/FontSize';
import Utils from '../../app/Utilis';
import { ForceTouchGestureHandler } from 'react-native-gesture-handler';


const databottom=[
    {
        NameScreen:'Home',
        typeicon:TypeIcon.Feather,
        nameicon:'home',
        configScreen:Config.HomeScreen,
    },
    {
        NameScreen:'Shop',
        typeicon:TypeIcon.AntDesign,
        nameicon:'search1',
        configScreen:Config.Shop,
    },
    {
        NameScreen:'WhishList',
        typeicon:TypeIcon.Entypo,
        nameicon:'heart-outlined',
        configScreen:Config.WishListScreen,
    },
    {
        NameScreen:'Cart',
        typeicon:TypeIcon.MaterialCommunityIcons,
        nameicon:'archive-arrow-down-outline',
        configScreen:Config.Categories,
    },
    {
      NameScreen:'Me',
      typeicon:TypeIcon.MaterialCommunityIcons,
      nameicon:'account',
      configScreen:Config.login,
  },
  {
    NameScreen:'Camera',
    typeicon:TypeIcon.MaterialCommunityIcons,
    nameicon:'account',
    configScreen:Config.Camera,
},
]
 class MyTabBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index:0,
    };
  }
  componentDidMount()
  {
  
  }
  _moveScreen(txtSccreen,index)
  {
    if(index==0)
    {
      // Utils.nlog('vao check home')
    Utils.navigate(txtSccreen)
    }
    else{
      Utils.navigate(txtSccreen)
    }
  }
  render() {
    const {state}=this.props
    // Utils.nlog('prop my tab')
   
    // Utils.nlog(this.props)
    return (
      <View style={{flexDirection:'row',
      paddingVertical:FontSize.scale(10),
      borderWidth:0,borderTopWidth:0.5,
      borderColor:colors.grayLight,
      backgroundColor:colors.white,
      paddingHorizontal:FontSize.scale(10),
      }}
      >
          {databottom.map((item,index) =>{
                Utils.nlog(state.index)
                 const isFocused = state.index-1== index;
                return(
                <View key={index}
                style={{
                  flex:1,
                  flexDirection:'row',
                  }}
                >
                <TouchableOpacity
                style={{width:FontSize.scale(50),alignItems:'center'}} 
                accessibilityStates={isFocused ? ['selected'] : []}
                onPress={()=> this._moveScreen(item.configScreen,index)}
                >
                   <Icon  type={item.typeicon} name={item.nameicon} size={20} color={isFocused ==true ? colors.black:colors.grayLight} ></Icon>
                   <Text style={{color:isFocused ==true ? colors.black:colors.grayLight,fontSize:FontSize.reText(14)}} >{item.NameScreen}</Text>     
                </TouchableOpacity>
                <View style={{width:FontSize.scale(30)}}>
                </View>
                </View>
              )
          })}
      </View>
    );
  }
}


export default MyTabBar