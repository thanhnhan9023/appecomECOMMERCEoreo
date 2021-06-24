import React, { Component } from 'react'
import { Text, TouchableOpacity, View,Image, ScrollView } from 'react-native'
import Icon, { TypeIcon } from '../../config/Icon'
import HeadViewCustom from '../../container/HeadViewCustom'
import Carousel from 'react-native-snap-carousel';
import Utils from '../../app/Utilis';
import NumberCart from '../../container/NumberCart';
import FontSize from '../../config/FontSize';
import { colors } from '../../config/style';
import { IMAGES } from '../../../assets/images/IndexImg';

const datablognew=[
    {
        id:1,
        title:'',
        time:'',
        img:IMAGES.imgBlog1,
    },
    {
        id:1,
        title:'',
        time:'2 years ago',
        img:IMAGES.imgBlog2,
    },
    {
        id:1,
        title:'',
        time:'2 years ago',
        img:IMAGES.imgBlog3,
    },
    {
        id:1,
        title:'',
        time:'2 years ago',
        img:IMAGES.imgBackGroud,
    },
    {
        id:1,
        title:'',
        time:'2 years ago',
        img:IMAGES.imgBackGroudShop,
    },
]
export default class DetalisBlog extends Component {
    render() {
        const {data}=this.props.route.params
        return (
            <View style={{flex:1,backgroundColor:colors.white}}>
                <HeadViewCustom
                    ViewLeft={
                        <TouchableOpacity onPress={() => Utils.goBack()}>
                        <Icon type={TypeIcon.AntDesign} name={'left'} size={24}/>
                        </TouchableOpacity>
                    }
                    ViewCenter={
                        <Text style={{fontSize:FontSize.reText(24),fontWeight:'bold'}}>{'Blog'}</Text>
                    }
                    ViewRight={
                       <View style={{flexDirection:'row'}}>
                           <NumberCart
                           number={0}
                           />
                           <Icon />
                       </View>
                    }
                />
                <ScrollView
                showsVerticalScrollIndicator={false}
                > 
                    <View style={{paddingHorizontal:FontSize.scale(15)}}>
                        <Text style={{fontSize:FontSize.scale(24)}}>{'Lastest'}</Text>
                    </View>
                    <Carousel
                    ref={(c) => { this._carousel = c; }}
                    data={data}
                    horizontal
                    keyExtractor={(item,index) => index}
                    sliderWidth={FontSize.Width(100)}
                    itemWidth={FontSize.scale(280)}
                    layout={'default'}
                    renderItem={({item,index}) =>{
                        return(
                            <View style={{width:FontSize.scale(270),borderRadius:FontSize.scale(10),backgroundColor:colors.whiteTwo}}>
                                <Image borderTopLeftRadius={FontSize.scale(10)}  borderTopRightRadius={FontSize.scale(10)} source={item.img} style={{width:FontSize.scale(270),height:FontSize.scale(240)}}/>
                                <View style={{paddingHorizontal:FontSize.scale(10)}}>
                                    <View style={{height:FontSize.scale(8)}}></View>
                                    <Text>{item.Titele}</Text>
                                    <View style={{height:FontSize.scale(8)}}></View>
                                    <Text>{item.time}</Text>
                                </View>
                                <View style={{height:FontSize.scale(20)}}></View>
                            </View>
                        )
                    }}
                    />
                    <View style={{height:FontSize.scale(30),borderBottomWidth:1,borderBottomColor:colors.grayLight}}></View>
                    
                        {datablognew.map((item,index) =>{
                            return(
                                <View style={{borderBottomWidth:1.5,borderBottomColor:colors.colorGrayBgr,flexDirection:'row',
                                paddingVertical:FontSize.scale(20),
                                paddingHorizontal:FontSize.scale(15)
                                }}>
                                    <Image source={item.img} 
                                    style={{width:FontSize.scale(140),
                                        height:FontSize.scale(120),
                                    }}/>
                                    <View style={{paddingHorizontal:FontSize.scale(12)}}>
                                        <Text>{'Sudan  Archives Flips the Script'}</Text>
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

