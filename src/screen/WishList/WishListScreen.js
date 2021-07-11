import React, { Component } from 'react';
import { View, Text,Image,TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Utils from '../../app/Utilis';
import Button2 from '../../component/Button2';
import Empty from '../../component/EmptyScreen/Empty';
import FontSize from '../../config/FontSize';
import Icon, { TypeIcon } from '../../config/Icon';
import { colors } from '../../config/style';
import HeaderView from '../../container/HeaderView';
import Config from '../../navigation/Config';
import CartAction from '../../Redux/ActionsCart/CartAction';
import { SwipeListView } from 'react-native-swipe-list-view';
import { TextColor, themes } from '../../config/ThemeProvider';
import ThemeProvider2,{Context} from '../../config/ThemeProvider2';


 class WishListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
_RemoveLike=(id,item)=>{
  this.props.LikeProduct(id)
  // this.props.Add_Remove(item)
}
_GetCountLike()
{
  return this.props.data.length+"";
}
_RenderItemEmpty() 
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
_RenderItemHeader=() =>
  {
    return(
    <View>
      <HeaderView
      TitleCenter={'WishList'}
      iconright={true}
      righticonone={true}
      />
      <View style={{alignItems:'center'}}>
          <Text style={{color:colors.grayLight,fontSize:FontSize.reText(18)}}>{this._GetCountLike()+' item'}</Text>
      </View>
    </View>
    )
  }
_RenderItemHiden=({item}) =>{
    return(
      <View style={{
        flex: 1,
        paddingTop: FontSize.scale(10),
        alignItems: 'flex-end'
    }}>
        <View style={{ flexDirection: 'row' ,flex:1}}>
                     <TouchableOpacity  
                     style={{backgroundColor:colors.redStar,
                      alignItems:'center',
                      justifyContent:'center',
                      width:FontSize.scale(80)}}
                      onPress={() =>{this._RemoveLike(item.id,item)}}
                      >
                          <Icon type={TypeIcon.FontAwesome} name={'trash-o'} size={24} color={colors.white}></Icon>
                     </TouchableOpacity>
        </View>
    </View>
    )
}
_AddCart(item)
{
  this.props.AddCart(item)
}
_RenderItem= ({item,index}) =>
  {
    return(
    <View style={ index==1?{ flexDirection:'row',
    paddingVertical:FontSize.scale(10),
    paddingHorizontal:FontSize.scale(10),
    borderTopWidth:0.6,
    borderBottomWidth:0.6,
    borderTopColor:colors.grayLight,
    backgroundColor:colors.white
  }:
    { flexDirection:'row',paddingVertical:FontSize.scale(10),
    paddingHorizontal:FontSize.scale(10),
    borderBottomWidth:0.6,
    borderTopColor:colors.grayLight,
    backgroundColor:colors.white
    }}>
              <Image source={{uri:item.imgproduct[0].img}} style={{width:FontSize.scale(60),height:FontSize.scale(80)}} ></Image>
              <View style={{flex:1,flexDirection:'row'}}>
                <View style={{paddingHorizontal:FontSize.scale(10)}} >
                    <Text>{item.nameproduct}</Text>
                      <View style={{height:FontSize.scale(10)}}/>
                    <Button2 
                    style={{with:FontSize.scale(180),backgroundColor:colors.black}} 
                    styleTxt={{color:colors.white}} 
                    title={'Add to Cart'}
                    onPress={() =>{this._AddCart(item)}}
                    />
                </View>
              <View View style={{flex:1,justifyContent:'flex-start',alignItems:'flex-end'}}>
                <Text  style={{fontWeight:'bold'}}>
                  {'$'+item.PriceProduct+'.00'}
                </Text>
              </View>
          </View>
  </View>
    )
  }
  render() {
    Utils.nlog(this.props.data)
    return (
      <Context.Consumer>
          {({ theme, updateTheme }) => (
          <SwipeListView 
          style={{backgroundColor:theme.colors.background}}
          keyExtractor={(item,index) => index}
          data={this.props.data}
          renderItem={this._RenderItem}
          ListHeaderComponent={this._RenderItemHeader}
          ListEmptyComponent={this._RenderItemEmpty}
          renderHiddenItem={this._RenderItemHiden}
          rightOpenValue={-FontSize.scale(160)}
          />
          )}
        </Context.Consumer>
    )
  }
}
const mapStateToProps =(state) =>{
  return{
    data:state.CartReducer.ListProductLike
  }
}
const mapDispatchToProps =(dispatch) =>{
  return {
    AddCart:(data) => dispatch(CartAction.ActionAddCart(data)),
    Add_Remove:(data) => dispatch(CartAction.ActionAdd_RemoveLike(data)),
    LikeProduct:(id) =>dispatch(CartAction.ActionAdd_LikeProduct(id)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(WishListScreen)