import React, { Component } from 'react'
import { Text, StyleSheet, View,Image,TouchableOpacity } from 'react-native'
import { IMAGES } from '../../../assets/images/IndexImg'
import Utils from '../../app/Utilis'
import FontSize from '../../config/FontSize'
import Icon,{ TypeIcon } from '../../config/Icon'
import { colors } from '../../config/style'
import HeadViewCustom from '../../container/HeadViewCustom'
import NumberCart from '../../container/NumberCart'
import { connect } from 'react-redux'
import AuthAction from '../../Redux/Actions/ActionAuth/AuthAction'
import Config from '../../navigation/Config'
import ConfigStack from '../../navigation/ConfigStack'

 const dataiInformation=[
    {
        nameicon1:'account',
        typeicon1:TypeIcon.MaterialCommunityIcons,
        name:'My account',
        nameicon2:'right',
        typeicon2:TypeIcon.AntDesign,
        phone:'',
    },
    {
        nameicon1:'download',
        typeicon1:TypeIcon.Feather,
        name:'Oders && Returns',
        nameicon2:'right',
        typeicon2:TypeIcon.AntDesign,
        phone:'',
    },
    {
        nameicon1:'download',
        typeicon1:TypeIcon.Feather,
        name:'Downloads',
        nameicon2:'right',
        typeicon2:TypeIcon.AntDesign,
        phone:'',
    },
]
const dataIcon=[
    {
      TypeIcon:TypeIcon.FontAwesome,
      NameIcon:'facebook',
      ColorIcon:colors.blue,
      backgroundColorIcon:colors.white,
    },
    {
      TypeIcon:TypeIcon.AntDesign,
      NameIcon:'instagram',
      ColorIcon:colors.blueGrey,
      backgroundColorIcon:colors.white,
    },
    {
        TypeIcon:TypeIcon.FontAwesome,
        NameIcon:'pinterest',
        ColorIcon:colors.orangeyRed,
        backgroundColorIcon:colors.white,
      },
    {
        
      TypeIcon:TypeIcon.AntDesign,
      NameIcon:'twitter',
      ColorIcon:colors.blueZalo,
      backgroundColorIcon:colors.white,
    },
  ]
class LoginSuccess extends Component {
    constructor(props) {
    super(props);
    this.state = {
        dataSettings:[
            {
                nameicon1:'setting',
                typeicon1:TypeIcon.AntDesign,
                name:'App Settings',
                nameicon2:'right',
                typeicon2:TypeIcon.AntDesign,
                phone:'',
                onPress:() =>{
                   
                }
            },
            {
                nameicon1:'help-circle',
                typeicon1:TypeIcon.Feather,
                name:'Help & info',
                nameicon2:'right',
                typeicon2:TypeIcon.AntDesign,
                phone:'',
                onPress:() =>{
                   
                }
            },
            {
                nameicon1:'phone-call',
                typeicon1:TypeIcon.Feather,
                name:'Hotline',
                nameicon2:'right',
                typeicon2:TypeIcon.AntDesign,
                phone:'',
                onPress:() =>{
                   
                }
            },
            {
                nameicon1:'log-out',
                typeicon1:TypeIcon.Entypo,
                name:'Sign Out',
                nameicon2:'right',
                typeicon2:TypeIcon.AntDesign,
                phone:'0123 456 789',
                onPress:() =>{
                    let a={RefreshToken:this.props.token.RefreshToken}
                    this.props.Logout(a);
                    Utils.navigate(ConfigStack.AuthStack,{screen:Config.login,initial: false})
                }
            },
        ]
    };
    }
    _renderItemInformation=(item,index,indexTxt,isTxt,isIcon) =>{
        return(
            <View key={index}>
                <View style={{flexDirection:'row',justifyContent:'space-between',borderBottomWidth:index==dataiInformation.length-1?0:0.7,
            borderBottomColor:colors.grayLight,paddingVertical:FontSize.scale(10)}}>
                    <View style={{flexDirection:'row'}}>
                        <Icon  type={item.typeicon1} name={item.nameicon1} size={22} color={colors.grayLight}/>
                        <View style={{width:FontSize.scale(15)}}/>
                        <Text style={{...FontSize.TextStyles.semiBold,fontSize:FontSize.sizes.sText17}} >{item.name}</Text>
                    </View>
                    {isTxt==true && index==indexTxt  ?<Text>{item.txt}</Text>:null }
                    {isIcon==true ? <Icon type={item.typeicon2} name={item.nameicon2} size={18}/>:null}
                </View>
            </View>
        )
    }
    _renderItemSettings=(item,index,indexTxt,indexIcon,isTxt,isIcon) =>{
        const {dataSettings}=this.state
        return(
            <TouchableOpacity key={index}  onPress={() => item.onPress()}>
                <View style={{flexDirection:'row',justifyContent:'space-between',borderBottomWidth:index==dataSettings.length-1?0:0.7,
            borderBottomColor:colors.grayLight,paddingVertical:FontSize.scale(10)}}>
                    <View style={{flexDirection:'row'}}>
                        <Icon  type={item.typeicon1} name={item.nameicon1} size={22} color={colors.grayLight}/>
                        <View style={{width:FontSize.scale(15)}}/>
                        <Text style={{...FontSize.TextStyles.semiBold,fontSize:FontSize.sizes.sText17}} >{item.name}</Text>
                    </View>
                    {isTxt==true && index==indexTxt  ?<Text style={{...FontSize.TextStyles.roboto,fontSize:FontSize.sizes.sText16,color:colors.grayLight}}>{item.phone}</Text>:null }
                    {isIcon==true && index!=indexIcon && index!=indexTxt  ?<Icon type={item.typeicon2} name={item.nameicon2} size={18}/>:null}
                </View>
            </TouchableOpacity>
        )
    }
    _renderItemIconsmall=(item,index) =>{
        const {
            TypeIcon,
            NameIcon,
            ColorIcon,
        }=item
        return(
                    <View key={`${index}`} style={{backgroundColor:null,flexDirection:'row',paddingVertical:FontSize.scale(0)}}>
                        <TouchableOpacity style={styles.itemIcon}
                            >
                                <Icon type={TypeIcon} name={NameIcon} color={ColorIcon} size={18}></Icon>
                            </TouchableOpacity>
                            <View style={{backgroundColor:null,width:FontSize.scale(8)}}>
                            </View>
                    </View>
        )
    }
    render() {
        const {dataSettings}=this.state
        return (
            <View style={{flex:1,backgroundColor:colors.white,paddingVertical:FontSize.scale(10),paddingHorizontal:FontSize.scale(15)}}>
                <HeadViewCustom
                    ViewLeft={
                        <View style={{width:FontSize.scale(20)}}/>
                    }
                    ViewCenter={
                        (
                            <Text style={{...FontSize.TextStyles.largeBold}} >{'Me'}</Text>
                        )
                    }
                    CenterContainerStyle={{
                         justifyContent:'center'
                    }}
                    ViewRight={
                        (
                           <View style={{flexDirection:'row'}}>
                                 <NumberCart
                                         number={0}
                                    />
                                 <Icon type={TypeIcon.AntDesign} name='down-square-o' size={22}/>
                           </View>
                        )
                    }
                />
                <View style={{backgroundColor:colors.colorGrayBgr,height:FontSize.scale(100),paddingVertical:FontSize.scale(15),paddingHorizontal:FontSize.scale(12)}}>
                    <View style={{flex:1,flexDirection:'row'}}>
                        <Image source={IMAGES.imgWomen} style={{width:FontSize.scale(50),height:FontSize.scale(50)}} borderRadius={FontSize.scale(50)}/>
                        <View style={{alignItems:'center',justifyContent:'center',width:FontSize.scale(50),height:FontSize.scale(50)}}>
                            <Text style={{textAlign:'center'}}>{'Hello'}</Text>
                        </View>
                    </View>
                </View>
                <Text style={{marginTop:FontSize.scale(15),fontSize:FontSize.sizes.sText18,color:colors.grayLight}}>{'Information'}</Text>
                <View style={{height:FontSize.scale(18)}}/>
               {dataiInformation.map((item,index) =>this._renderItemInformation(item,index,-1,false,true))}
               <Text style={{marginTop:FontSize.scale(25),fontSize:FontSize.sizes.sText18,color:colors.grayLight}}>{'Settings'}</Text>
               {dataSettings.map((item,index) =>this._renderItemSettings(item,index,3,2,true,true))}
               <View style={{flexDirection:'row',paddingVertical:FontSize.scale(20)}}>
               {dataIcon.map(this._renderItemIconsmall)}   
               <View style={{height:FontSize.scale(20)}}/>
               </View>
               <Text>{'sdsdsds'}</Text>
               <View style={{height:FontSize.scale(20)}}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.white,
        paddingVertical:FontSize.scale(10),
        paddingHorizontal:FontSize.scale(15),
    },
    itemIcon:{
        borderRadius:FontSize.scale(3),
        width:FontSize.scale(30),
        height:FontSize.scale(30),
        borderWidth:0.6,
        borderColor:colors.grayLight,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:colors.white,
    }
})
 
const mapStateToProps =(state) =>{
    return{
        token:state.AuthReducer.token
    }
  }

  const mapDispatchToProps =(dispatch) =>{
    return {
      Logout:(data) => dispatch(AuthAction.Logout(data)),
    }
  }

  export default connect(mapStateToProps,mapDispatchToProps)(LoginSuccess)
