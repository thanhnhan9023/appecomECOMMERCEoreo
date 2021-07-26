import React, { Component } from 'react';
import { TouchableOpacity,Image,ScrollView,StyleSheet,ImageBackground,ActivityIndicator} from 'react-native';
import { FlatList } from 'react-native';
import { View, Text } from 'react-native';
import {IMAGES} from '../../../assets/images/IndexImg';
import Utils from '../../app/Utilis';
import FontSize from '../../config/FontSize';
import Icon, { TypeIcon } from '../../config/Icon';
import { colors } from '../../config/style';
import HeaderViewCustom from '../../container/HeadViewCustom';
import Config from '../../navigation/Config';
import { connect } from 'react-redux';
import CartAction from '../../Redux/Actions/ActionCart/CartAction';
import LinearGradient from 'react-native-linear-gradient';
import NumberCart from '../../container/NumberCart';
import { Dimensions } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { scale } from 'react-native-size-matters';

const dataCategory=[
  {
    id:1,
    name:'Accessories',
  },
  {
    id:2,
    name:'Dresses',
  },
  {
    id:3,
    name:'Pants',
  },
  {
    id:4,
    name:'Shoes',
  },
  {
    id:5,
    name:'T-shirts',
  },
]
const {width,height}=Dimensions.get('window')
 class ProductScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowGrid:true,
      ChangeIcon:true,
      numcoloum:2,
      isLoading:true,
      isLoangdingCart:false,
      indexloang:null,
    };
    this.check = React.createRef()
  }
  _checkWhishlist=(id) =>{
    const check=this.props.datalike.findIndex(item => item._id==id)
    Utils.nlog(check)
    if(check>=0)
      return true;
    else
      return false;
  }
  componentDidMount = async() =>
  {
    const {isLoading}=this.state
    const {maloai} = this.props.route.params;
    const loading= await this.props.FetchSanPham(maloai);
    if(loading)
    {
      this.setState({isLoading:!isLoading})
    }
  }
  _changeIcon=(data) =>
  {
    this.props.LikeProduct(data)
    // this.props.Add_Remove(data)
  }
  _loadingAddcart=() =>{
    this.setState({isLoangdingCart:false})
    let type="success"
    let data="Add to cart !!"
    // Utils.navigate('Modal',{screen:Config.ModalCartSuccess})
    Utils.navigate(Config.ModalCartSuccess)
  }
  _AddCart  =  async (item,index) =>{
    const {isLoangdingCart,indexloang}=this.state
    this.setState({indexloang:index})
    if(!isLoangdingCart)
    {
      this.setState({isLoangdingCart:true})
      this.props.AddCart(item)
      setTimeout(() =>
     this._loadingAddcart(),200)
    }
  }
  _renderItemGrid=({item,index})=>{
    const {isLoangdingCart,indexloang}=this.state
    return(
    <TouchableOpacity 
    style={{  
       width:width/2,
       height:width/1.3,
       padding:FontSize.scale(10),
       marginTop:index%2!=0?FontSize.scale(20):0,
       elevation:FontSize.scale(10),
       shadowColor: "#000000",
       shadowOpacity: 0.8,
       shadowRadius: FontSize.scale(10),
       shadowOffset: {
         height: FontSize.verticalScale(5),
         width: FontSize.scale(5),
       }
    }}
    onPress={() =>{Utils.navigate(Config.DetalisProduct,{listimg:item.imgproduct,data:item})}}
     >
       <LinearGradient  colors={[colors.whiteTwo,colors.green]} 
       style={{flex:1,borderRadius:FontSize.scale(10),
        }}>
                <ImageBackground style={{width:'100%',height:'85%'}}  borderTopRightRadius={FontSize.scale(20)}  borderTopLeftRadius={FontSize.scale(20)}
                resizeMode={'stretch'} source={{uri:item.imgproduct[0].img}}>
                  <View style={{width:'100%',height:'85%',justifyContent:'space-between',alignItems:'flex-end',padding:FontSize.scale(10)}}>
                  <TouchableOpacity onPress={() =>this._changeIcon(item)}>
                      {this._checkWhishlist(item._id) ==true ? 
                      <Icon type={TypeIcon.AntDesign} name={'hearto'} size={FontSize.scale(20)} color={colors.colorRed} />
                    :<Icon type={TypeIcon.AntDesign} name={'hearto'} size={FontSize.scale(20)} color={colors.black} />
                      }
                      </TouchableOpacity>
                    <TouchableOpacity onPress={() =>this._AddCart(item) }>
                      {isLoangdingCart ? <ActivityIndicator size={'large'}  color={colors.grayLight}/>:
                      <Icon type={TypeIcon.AntDesign} name={'plussquare'} size={FontSize.scale(28)}></Icon>
                      }
                    </TouchableOpacity>
                  </View>
                  <View style={{height:FontSize.scale(10)}}/>
                  <View style={{paddingHorizontal:FontSize.scale(10)}}>
                    <Text style={{color:colors.white,fontSize:RFValue(16,height)}} >{item.nameproduct}</Text>
                    <Text style={{fontSize:RFValue(16,height)}}>{"$"+item.price+".00"}</Text>
                  </View>
                </ImageBackground>
       </LinearGradient>
    </TouchableOpacity>
    )
  }
    renderRate=({item}) =>{
      for (let index = 0; index <4 ; index++) {
              <View>
                      <Icon  type={TypeIcon.EvilIcons}  name={'star'} size={15}></Icon>
              </View>
      }
    }
    _renderItemList=({item}) =>
  {
    const {isLoangdingCart}=this.state
    Utils.nlog(isLoangdingCart)
   return(
     <TouchableOpacity 
     style={{
      height:FontSize.scale(430),
      marginBottom:FontSize.scale(20),
      paddingHorizontal:FontSize.scale(15)
     }} 
     onPress={()=>{Utils.navigate(Config.DetalisProduct,{listimg:item.imgproduct,data:item})}}
     >
                <ImageBackground resizeMode={'stretch'} source={{uri:item.imgproduct[0].img}} style={{width:'100%',height:FontSize.scale(380)}}>
                  <View style={{flex:1,justifyContent:'space-between',alignItems:'flex-end',
                  paddingHorizontal:FontSize.scale(20),paddingVertical:FontSize.scale(10),
                  }}>
                    <TouchableOpacity onPress={() =>this._changeIcon(item)}>
                      {this._checkWhishlist(item._id) ==true ? 
                      <Icon type={TypeIcon.AntDesign} name={'hearto'} size={22} color={colors.colorRed} />
                    :<Icon type={TypeIcon.AntDesign} name={'hearto'} size={22} color={colors.black} />
                      }
                      </TouchableOpacity>
                    <TouchableOpacity onPress={() =>this._AddCart(item) }>
                      {isLoangdingCart ? <ActivityIndicator size={'large'}  color={colors.grayLight}/>:
                      <Icon type={TypeIcon.AntDesign} name={'plussquare'} size={30}></Icon>
                      }
                    </TouchableOpacity>
                    </View>
                </ImageBackground>
                <View style={{height:FontSize.scale(10)}} />
                <Text numberOfLines={2} style={{color:colors.grayLight,...FontSize.TextStyles.roboto,fontSize:RFValue(17,height)}} >{item.nameproduct}</Text>
                <Text style={{...FontSize.TextStyles.optionNormal}} >{"$"+item.price+".00"}</Text>
     </TouchableOpacity>
   )
  }
   render() {
    const {isShowGrid,isLoading}=this.state
      const {data}=this.props
      console.log(data)
    return (
      <View style={{flex:1,backgroundColor:colors.white}}>
            <HeaderViewCustom
            ContainerStyle={{paddingHorizontal:FontSize.scale(10)}}
            ViewLeft={
              <TouchableOpacity onPress={() =>{Utils.goBack()}}>
              <Icon  name={'left'}  type={TypeIcon.AntDesign} size={scale(18)}/>
              </TouchableOpacity>
            }
            ViewCenter={
              <Text style={{...FontSize.TextStyles.regular,fontSize:RFValue(22,FontSize.Height(100))}} >{'Women'}</Text>
            }
            ViewRight={
              <View style={{flexDirection:'row'}}>
                <NumberCart number={this.props.dataCart.length}/>
                <Icon name={'cart'} type={TypeIcon.EvilIcons} size={scale(20)} />

              </View>
            }
            />
            <View style={{paddingHorizontal:FontSize.scale(12),paddingVertical:FontSize.verticalScale(20)}}>
              <View style={{flexDirection:'row',height:FontSize.scale(40)}}>
                  <TouchableOpacity style={{flexDirection:'row'}}>
                  <Icon
                  type={TypeIcon.FontAwesome5}
                  name={'grip-lines-vertical'}
                  size={FontSize.scale(22)}
                  />
                  <View style={{width:FontSize.scale(10)}}></View>
                  <Text style={{fontSize:RFValue(22,FontSize.Height(100))}}>{'Refine'}</Text>
                  </TouchableOpacity>
                    <View style={{flex:8}}>
                    </View>
                    <View style={{flexDirection:'row'}}>
                      <TouchableOpacity
                      onPress={()=>{
                          this.setState({isShowGrid:true})
                      }}
                      >     
                      <Icon   type={TypeIcon.Ionicons} name={'md-grid-outline'} size={22}/>
                      </TouchableOpacity>
                      <View style={{width:FontSize.scale(10)}}></View>
                      <TouchableOpacity
                      
                      onPress={()=>{
                        this.setState({isShowGrid:false})
                    }}
                      >     
                      <Icon   type={TypeIcon.MaterialCommunityIcons} name={'border-all-variant'} color={colors.grayLight} size={22}/>
                      </TouchableOpacity>
                    </View>
              </View>
              <ScrollView style={{paddingVertical:FontSize.verticalScale(14)}}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              >
                          {dataCategory.map((item,index) =>{
                            return(
                              <TouchableOpacity key={index} style={{justifyContent:'center',
                              }}
                              onPress={() =>{}}
                              >
                                      <LinearGradient
                                      style={{ 
                                        paddingVertical:FontSize.verticalScale(10),
                                        width:FontSize.Width(100)/3,
                                        marginHorizontal:FontSize.scale(5),
                                      }}
                                          colors={[colors.white,colors.green,colors.yellowishOrange]}
                                      >
                                        <Text style={{textAlign:'center',...FontSize.TextStyles.semiBold,color:colors.white}} >{item.name}</Text>
                                      </LinearGradient>
                              </TouchableOpacity>
                            )
                          })}
                      </ScrollView>
            </View>
            <View style={{flex:1}}>
              {isLoading==false ?
             <FlatList
             key={isShowGrid}
             showsVerticalScrollIndicator={false}
              style={{
                // backgroundColor:'red',
                padding:FontSize.scale(10),
             }}
             columnWrapperStyle={{
              justifyContent: 'space-around',
            }}
             data={this.props.data}
             renderItem={ isShowGrid==true ? this._renderItemGrid:this._renderItemList}
             numColumns={isShowGrid==true? 2:1}
             keyExtractor={(item,index)=> index}            
             />  :null
            }
                   <View style={{height:FontSize.scale(20)}}/>
            </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  absoluteFillObject:{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.grayLight
  }
})

const mapStateToProps =(state) =>{
  return{
    data:state.CartReducer.ListSanPham,
    datalike:state.CartReducer.ListProductLike,
    dataCart:state.CartReducer.ListCart,
  
  }
}
const mapDispatchToProps =(dispatch) =>{
  return {
    AddCart:(data) => dispatch(CartAction.ActionAddCart(data)),
    Add_Remove:(data) => dispatch(CartAction.ActionAdd_RemoveLike(data)),
    LikeProduct:(id) =>dispatch(CartAction.ActionAdd_LikeProduct(id)),
    FetchSanPham:(id) => dispatch(CartAction.ActionFetchSanPhamToLoaiSpRequest(id)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductScreen)
