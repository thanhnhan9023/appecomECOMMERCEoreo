import React, { Component } from 'react';
import { View, Text ,ImageBackground,StyleSheet} from 'react-native';
import FontSize from '../../config/FontSize';
import { colors } from '../../config/style';
import HeaderView from '../../container/HeaderView';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import Icon, { TypeIcon } from '../../config/Icon';
import { TouchableOpacity,Image ,ActivityIndicator} from 'react-native';
import {IMAGES} from '../../../assets/images/IndexImg';
import { Button } from 'react-native';
import Button2 from '../../component/Button2';
import { ScrollView } from 'react-native';
import Utils from '../../app/Utilis';
import { connect } from 'react-redux';
import CartAction from '../../Redux/Actions/ActionCart/CartAction';
import { showMessage, hideMessage } from "react-native-flash-message";
import { verticalScale } from 'react-native-size-matters';
import { RFValue } from 'react-native-responsive-fontsize';

 class DetalisProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index:0,
      isLoading:true,
      isLoangdingCart:false,
    };
  }
  _GoBack(){
    Utils.goBack();
  }
  _checkWhishlist=(id) =>{
    const check=this.props.datalike.findIndex(item => item._id==id)
    Utils.nlog(check)
    if(check>=0)
      return true;
    else
      return false;
  }
  _loadingAddcart=() =>{
    this.setState({isLoangdingCart:false})
    showMessage({
      message: "Add to cart !!",
      type: "success",
      })
  }
  _AddCart  =  async (item,index) =>{
    const {isLoangdingCart}=this.state
    this.setState({indexloang:index})
    if(!isLoangdingCart)
    {
      this.setState({isLoangdingCart:true})
      this.props.AddCart(item)
      setTimeout(() =>
     this._loadingAddcart(),600)
  }
}
  render() {
    const {index,isLoangdingCart}=this.state
    const {listimg,data}=this.props.route.params;
    return (
      <View style={styles.container}>
            <ScrollView
            showsVerticalScrollIndicator={false}
            > 
            <SwiperFlatList
                    key={index}
                    index={index}
                    showPagination
                    data={listimg}
                    renderItem={({ item }) => (
                        <View style={{  width:FontSize.Width(100),height:FontSize.Height(50)}}>
                              <ImageBackground style={{width:FontSize.Width(100),height:'100%'}} resizeMode={'stretch'} source={{uri:item.img}}  >
                              <View style={{
                                flexDirection:'row',
                                flex:1,
                                alignItems:'flex-end',
                                justifyContent:'flex-end',
                                paddingVertical:FontSize.scale(10),
                                paddingHorizontal:FontSize.scale(10)
                              }}>
                                    <TouchableOpacity>
                                      <Icon type={TypeIcon.AntDesign} name={'upload'} size={22}></Icon>
                                    </TouchableOpacity>
                                    <View
                                    style={{width:FontSize.scale(15)}}
                                    />
                                    <TouchableOpacity onPress={() => this.props.LikeProduct(data)}>
                                      {this._checkWhishlist(data._id) ==true ? 
                                          <Icon type={TypeIcon.AntDesign} name={'hearto'} size={22} color={colors.colorRed} />
                                        :<Icon type={TypeIcon.AntDesign} name={'hearto'} size={22} color={colors.black} />
                                      }
                                    </TouchableOpacity>
                              </View>
                              </ImageBackground>
                        </View>
                    )}
                    paginationStyleItem={ // custom dot
                        {
                            width:7,
                            height:7, 
                        }
                    }
                    paginationDefaultColor={colors.whiteTwo}
                    paginationActiveColor={colors.grayLight}
                    paginationStyle={
                        {
                            position:'absolute',
                            left:0,
                            top:FontSize.Height(40),
                        }
                    }
                    />
                    <View style={{paddingVertical:FontSize.scale(10),paddingHorizontal:FontSize.scale(10)}}>
                      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                      <Text>{'Women'}</Text>
                      <View style={{flexDirection:'row'}}>
                      <Icon type={TypeIcon.Entypo} name={'star'} color={colors.colorStarYellow} size={22}></Icon>
                      <Icon type={TypeIcon.Entypo} name={'star'} color={colors.colorStarYellow} size={22}></Icon>
                      <Icon type={TypeIcon.Entypo} name={'star'} color={colors.colorStarYellow} size={22}></Icon>
                      <Icon type={TypeIcon.Entypo} name={'star'} color={colors.colorStarYellow} size={22}></Icon>
                      </View>
                      </View>
                      <View style={{height:FontSize.scale(10)}}/>
                      <Text style={{fontWeight:'bold',fontSize:RFValue(25,FontSize.Height(100))}}>{data.nameproduct}</Text>
                      <View style={{height:FontSize.scale(10)}}/>
                      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                      <Text style={{fontWeight:'bold',fontSize:RFValue(18,FontSize.Height(100))}}>{'$'+data.price+'.00'}</Text>
                      <View style={{flexDirection:'row'}}>
                        <Icon type={TypeIcon.Ionicons} name={'md-chevron-down-outline'} color={colors.green} size={30}></Icon>
                        <Text  style={{fontSize:RFValue(14,FontSize.Height(100)),color:colors.green}}>{'In-stock'}</Text>
                        </View>
                    
                      </View>
                      <View style={{height:FontSize.scale(10)}}/>
                        <Text>{'sku:]]]]'}</Text>  
                        <Text style={{color:colors.grayLight}}>{'.Returns accepted within 90 days of placing order. Full policy here.Duties & taxers are non-refundable'}</Text>
                        <View style={{height:FontSize.scale(10)}}/>
                        <Text style={{color:colors.grayLight}}>{'.Returns accepted within 90 days of placing order. Full policy here.Duties & taxers are non-refundable'}</Text>
                       <View style={{flexDirection:'row',paddingVertical:FontSize.scale(10)}}> 
                              {data.color.map((item,index) =>{
                            return( 
                              <TouchableOpacity key={index} 
                              onPress={() =>{this.setState({index:index+1})}}
                              style={{...styles.selectcolor,backgroundColor:item.color}}>
                              </TouchableOpacity>
                            )
                          })}
                          </View>
                    </View>
                    </ScrollView>
                    <TouchableOpacity style={styles.btnAddcart}
                    onPress={() => this._AddCart(data)}>
                        {isLoangdingCart ? 
                        <ActivityIndicator size={'large'}  color={colors.grayLight}/>:
                        <Text style={{color:colors.white,...FontSize.TextStyles.roboto,fontSize:FontSize.sizes.sText18}} >{'Add to Cart'}</Text>
                        }
                    </TouchableOpacity>
                    <View style={{height:FontSize.scale(20)}}/>
      </View>
    );
  }
}
const mapStateToProps =(state) =>{
  return{
    datalike:state.CartReducer.ListProductLike,
  }
}
const mapDispatchToProps =(dispatch) =>{
  return {
    AddCart:(data) => dispatch(CartAction.ActionAddCart(data)),
    LikeProduct:(id) =>dispatch(CartAction.ActionAdd_LikeProduct(id)),
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:colors.white
  },
  btnAddcart:{
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:colors.black,
    height:FontSize.scale(40),
    borderRadius:FontSize.scale(4),
    marginHorizontal:FontSize.scale(12)
  },
  selectcolor:{
    height:FontSize.scale(30),
    width:FontSize.scale(30),
    borderRadius:FontSize.scale(30),
    marginRight:FontSize.scale(10)
  }
})

export default  connect(mapStateToProps,mapDispatchToProps)(DetalisProduct)