import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import HeaderView from '../../container/HeaderView'
import FontSize from '../..//config/FontSize';
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



const dataList = [
    {
        id: 1,
        name: 'App setting',
        iconLeft: 'setting',
        iconRight: 'right',
        textRight: 'right',
        typeicon:TypeIcon.AntDesign,
        
    },
    {
        id: 1,
        name: 'Help & info',
        iconLeft: 'help-circle',
        iconRight: 'right',
        textRight: 'right',
        typeicon:TypeIcon.Feather,
    },
    {
        id: 1,
        name: 'Hotline',
        iconLeft: 'phone-call',
        iconRight: null,
        textRight: '0123 456 789',
        typeicon:TypeIcon.Feather,
    },
]
const dataIcon=[
    {
      TypeIcon:TypeIcon.AntDesign,
      NameIcon:'facebook-square',
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
                                borderWidth:1,
                                borderColor:colors.grayLight,
                                justifyContent:'center',
                                alignItems:'center',
                                backgroundColor:colors.white,
                                }}
                                >
                                    <Icon type={TypeIcon} name={NameIcon} color={ColorIcon} size={22}></Icon>
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
                        <Icon  type={typeicon} name={iconLeft} size={FontSize.reText(30)} color={colors.grayLight}  />
                        <View style={{paddingHorizontal:FontSize.scale(10)}}/>
                        <Text style={
                            {flex:7,
                            fontSize:FontSize.reText(22),
                            color:theme.colors.text,
                            justifyContent:'center'}}>
                            {name}
                         </Text>
                        {iconRight ?<Icon type={TypeIcon.AntDesign} name={textRight} size={20}></Icon>:
                        <Text style={{color:colors.grayLight,fontSize:FontSize.reText(19)}}>{textRight}</Text>}
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
        Utils.nlog(i18n);
        return (
            
            <Context.Consumer>
                   {({ theme }) => (
            <View style={{flex:1,backgroundColor:theme.colors.background}}>
                <HeadViewCustom
                   
                   ViewLeft={
                       (
                        <View style={{width:FontSize.scale(22)}}>

                        </View>
                        )
                   }
                    ViewCenter={
                        (
                            <Text style={{fontSize:FontSize.reText(22),fontWeight:'bold',color:theme.colors.text}} >{'Me'}</Text>
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
                <View style={{paddingVertical:FontSize.scale(10),paddingHorizontal:FontSize.scale(40),justifyContent:'center',alignItems:'center'}}>
                        <Text numberOfLines={2}  style={{textAlign:'center',color:colors.grayLight,fontSize:FontSize.reText(20),fontWeight:'800'}}>
                            {'Sign in  to receive exclusive offfers and Promotions'}</Text>
                </View>
                <View style={{flexDirection:'row',paddingVertical:FontSize.scale(10),paddingHorizontal:FontSize.scale(10)}} >
                    <Button2    onPress={() =>{
                        Utils.navigate(Config.Registration)
                    }} style={{flex:1,paddingVertical:FontSize.scale(10)}} title={'Create an Account'}  ></Button2>
                    <View style={{paddingHorizontal:FontSize.scale(5)}}/>
                    <Button2  style={{flex:1,
                    paddingVertical:FontSize.scale(10),
                    backgroundColor:colors.black}} title={'Sign In'} 
                    onPress={() =>{
                        Utils.navigate(Config.Sign)
                    }}
                    styleTxt={{color:colors.white}}></Button2>
                </View>
                <Text style={{paddingHorizontal:FontSize.scale(10),
                    paddingVertical:FontSize.scale(10),
                    color:colors.grayLight,
                    fontSize:FontSize.reText(22)}}>{'Settings'}
                </Text>
                <View style={{paddingVertical:FontSize.scale(10),
                    paddingHorizontal:FontSize.scale(10)}}>
                      
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
                <TouchableOpacity onPress={() =>{
                    if(i18n.language=='vi')
                    {
                      i18n.changeLanguage('en');
                    }
                    else{
                        i18n.changeLanguage('vi');
                    }
                }}>
                    <Text>{'doi ngon ngu'}</Text>
                      </TouchableOpacity>
            </View>
                   )}
            </Context.Consumer>
           
        )
    }
}

export default withNamespaces()(login);

