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
import CartAction from '../../Redux/ActionsCart/CartAction'
import { Context } from '../../config/ThemeProvider2'
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
    _renderITem=(item,index) =>{
        return(
            <TouchableOpacity key={`${index}`} style={{
                paddingVertical:FontSize.scale(7),
                paddingHorizontal:FontSize.scale(5),
                backgroundColor:colors.colorGrayBgr,
                marginBottom:FontSize.scale(10),
                borderRadius:8,
            }}
            onPress={() =>{
                Utils.navigate(Config.ProductScreen,{maloai:item._id})
            }}
            >
                <View style={{paddingVertical:FontSize.scale(4),paddingHorizontal:FontSize.scale(7),flexDirection:'row',alignItems:'center'}}>
                {/* <View  style={{width:FontSize.scale(50),height:FontSize.scale(50),borderWdth:1,backgroundColor:colors.white,overflow:'hidden'}}> */}
                <Image  style={{width:FontSize.scale(70),height:FontSize.scale(70),resizeMode:'cover',borderRadius:70}}   source={{uri:item.imgproduct}}></Image>
                {/* </View> */}
                <View style={{width:FontSize.scale(10)}}>
                </View>
                <Text style={{fontSize:FontSize.reText(20)}}>
                    {item.nameproduct}
                </Text>
                
                <View style={{flex:3}}>
                    </View>
                    <View style={{width:FontSize.scale(20),height:FontSize.scale(20),paddingVertical:FontSize.scale(2),paddingHorizontal:FontSize.scale(2),backgroundColor:colors.grayLight,borderRadius:FontSize.scale(5)}}>
                        <Text style={{textAlign:'center'}}>{item.nameproduct}</Text>
                    </View>
                    <View style={{width:FontSize.scale(10)}}>
                    </View>
                    <View>
                       <Icon type={TypeIcon.AntDesign} name={'right'} size={16} ></Icon> 
                    </View>
                </View>
            </TouchableOpacity>
        )
}
    render() {
        const {isLoading}=this.state
        return (
          <Context.Consumer>
                {({ theme, updateTheme }) => (
                <View style={{flex:1,backgroundColor:theme.colors.background,paddingVertical:FontSize.scale(15),paddingHorizontal:FontSize.scale(15)}}>
                <SreachView  iconLeft={TypeIcon.AntDesign} txtNameIcon='search1' sizeicon={20} />
                    <View style={{height:FontSize.scale(24)}}>
                    </View>
                        <ImageBackground source={IMAGES.imgBgr1}  resizeMode={'cover'}  borderRadius={10} style={{ paddingVertical:FontSize.scale(20) }} >
                                <Text style={{textAlign:'center',fontWeight:'bold',fontSize:FontSize.reText(28),color:colors.orange}}>{'Up to 40% Off Holiday Bit'}</Text>
                                </ImageBackground>
                    <View style={{height:FontSize.scale(10)}}>

                    </View>
                    <ScrollView>
                                {!isLoading ?this.props.data.map(this._renderITem):
                                <ActivityIndicator size={'large'} color={colors.grayLight} style={{justifyContent:'center',alignItems:'center'}}/> 
                                }
                    </ScrollView>
                </View>
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
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(Shop)