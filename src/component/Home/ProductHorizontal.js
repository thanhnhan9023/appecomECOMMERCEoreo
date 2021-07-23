import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import { FlatList } from 'react-native';
import { View, Text,TouchableOpacity,StyleSheet} from 'react-native';
import Utils from '../../app/Utilis';
import FontSize from '../../config/FontSize';
import Icon, { TypeIcon } from '../../config/Icon';
import { colors } from '../../config/style';
import Loading from '../Loading';


export default class ProductHorizontal extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isLoangdingCart:false
        };
      }
  _loadingAddcart=() =>
  {
        this.setState({isLoangdingCart:false})
        let type="success"
        let data="Add to cart !!"
        Utils.showMessages(type,data)
  }
  _checkWhishlist=(id) =>{
    const check=this.props.datalike.findIndex(item => item._id==id)
    if(check>=0)
      return true;
    else
      return false;
  }
  _changeIcon=(data) =>
  {
    this.props.LikeProduct(data)
  }
  _AddCart=(item) =>{
    const {isLoangdingCart}=this.state
    if(!isLoangdingCart)
    {
      this.setState({isLoangdingCart:true})
      this.props.AddCart(item)
      setTimeout(() =>
     this._loadingAddcart(),200)
    }
  }
  _renderItem=({item,index}) =>
  {
    const {isLoangdingCart}=this.state
              return(
                  <View style={{height:FontSize.scale(350),width:FontSize.scale(250),marginRight:FontSize.scale(10)}}>
                  <View style={{flex:7,backgroundColor:colors.grayLight,flexDirection:'row'}}>
                                  <ImageBackground  source={{uri:item.imgproduct[0].img}} style={{position:'absolute',width:'100%' ,height:'100%'}}>
                                  </ImageBackground>
                          <View style={{flex:2,justifyContent:'space-between',alignItems:'flex-end',paddingVertical:FontSize.verticalScale(8),paddingHorizontal:FontSize.scale(8)}}>
                              <TouchableOpacity onPress={() =>this._changeIcon(item)}>
                                      {this._checkWhishlist(item._id) ==true ? 
                                      <Icon type={TypeIcon.AntDesign} name={'hearto'} size={22} color={colors.colorRed} />
                                      :<Icon type={TypeIcon.AntDesign} name={'hearto'} size={22} color={colors.black} />
                                    }
                              </TouchableOpacity>
                              <TouchableOpacity  onPress={() =>this._AddCart(item)}>
                                {!isLoangdingCart  ?
                                  <Icon Icon type={TypeIcon.AntDesign} name={'plussquare'}   size={30}></Icon>:
                                  <Loading/>
                                }
                             </TouchableOpacity>
                          </View>
                  </View>
                  <View style={{height:FontSize.scale(10)}}>
                  </View>
                  <Text style={{color:colors.grayLight,fontSize:FontSize.reText(18)}}>{item.nameproduct}</Text>
                  <Text style={{fontSize:FontSize.reText(25)}}>{item.price}</Text>

              </View>
              )
  }
  render() {
      const {txtLeft=null,txtRight=null,styleTextLeft={},datanew=[],isloading=false}=this.props
    return (
      <View style={{backgroundColor:colors.white,paddingVertical:FontSize.scale(15)}}>
          <View style={{flexDirection:'row',paddingHorizontal:FontSize.scale(12),justifyContent:'space-between'}}>
                <Text style={{...styles.StyleTextLeftBasic,...styleTextLeft}} >{txtLeft}</Text>
                <Text style={styles.styleTxt}>{txtRight}</Text>
                </View>
                <View
                style={{height:FontSize.scale(20)}}
                />
                    {!isloading ?
                     <FlatList
                     showsHorizontalScrollIndicator={false}
                     style={{height:FontSize.scale(400),backgroundColor:'white',paddingHorizontal:FontSize.scale(15)}}
                     renderItem={this._renderItem}
                     data={datanew}
                     horizontal={true}
                     keyExtractor={(item,index) => index}
                   >
                   </FlatList>: <Loading/>
                  }
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