import React, { Component } from 'react';
import { View, Text,TouchableOpacity,Image } from 'react-native';
import FontSize from '../../config/FontSize';
import Icon, { TypeIcon } from '../../config/Icon';
import { colors } from '../../config/style';
import HeaderView from '../../container/HeaderView';
import Utils from '../../app/Utilis';
import {connect} from 'react-redux'
import { SwipeListView } from 'react-native-swipe-list-view';
import CartAction from '../../Redux/Actions/ActionCart/CartAction';
import SniperInput from '../../component/SniperInput/SniperInput';
import Config from '../../navigation/Config';
import Empty from '../../component/EmptyScreen/Empty';
import { TextInput } from 'react-native';
import Button2 from '../../component/Button2';
import { Context } from '../../config/ThemeProvider2';
import AsyncStorage from '@react-native-async-storage/async-storage';

class CartScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datacart:[],
    };
  }
  GetToal=() =>
  {
    let Total=0;
     for (let index = 0; index < this.props.data.length; index++) {
       const sl=this.props.data[index].sltam;
       const price=this.props.data[index].price;
       Total+=sl*price            
     }
     return Total;
  }
 GetCountCart=() =>{
     return this.props.data.length+"";
 }
 RemoveCart=(id) =>{
   this.props.RemoveCart(id)
 }
_RenderEmpty()
{
  return(
    <View style={{paddingVertical:FontSize.Width(50)}}>
    <Empty
    CenterComponent={
        <View>
            <Icon type={TypeIcon.AntDesign} name={'down-square-o'}  color={colors.redStar} size={30}></Icon>
        </View>
    }
    TxtTitle={'Your cart is empty'}
    TxtSub={'Simply sign into pick up where you left off'}
    TitleButton={'Shop now'}
    TxtSceen={Config.Shop}
      />
      </View>
  )
}
RenderHiddenItem=() =>{
  return(
      <View style={{backgroundColor:colors.white,
      flex:1,
      arginRight:-20,
      alignItems:'center',
      flexDirection:'row',
      justifyContent: 'flex-end'}}>
        <TouchableOpacity style={{justifyContent:'center'}}>
            <Text>{'Close'}</Text>
        </TouchableOpacity>
        <View style={{width:FontSize.scale(20)}}></View>
        <TouchableOpacity>
            <Text>{'Delete'}</Text>
        </TouchableOpacity>
      </View>
  )
} 
HeaderFlatList=() =>
  { 
      return(
    <View>
        <View  style={{alignItems:'center'}}>
        </View>
        {this.GetCountCart() >0?
          <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:FontSize.scale(10)}}>
            <Text style={{fontSize:FontSize.reText(20)}}>{'Total'}</Text>
            <Text style={{fontSize:FontSize.reText(25),fontWeight:'bold'}}>{"$"+this.GetToal()+'.00'}</Text>
          </View>:null
      }
    </View>
      )
  }
    renderItem({item}) 
    {
        return(
          <View style={{ 
            borderBottomColor:colors.grayLight,
            backgroundColor:colors.white,
            }}> 
        <View style={{
        flexDirection:'row',
        paddingVertical:FontSize.scale(10),
        paddingHorizontal:FontSize.scale(10),
        borderBottomWidth:0.4,
        }}>
                    <View style={{paddingHorizontal:FontSize.scale(8),width:FontSize.scale(100),height:FontSize.scale(90)}}>
                      <Image source={{uri:item.imgproduct[0].img}} style={{width:'100%',height:'100%',resizeMode:'cover'}} ></Image>
                    </View>
                    <View style={{width:FontSize.scale(20)}} />
                    <View style={{flex:1,flexDirection:'row'}}>
                        <View style={{flex:1}}>
                              <View style={{flex:1}}>
                                <Text style={{fontWeight:'bold'}}>{item.nameproduct}</Text>              
                              </View>
                              <View style={{}}>
                                 <SniperInput valuenew={item.sltam} id={item._id}/>
                             </View>
                        </View>                      
                        <View style={{}}>
                            <Text style={{fontWeight:'bold',fontSize:FontSize.reText(18)}}>{"$"+item.price+".00"}</Text>
                        </View>
                      </View>
            </View>
        </View>
        )
    }
_RenderItemFoolter=() =>{
  if(this.props.data.length>0)
  {
    return(
      <View style={{flexDirection:'row',
      paddingVertical:FontSize.scale(12),
      paddingHorizontal:FontSize.scale(10),
      flex:1}}>
                <Icon></Icon>
                <TextInput
                  style={{flex:1,borderWidth:0.6,borderColor:colors.grayLight}}
                    placeholder={'Coupon code'}
                />
                <View style={{width:FontSize.scale(70),borderWidth:0.6,borderColor:colors.grayLight,alignItems:'center',justifyContent:'center'}}>
                    <Text>{'Apply'}</Text>
                </View>
  </View>
    )
  }
  else
  return null;
}
_RenderHideItem=({item}) =>{
  return(
    <View style={{
      flex: 1,
      paddingTop: FontSize.scale(10),
      alignItems: 'flex-end'
  }}>
      <View style={{ flexDirection: 'row' ,flex:1}}>
                   <TouchableOpacity style={{backgroundColor:colors.grayLight,
                   alignItems:'center',
                   justifyContent:'center',width:FontSize.scale(70)}}
                   onPress={() =>{this.props.LikeProduct(item.id)}}
                   >
                      {item.like==false ? <Icon type={TypeIcon.AntDesign} name={'hearto'} size={24} >
                      </Icon>: 
                      <Icon type={TypeIcon.AntDesign} name={'heart'} size={22} ></Icon>}     
                   </TouchableOpacity>
                   <TouchableOpacity  
                   style={{backgroundColor:colors.redStar,
                    alignItems:'center',
                    justifyContent:'center',
                    width:FontSize.scale(70)}}
                    onPress={() => this.props.RemoveCart(item._id)}
                    >
                        <Icon type={TypeIcon.FontAwesome} name={'trash-o'} size={24} color={colors.white}></Icon>
                   </TouchableOpacity>
      </View>
  </View>
  )
}
_cart= async() =>{
  try {
    const jsonValue = await AsyncStorage.getItem('cart')
     let a=jsonValue != null ? JSON.parse(jsonValue) : null;
     this.setState({datacart:a})
  } catch(e) {
  }
}
  render() {
      const {data}=this.props
    return (
      <Context.Consumer>
          {({ theme, updateTheme }) => (
        <View style={{flex:1,backgroundColor:theme.colors.background}}>
              <HeaderView
              TitleCenter={'Cart'}
              SizeTextCenter={22}
              />
              <View style={{justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:colors.grayLight}}>{this.GetCountCart()+' item'}</Text>
              </View>
              <SwipeListView
                  showsVerticalScrollIndicator={false}
                  disableRightSwipe
                  keyExtractor={(item,index) => index}
                  data={data}
                  ListEmptyComponent={this._RenderEmpty}
                  renderHiddenItem={this._RenderHideItem}
                  renderItem={this.renderItem}
                  ListFooterComponent={this._RenderItemFoolter}
                  ListHeaderComponent={this.HeaderFlatList}
                  rightOpenValue={-FontSize.scale(160)}
              />
              {this.props.data.length>0 ?
                <View style={{paddingHorizontal:FontSize.scale(12),paddingVertical:FontSize.scale(10)}}>
                <Button2
                 title={'Proceed to Checkout'}
                 style={{height:FontSize.scale(40),backgroundColor:colors.black}}
                 styleTxt={{color:colors.white}}
                 />
               </View>: null
              }
        </View>
          )}
      </Context.Consumer>
    );
  }
}

const mapStateToProps =(state) =>{
    return{
      data:state.CartReducer.ListCart
    }
  }
  
  const mapDispatchToProps =(dispatch) =>{
    return {
      RemoveCart:(id) => dispatch(CartAction.ACTION_DeleteCart(id)),
      LikeProduct:(id) =>dispatch(CartAction.ActionAdd_LikeProduct(id)),
      Datacart:() => dispatch(CartAction.ActionCart()),
    }
    
  }
 

export default connect(mapStateToProps,mapDispatchToProps)(CartScreen)