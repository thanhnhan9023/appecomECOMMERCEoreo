import React, { Component } from 'react'
import { Text, TouchableOpacity, View,Image, ScrollView ,Animated,FlatList,Dimensions} from 'react-native'
import Icon, { TypeIcon } from '../../config/Icon'
import HeadViewCustom from '../../container/HeadViewCustom'
// import Carousel from 'react-native-snap-carousel';
import Utils from '../../app/Utilis';
import NumberCart from '../../container/NumberCart';
import FontSize from '../../config/FontSize';
import { colors } from '../../config/style';
import { IMAGES } from '../../../assets/images/IndexImg';
import Carousel from './Carousel';
import { scale } from 'react-native-size-matters';
import { RFValue } from 'react-native-responsive-fontsize';

const datablognew=[
    {
        id:1,
        title:'nhan',
        time:'',
        img:IMAGES.imgBlog1,
    },
    {
        id:1,
        title:'nhan 2',
        time:'2 years ago',
        img:IMAGES.imgBlog2,
    },
    {
        id:1,
        title:'nhan 3',
        time:'2 years ago',
        img:IMAGES.imgBlog3,
    },
    {
        id:1,
        title:'nhan 4',
        time:'2 years ago',
        img:IMAGES.imgBackGroud,
    },
    {
        id:1,
        title:'nhan 5',
        time:'2 years ago',
        img:IMAGES.imgBackGroudShop,
    },
]
// const {width} = Dimensions.get('screen');
// const cardWidth = width / 1.8;
export default class DetalisBlog extends Component {
    render() {
        const {data,numbercart}=this.props.route.params
        return (
            <View style={{flex:1,backgroundColor:colors.white,paddingHorizontal:FontSize.scale(15)}}>
                <HeadViewCustom
                    ViewLeft={
                        <TouchableOpacity onPress={() => Utils.goBack()}>
                        <Icon type={TypeIcon.AntDesign} name={'left'} size={scale(18)}/>
                        </TouchableOpacity>
                    }
                    ViewCenter={
                        <Text style={{...FontSize.TextStyles.semiBold,fontSize:RFValue(18,FontSize.Height(100))}}>{'Blog'}</Text>
                    }
                    ViewRight={
                       <View style={{flexDirection:'row'}}>
                           <NumberCart
                           number={numbercart}
                           />
                           <Icon />
                       </View>
                    }
                />
                <ScrollView
                showsVerticalScrollIndicator={false}
                > 
                    <View>
                        <Text style={{...FontSize.TextStyles.semiBoldm,fontSize:FontSize.sizes.sText28}}>{'Lastest'}</Text>
                    </View>
                    <Carousel data={datablognew}/>
                    <View style={{height:FontSize.scale(30),borderBottomWidth:1,borderBottomColor:colors.grayLight}}></View>
                        {datablognew.map((item,index) =>{
                            return(
                                <View key={index} style={{borderBottomWidth:1.5,borderBottomColor:colors.colorGrayBgr,flexDirection:'row',
                                paddingVertical:FontSize.scale(20),
                                }}>
                                    <Image source={item.img} 
                                    style={{width:FontSize.scale(140),
                                        height:FontSize.scale(120),
                                    }}
                                    borderRadius={FontSize.scale(4)}
                                    />
                                    <View style={{paddingHorizontal:FontSize.scale(12)}}>
                                        <Text style={{...FontSize.TextStyles.semiBold,fontSize:FontSize.sizes.sText20}}>{'Sudan Archives Flips the Script'}</Text>
                                        <View style={{height:FontSize.scale(10)}}/>
                                        <Text>{item.time}</Text>
                                        <View style={{height:FontSize.scale(15)}}/>
                                        <Text>{'Fashion by admin'}</Text>
                                    </View>
                                </View>
                            )
                        })}
                    </ScrollView>
            </View>
        )
    }
}

