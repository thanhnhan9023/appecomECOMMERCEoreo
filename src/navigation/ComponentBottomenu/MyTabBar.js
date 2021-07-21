import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Config from '../Config';
import { colors } from '../../config/style';
import Icon, { TypeIcon } from '../../config/Icon';
import FontSize from '../../config/FontSize';
import Utils from '../../app/Utilis';
import { connect } from 'react-redux';


// const databottom=[
//     {
//         NameScreen:'Home',
//         typeicon:TypeIcon.Feather,
//         nameicon:'home',
//         configScreen:Config.HomeScreen,
//     },
//     {
//         NameScreen:'Shop',
//         typeicon:TypeIcon.AntDesign,
//         nameicon:'search1',
//         configScreen:Config.Shop,
//     },
//     {
//         NameScreen:'WhishList',
//         typeicon:TypeIcon.Entypo,
//         nameicon:'heart-outlined',
//         configScreen:Config.WishListScreen,
//     },
//     {
//         NameScreen:'Cart',
//         typeicon:TypeIcon.MaterialCommunityIcons,
//         nameicon:'archive-arrow-down-outline',
//         configScreen:Config.Categories,
//     },
//     {
//       NameScreen:'Me',
//       typeicon:TypeIcon.MaterialCommunityIcons,
//       nameicon:'account',
//       configScreen: this.props.token?Config.LoginSuccess:Config.login,
//   },
// //   {
// //     NameScreen:'Camera',
// //     typeicon:TypeIcon.MaterialCommunityIcons,
// //     nameicon:'account',
// //     configScreen:Config.Camera,
// // },
// ]
 class MyTabBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index:0,
      databottom:[
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
    }
      ]
    };
  }
  
  _moveScreen(txtSccreen,index)
  {
    // console.log(this.props.token)
    // if(this.props.token!=null && index==4)
    // {
    //   console.log('vao login')
    // Utils.navigate(Config.LoginSuccess)
    // return;
    // }
    // if(this.props.token==null && index==4)
    // {
    //   console.log('vao logout')
    // Utils.navigate(Config.login)
    // return;
    // }
    Utils.navigate(txtSccreen)
  
  }
  render() {
    const {state}=this.props
    return (
      <View style={{flexDirection:'row',
      paddingVertical:FontSize.scale(10),
      borderWidth:0,borderTopWidth:0.5,
      borderColor:colors.grayLight,
      backgroundColor:colors.white,
      paddingHorizontal:FontSize.scale(10),
      }}
      >
          {this.state.databottom.map((item,index) =>{
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
                onPress={() =>this._moveScreen(item.configScreen,index)}
                >
                  <View style={{flexDirection:'row'}}>
                   <Icon  type={item.typeicon} name={item.nameicon} size={24} color={isFocused  ==true ? colors.black:colors.grayLight} ></Icon>
                    {index==2 && this.props.datalike.length>0   || index==3 && this.props.datacart.length>0 ? 
                      <View style={{width:FontSize.scale(8),height:FontSize.scale(8),
                      backgroundColor:colors.redStar,borderRadius:FontSize.scale(8),
                    position:'absolute',
                    bottom:2,
                    right:0,
                    }
                      }>
                      </View>
                        :null
                    }
                   </View>
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

const mapStateToProps =(state) =>{
  return{
    datalike:state.CartReducer.ListProductLike,
    datacart:state.CartReducer.ListCart,
    token:state.AuthReducer.token,
  }
}

export default connect(mapStateToProps,null)(MyTabBar)