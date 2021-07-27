import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import HeaderView from '../../container/HeaderView'
import FontSize from '../../config/FontSize';
import { colors } from '../../config/style';
import Button2 from '../../component/Button2';
import Icon, { TypeIcon } from '../../config/Icon';
import Config from '../../navigation/Config';
import Utils from '../../app/Utilis';
import { Context } from '../../config/ThemeProvider2';
import HeadViewCustom from '../../container/HeadViewCustom';
import NumberCart from '../../container/NumberCart';
import i18n from '../../config/i18n';
import { withNamespaces } from 'react-i18next';
import { connect } from 'react-redux'
import AuthAction from '../../Redux/Actions/ActionAuth/AuthAction'
import LoginSuccess from './LoginSuccess';
import ConfigStack from '../../navigation/ConfigStack';
import ButtonLinear from '../../container/ButtonLinear';
import { ScrollView } from 'react-native-gesture-handler';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { scale } from 'react-native-size-matters';

const dataList = [
    {
        name: 'App Settings',
        iconLeft: 'setting',
        iconRight: 'right',
        textRight: 'right',
        typeicon:TypeIcon.AntDesign,
    },
    {
        name: 'Help & info',
        iconLeft: 'help-circle',
        iconRight: 'right',
        textRight: 'right',
        typeicon:TypeIcon.Feather,
    },
    {
        name: 'Hotline',
        iconLeft: 'phone-call',
        iconRight: null,
        textRight: '0123 456 789',
        typeicon:TypeIcon.Feather,
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
const datasetings=[
    {
        name:'Language',
        typeicon:'',
        nameicon:''
       },
       {
           name:'Language',
           typeicon:TypeIcon.AntDesign,
           nameicon:'right',
           txtright:'EN',
       },
       {
           name:'Currency',
           typeicon:TypeIcon.AntDesign,
           nameicon:'right',
           txtright:'USD',
       },
       {
           name:'Config Advanced',
           typeicon:TypeIcon.AntDesign,
           nameicon:'right',
           txtright:'',
       },
       {
           name:'Dark Theme',
           typeicon:'',
           nameicon:'',
           txtright:'',
       },
       {
           name:'Dark Theme',
           typeicon:'',
           nameicon:'',
           txtright:'',
       },
]

 class login extends Component {
                constructor(props) {
                    super(props);
                this.state = {
                };
            }
        _renderItemIconsmall=(item,index) =>{
            const {
                TypeIcon,
                NameIcon,
                ColorIcon,
            }=item
            return(
                        <View key={`${index}`} style={{backgroundColor:null,flexDirection:'row',paddingVertical:FontSize.scale(0)}}>
                            <TouchableOpacity style={{borderRadius:FontSize.scale(3),width:FontSize.scale(30),
                                height:FontSize.scale(30),
                                borderWidth:0.6,
                                borderColor:colors.grayLight,
                                justifyContent:'center',
                                alignItems:'center',
                                backgroundColor:colors.white,
                                }}
                                >
                                    <Icon type={TypeIcon} name={NameIcon} color={ColorIcon} size={scale(14)}></Icon>
                                </TouchableOpacity>
                                <View style={{backgroundColor:null,width:FontSize.scale(8)}}>
                                </View>
                        </View>
            )
        }
        _renderITem=(item,index,theme) =>{
                const {iconLeft,iconRight,textRight,name,typeicon} =item
                return(
                    <TouchableOpacity key={`${index}`} 
                        style={{flexDirection:'row',
                        borderBottomColor:colors.grayLight,
                        paddingHorizontal:FontSize.scale(10),
                        paddingVertical:FontSize.scale(13),
                        borderBottomWidth:index==dataList.length-1 ?0:0.7,
                        }}
                        onPress={() => Utils.navigate(Config.Settings)}
                    >
                        <Icon  type={typeicon} name={iconLeft} size={FontSize.scale(22)} color={colors.grayLight}  />
                        <View style={{paddingHorizontal:FontSize.scale(10)}}/>
                        <Text style={
                            {flex:7,
                            ...FontSize.TextStyles.semiBold,
                            fontSize:RFValue(17,FontSize.Height(100)),
                            color:theme.colors.text,
                            justifyContent:'center'}}>
                            {name}
                         </Text>
                        {iconRight ?<Icon type={TypeIcon.AntDesign} name={textRight} size={FontSize.scale(18)}></Icon>:
                        <Text style={{color:colors.grayLight,fontSize:RFValue(14,FontSize.Height(100))}}>{textRight}</Text>}
            </TouchableOpacity>
                )

        }
        _renderITemIcon=(item,index) =>{
            const {iconLeft,iconRight,textRight,name} =item
            return(
                <TouchableOpacity key={`${index}`} 
                style={{flexDirection:'row',
                borderBottomColor:colors.grayLight,
                paddingHorizontal:FontSize.scale(10),
                paddingVertical:FontSize.scale(13),
                borderBottomWidth:index==dataList.length-1 ?0:0.7,
                }
                }>
                    <Icon  type={TypeIcon.AntDesign} name={`${iconLeft}`} size={FontSize.reText(30)}  />
                    <View style={{paddingHorizontal:FontSize.scale(10)}}/>
                    <Text style={{flex:7,fontSize:FontSize.reText(19),justifyContent:'center'}}>
                        {name} 
                    </Text>
                    <Text  numberOfLines={1} style={{flex:3}}>
                        {textRight}
                    </Text>
        </TouchableOpacity>
            )
    }
    render() {
        const { t } = this.props;
        if(this.props.token==null && this.props.tokenSocial==null)
        {
            console.log('va0 1')
        return (
            <Context.Consumer>
                   {({ theme }) => (
            <ScrollView  showsVerticalScrollIndicator={false} style={{flex:1,backgroundColor:colors.white,paddingVertical:FontSize.scale(10),paddingHorizontal:FontSize.scale(15)}}>
                <HeadViewCustom
                   ViewLeft={
                       (
                        <View style={{width:FontSize.scale(18)}}/>
                        )
                   }
                    ViewCenter={
                        (
                            <Text style={{...FontSize.TextStyles.largeBold,color:theme.colors.text,fontSize:RFValue(19,FontSize.Height(100))}} >{'Me'}</Text>
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
                                    <Icon type={TypeIcon.AntDesign} name='down-square-o' size={FontSize.scale(18)}/>
                           </View>
                        )
                    }
                />
                <View style={{paddingHorizontal:FontSize.scale(40),justifyContent:'center',alignItems:'center'}}>
                        <Text numberOfLines={2}  style={{...FontSize.TextStyles.roboto,fontSize:RFValue(15,FontSize.Height(100)),textAlign:'center',color:colors.grayLight}}>
                            {'Sign in to receive exclusive offfers and Promotions'}</Text>
                </View>
                <View style={{flexDirection:'row',paddingVertical:FontSize.scale(10)}} >
                    <ButtonLinear
                    title={'Create an Account'}
                    color={[colors.white,colors.whiteTwo]}
                    styleContainer={{flex:1,borderWidth:1,borderRadius:FontSize.scale(3)}}
                    style={{paddingVertical:FontSize.scale(10),justifyContent:'center',alignItems:'center',borderRadius:FontSize.scale(3)}}
                    txtStyle={{...FontSize.TextStyles.roboto,fontSize:RFValue(16,FontSize.Height(100)),color:colors.black}}
                    onPress={() =>Utils.navigate(ConfigStack.AuthStack,{screen:Config.Registration,initial: false})}
                    />
                    <View style={{paddingHorizontal:FontSize.scale(5)}}/>
                    <ButtonLinear
                    title={'Sign In'}
                    color={[colors.black,colors.black]}
                    styleContainer={{flex:1}}
                    style={{paddingVertical:FontSize.scale(10),justifyContent:'center',alignItems:'center',borderRadius:FontSize.scale(3)}}
                    txtStyle={{...FontSize.TextStyles.roboto,fontSize:RFValue(16,FontSize.Height(100)),color:colors.white}}
                    onPress={() =>Utils.navigate(ConfigStack.AuthStack,{screen:Config.Sign,initial: false})}
                    />
                </View>
                
                <Text style={{paddingHorizontal:FontSize.scale(10),
                    paddingVertical:FontSize.scale(10),
                    color:colors.grayLight,
                    fontSize:FontSize.reText(20)}}>{'Settings'}
                </Text>
                <View style={{paddingVertical:FontSize.scale(10)}}>
                           {
                         dataList.map((item,index) =>this._renderITem(item,index,theme))//gọi k càn đog ngoặc 
                        }
                </View>
                <View style={{backgroundColor:null,
                flexDirection:'row',
                paddingVertical:FontSize.scale(0),
                paddingHorizontal:FontSize.scale(15)}}> 
                {dataIcon.map(this._renderItemIconsmall)}
                </View>
                <View style={{flexDirection:'row',
                paddingVertical:FontSize.scale(12),
                paddingHorizontal:FontSize.scale(15)}}>
                    <Icon type={TypeIcon.AntDesign}   name={'copyright'} size={FontSize.reText(13)} color={colors.grayLight} ></Icon>
                    <View style={{width:FontSize.scale(10)}}/>
                    <Text style={{fontSize:FontSize.reText(18),color:colors.grayLight}}>{'2020'}</Text>
                    <View style={{paddingHorizontal:FontSize.scale(4),color:theme.colors.text}}/>
                    <Text  style={{fontSize:FontSize.reText(18),color:colors.grayLight}}>{i18n.t('home')}</Text>
                </View>
            </ScrollView>
                   )}
            </Context.Consumer>
           
        )
    }
    else
        return(
            <LoginSuccess/>
        )
    
    }
}
const mapStateToProps =(state) =>{
    return{
        token:state.AuthReducer.token,
        tokenSocial:state.AuthReducer.tokenSocial,
    }
  }

export default connect(mapStateToProps,null)(login);

