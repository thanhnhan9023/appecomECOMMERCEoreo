import React, { Component } from 'react';
import { TouchableOpacity,Image,ScrollView,StyleSheet,ImageBackground,ActivityIndicator} from 'react-native';
import { FlatList } from 'react-native';
import { View, Text } from 'react-native';
import {IMAGES} from '../../../assets/images/IndexImg';
import Utils from '../../app/Utilis';
import FontSize from '../../config/FontSize';
import Icon, { TypeIcon } from '../../config/Icon';
import { colors } from '../../config/style';
import HeaderView from '../../container/HeaderView';
import Config from '../../navigation/Config';
import { connect } from 'react-redux';
import CartAction from '../../Redux/Actions/ActionCart/CartAction';

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
    Utils.showMessages(type,data)
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
    onPress={() =>{Utils.navigate(Config.DetalisProduct,{listimg:item.imgproduct,data:item})}}
     style={{
      height:FontSize.scale(280),
      width:FontSize.scale(160),
      marginRight:FontSize.scale(4),
     }}>
          <ImageBackground resizeMode={'stretch'} source={{uri:item.imgproduct[0].img}} style={{width:FontSize.scale(156),height:FontSize.scale(200)}} >
                <View style={{
                  paddingVertical:FontSize.scale(10),
                  paddingHorizontal:FontSize.scale(10),
                  justifyContent:'space-between',
                  alignItems:'flex-end',
                  height:FontSize.scale(200),
                  }}>
                    <TouchableOpacity onPress={() =>this._changeIcon(item)}>
                      {this._checkWhishlist(item._id) ==true ? 
                      <Icon type={TypeIcon.AntDesign} name={'hearto'} size={22} color={colors.colorRed} />
                    :<Icon type={TypeIcon.AntDesign} name={'hearto'} size={22} color={colors.black} />
                    }
                    </TouchableOpacity>
                  <TouchableOpacity ref={ref => this.add}  onPress={() =>this._AddCart(item,index)}>
                    {isLoangdingCart && index==indexloang ? <ActivityIndicator size={'large'}  color={colors.grayLight}/> :
                    <Icon type={TypeIcon.AntDesign} name={'plussquare'} size={30}></Icon>
                    }
                  </TouchableOpacity>
                </View>
                <View style={{height:FontSize.scale(15)}}></View>
                <Text numberOfLines={2} style={{color:colors.grayLight,...FontSize.TextStyles.roboto,fontSize:FontSize.sizes.sText14}} >{item.nameproduct}</Text>
                <Text style={{...FontSize.TextStyles.optionNormal}} >{"$"+item.price+".00"}</Text>
            </ImageBackground>
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
      marginBottom:FontSize.scale(20)
      // backgroundColor:'red'
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
                <Text numberOfLines={2} style={{color:colors.grayLight,...FontSize.TextStyles.roboto,fontSize:FontSize.sizes.sText17}} >{item.nameproduct}</Text>
                <Text style={{...FontSize.TextStyles.optionNormal}} >{"$"+item.price+".00"}</Text>
     </TouchableOpacity>
   )
  }
   render() {
    const {isShowGrid,isLoading}=this.state
      const {data}=this.props
    return (
      <View style={{flex:1,backgroundColor:colors.white}}>
            <HeaderView
            iconright={true}
            IconLeftShow={true}
            TitleCenter={'Women'}
            IconLefType={TypeIcon.AntDesign}
            IconNameLeft={'left'}
            StyleTxtCenter={{fontSize:FontSize.reText(22)}}
            onPressLeft={() =>Utils.goBack()}
            />
            <View style={{paddingHorizontal:FontSize.scale(12),paddingVertical:FontSize.verticalScale(20)}}>
              <View style={{flexDirection:'row',height:FontSize.scale(20)}}>
                  <TouchableOpacity style={{flexDirection:'row'}}>
                  <Icon
                  type={TypeIcon.FontAwesome5}
                  name={'grip-lines-vertical'}
                  size={22}
                  />
                  <View style={{width:FontSize.scale(10)}}></View>
                  <Text style={{fontSize:FontSize.reText(20)}}>{'Refine'}</Text>
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
                              <TouchableOpacity key={index} style={{justifyContent:'center',borderWidth:1,borderColor:colors.grayLight,marginRight:FontSize.scale(10),paddingVertical:FontSize.verticalScale(10),paddingHorizontal:FontSize.scale(10)}}>
                                      <Text style={{textAlign:'center'}} >{item.name}</Text>
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
             paddingVertical:FontSize.scale(10),
             paddingHorizontal:FontSize.scale(15)}}
             data={this.props.data}
             renderItem={ isShowGrid==true ? this._renderItemGrid:this._renderItemList}
             numColumns={isShowGrid==true? 2:1}
             keyExtractor={(item,index)=> index}            
             />  :null
            }
                   
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
