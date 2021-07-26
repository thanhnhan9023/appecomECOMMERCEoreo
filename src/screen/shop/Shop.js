import React, { Component } from 'react'
import { ScrollView, Text, View ,Image, TouchableOpacity,ImageBackground,ActivityIndicator } from 'react-native'
import FontSize from '../../config/FontSize'
import Icon, { TypeIcon } from '../../config/Icon'
import { colors } from '../../config/style'
import SreachView from '../../container/SreachView'
import {IMAGES} from '../../../assets/images/IndexImg'
import Utils from '../../app/Utilis'
import Config from '../../navigation/Config'
import { connect } from 'react-redux'
import CartAction from '../../Redux/Actions/ActionCart/CartAction'
import { Context } from '../../config/ThemeProvider2'
import LinearGradient from 'react-native-linear-gradient'
const data=[
    {
        id:1,
        name:'Women',
        number:24,
        imgProduct:IMAGES.imgWomen,
    },
    {
        id:2,
        name:'Men',
        number:14,
        imgProduct:IMAGES.imgMen,
    },
    {
        id:3,
        name:'Kids',
        number:2,
        imgProduct:IMAGES.imgKids,
    },
    {
        name:'Sport',
        number:6,
        imgProduct:IMAGES.imgKids,
    },
    {
        id:4,
        name:'Decor',
        number:6,
        imgProduct:IMAGES.imgDecor,
    },
]
 class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading:true,
        };
      }
     componentDidMount = async() =>
     {
         const {isLoading}=this.state;
        try {
            const post= await this.props.FetchLoaiSp()
            if(post)
            {
                this.setState({isLoading:!isLoading})
            }
        } catch (error) {
            Utils.nlog(error);
        }    
     }
    _renderITem=(item,index) =>
    {
        return(
            <TouchableOpacity key={`${index}`} style={{
                paddingHorizontal:FontSize.scale(5),
                backgroundColor:colors.colorGrayBgr,
                marginBottom:FontSize.scale(20),
                elevation:FontSize.scale(8),
                borderRadius:FontSize.scale(10),
            }}
            onPress={() =>{
                Utils.navigate(Config.ProductScreen,{maloai:item._id})
            }}
            >
                {/* <LinearGradient colors={[colors.colorGrayBgr,colors.grayLight]}
                style={{elevation:FontSize.scale(9)}}
                > */}
                <View style={{paddingVertical:FontSize.scale(4),paddingHorizontal:FontSize.scale(7),flexDirection:'row',alignItems:'center'}}>
                <Image  style={{width:FontSize.scale(60),height:FontSize.scale(60),resizeMode:'cover',borderRadius:70}}   source={{uri:item.imgproduct}}></Image>
                <View style={{width:FontSize.scale(10)}}>
                </View>
                <Text style={{...FontSize.TextStyles.roboto,fontSize:FontSize.sizes.sText18}}>
                    {item.nameproduct}
                </Text>
                <View style={{flex:3}}>
                    </View>
                    <View style={{width:FontSize.scale(20),height:FontSize.scale(20),paddingVertical:FontSize.scale(2),paddingHorizontal:FontSize.scale(2),backgroundColor:colors.colorGrayBgr,borderRadius:FontSize.scale(5)}}>
                        <Text style={{textAlign:'center',...FontSize.TextStyles.roboto,fontSize:FontSize.sizes.sText19}}>{item.nameproduct}</Text>
                    </View>
                    <View style={{width:FontSize.scale(10)}}>
                    </View>
                    <View>
                       <Icon type={TypeIcon.AntDesign} name={'right'} size={14} ></Icon> 
                    </View>
                </View>
                {/* </LinearGradient> */}
            </TouchableOpacity>
        )
    }
    addproduct= async () =>
    {
        let product={
            _id:"6",
            nameproduct:"Men 6",
            imgproduct:"https://i.postimg.cc/1zY9bfV6/pexels-photo-2853507.jpg",
            descriptio:"anh dep"
        }
        this.props.Add(product)
    }
    render() {
        const {isLoading}=this.state
        return (
          <Context.Consumer>
                {({ theme, updateTheme }) => (
                <ScrollView showsVerticalScrollIndicator={false} style={{flex:1,backgroundColor:theme.colors.background,paddingVertical:FontSize.scale(15),paddingHorizontal:FontSize.scale(15)}}>
                <SreachView  iconLeft={TypeIcon.AntDesign} txtNameIcon='search1' sizeicon={20} />
                    <View style={{height:FontSize.scale(24)}}/>
                        <ImageBackground source={IMAGES.imgBgr1}  resizeMode={'cover'}  borderRadius={10} style={{ paddingVertical:FontSize.scale(20) }} >
                                <Text style={{textAlign:'center',fontWeight:'bold',fontSize:FontSize.reText(28),color:colors.orange}}>{'Up to 40% Off Holiday Bit'}</Text>
                        </ImageBackground>
                        <View style={{paddingVertical:FontSize.scale(15)}}>
                            {!isLoading ?this.props.data.map(this._renderITem):
                              <ActivityIndicator size={'large'} color={colors.grayLight} style={{justifyContent:'center',alignItems:'center'}}/> 
                            }
                        </View>
                </ScrollView>
                )}
            </Context.Consumer>
        )
    }
}
const mapStateToProps =(state) =>{
    return{
      data:state.CartReducer.ListLoaisp
    }
  }
  const mapDispatchToProps =(dispatch) =>{
    return {
      FetchLoaiSp:() => dispatch(CartAction.ActionFetchLoaiSpRequest()),
      Add:(product) => dispatch(CartAction.ActionPostAccountRequest(product))
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(Shop)