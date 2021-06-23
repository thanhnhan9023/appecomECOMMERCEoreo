import React, { Component } from 'react';
import { View, Text,TouchableOpacity,Image } from 'react-native';
import FontSize from '../../config/FontSize';
import Icon, { TypeIcon } from '../../config/Icon';
import { colors } from '../../config/style';
import HeaderView from '../../container/HeaderView';
import Utils from '../../app/Utilis';
import {IMAGES} from '../../../assets/images/IndexImg';
import {connect} from 'react-redux'
import { SwipeListView } from 'react-native-swipe-list-view';
import CartAction from '../../Redux/ActionsCart/CartAction';
import SniperInput from '../../component/SniperInput/SniperInput';
import Config from '../../navigation/Config';
import Empty from '../../component/EmptyScreen/Empty';
import { TextInput } from 'react-native';
import Button2 from '../../component/Button2';
import { Context } from '../../config/ThemeProvider2';


 

class CartScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
 
        DataCartNew:'1',
    };
  }
  GetToal=() =>
  {
    let Total=0;
     for (let index = 0; index < this.props.data.length; index++) {
       const sl=this.props.data[index].sltam;
       const price=this.props.data[index].GiaBan;
       Total+=sl*price            
     }
     return Total;
  }
 GetCountCart=() =>{
    
    return this.props.data.length+"";
 }
 GetAllCart=() =>{
    const array=this.state.DataCart
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
            <Icon type={TypeIcon.AntDesign} name={'down-square-o'} size={30}></Icon>
        </View>
    }
    TxtTitle={'Your Whishlist is empty'}
    TxtSub={'Simply sign into pick up where you left off'}
    TitleButton={'Go Shopping'}
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
            <Text style={{color:colors.grayLight}}>{this.GetCountCart()+' item'}</Text>
        </View>
        {this.GetCountCart() >0?
        
          <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:FontSize.scale(10)}}>

            <Text style={{fontSize:FontSize.reText(20)}}>{'Total'}</Text>
            <Text style={{fontSize:FontSize.reText(25),fontWeight:'bold'}}>{this.GetToal()+' VNĐ'}</Text>
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
                      <Image source={{uri:item.Image}} style={{width:'100%',height:'100%',resizeMode:'cover'}} ></Image>
                    </View>
                    <View style={{width:FontSize.scale(20)}} />
                    <View style={{flex:1,flexDirection:'row'}}>
                        <View style={{flex:1}}>
                              <View style={{flex:1}}>
                                <Text style={{fontWeight:'bold'}}>{item.TenSp}</Text>              
                              </View>
                              <View style={{}}>
                                 <SniperInput valuenew={item.sltam} id={item.MaSp}/>
                             </View>
                        </View>                      
                        <View style={{}}>
                            <Text style={{fontWeight:'bold'}}>{"$"+item.GiaBan}</Text>
                        </View>
                      </View>
            </View>
            
        </View>
        )
    }
_RenderItemFoolter(){
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
                        {/* <Icon  type={TypeIcon.AntDesign} name={'heart'} size={24}></Icon> */}
                   </TouchableOpacity>
                   <TouchableOpacity  
                   style={{backgroundColor:colors.redStar,
                    alignItems:'center',
                    justifyContent:'center',
                    width:FontSize.scale(70)}}
                    onPress={() => this.props.RemoveCart(item.MaSp)}
                    >
                        <Icon type={TypeIcon.FontAwesome} name={'trash-o'} size={24} color={colors.white}></Icon>
                   </TouchableOpacity>
      </View>
  </View>
  )
}
  render() {
      const {data}=this.props
      Utils.nlog('Props Cart___________',this.props)
    return (
      <Context.Consumer>
          {({ theme, updateTheme }) => (
        <View style={{flex:1,backgroundColor:theme.colors.background}}>
              <HeaderView
              TitleCenter={'Cart'}
              SizeTextCenter={22}
              />
              <SwipeListView
                  disableRightSwipe
                  data={data}
                  ListEmptyComponent={this._RenderEmpty}
                  renderHiddenItem={this._RenderHideItem}
                  renderItem={this.renderItem}
                  ListFooterComponent={this._RenderItemFoolter}
                  ListHeaderComponent={this.HeaderFlatList}
                  // ListFooterComponent={this._RenderItemFooter}
                  keyExtractor={item => item.MaSp}
                  rightOpenValue={-FontSize.scale(160)}
              />   
              <View style={{paddingHorizontal:FontSize.scale(12),paddingVertical:FontSize.scale(10)}}>
                <Button2
                title={'Proceed to Checkout'}
                style={{height:FontSize.scale(30),backgroundColor:colors.black}}
                styleTxt={{color:colors.white}}
                />
              </View>
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
    }
    
  }
 

export default connect(mapStateToProps,mapDispatchToProps)(CartScreen)