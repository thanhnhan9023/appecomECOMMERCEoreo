import React, { Component } from 'react';
import { View, Text ,ImageBackground} from 'react-native';
import FontSize from '../../config/FontSize';
import { colors } from '../../config/style';
import HeaderView from '../../container/HeaderView';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import Icon, { TypeIcon } from '../../config/Icon';
import { TouchableOpacity,Image } from 'react-native';
import {IMAGES} from '../../../assets/images/IndexImg';
import { Button } from 'react-native';
import Button2 from '../../component/Button2';
import { ScrollView } from 'react-native';
import Utils from '../../app/Utilis';

const colors1 = ['tomato', 'thistle', 'skyblue'];

 class DetalisProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index:0,
    };
  }

  _GoBack(){
    Utils.goBack();
  }
  render() {
    const {index}=this.state
    const {listimg,data}=this.props.route.params;
    Utils.nlog(index)
    return (
      <View style={{flex:1,backgroundColor:colors.white}}>
           <HeaderView
            iconright={true}
            IconLeftShow={true}
            IconLefType={TypeIcon.AntDesign}
            IconNameLeft={'left'}
            StyleTxtCenter={{fontSize:FontSize.reText(22)}}
            onPressLeft={this._GoBack}
            />
            <ScrollView
            showsVerticalScrollIndicator={false}
            >
            <SwiperFlatList
                    key={index}
                    index={index}
                    showPagination
                    data={listimg}
                    renderItem={({ item }) => (
                        <View style={{  width:FontSize.Width(100),height:FontSize.Height(45)}}>
                              <ImageBackground style={{width:'100%',height:'100%'}} resizeMode={'stretch'} source={{uri:item.img}}  >
                              <View style={{
                                flexDirection:'row',
                                flex:1,
                                alignItems:'flex-end',
                                justifyContent:'flex-end',
                                paddingVertical:FontSize.scale(10),
                                paddingHorizontal:FontSize.scale(10)
                              }}>
                                    <TouchableOpacity>
                                      <Icon type={TypeIcon.AntDesign} name={'upload'} size={22}></Icon>
                                    </TouchableOpacity>
                                    <View
                                    style={{width:FontSize.scale(15)}}
                                    />
                                    <Icon type={TypeIcon.AntDesign} name={'heart'} size={22}></Icon>
                              
                              </View>
                              </ImageBackground>
                        </View>
                    )}
                    paginationStyleItem={ // custom dot
                        {
                            width:7,
                            height:7, 
                        }
                    }
                    paginationDefaultColor={colors.whiteTwo}
                    paginationActiveColor={colors.grayLight}
                    paginationStyle={
                        {
                            position:'absolute',
                            left:0,
                            top:FontSize.Height(40),
                                    
                        }
                    }
                    />
                    <View style={{height:FontSize.Height(45),paddingVertical:FontSize.scale(10),paddingHorizontal:FontSize.scale(10)}}>
                      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                      <Text>{'Women'}</Text>
                      <View style={{flexDirection:'row'}}>
                      <Icon type={TypeIcon.Entypo} name={'star'} color={colors.colorStarYellow} size={22}></Icon>
                      <Icon type={TypeIcon.Entypo} name={'star'} color={colors.colorStarYellow} size={22}></Icon>
                      <Icon type={TypeIcon.Entypo} name={'star'} color={colors.colorStarYellow} size={22}></Icon>
                      <Icon type={TypeIcon.Entypo} name={'star'} color={colors.colorStarYellow} size={22}></Icon>
                      </View>
                   
                      </View>
                      <View style={{height:FontSize.scale(10)}}/>
                      <Text style={{fontWeight:'bold',fontSize:FontSize.reText(30)}}>{data.nameproduct}</Text>
                      <View style={{height:FontSize.scale(10)}}/>
                      
                      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                      <Text style={{fontWeight:'bold',fontSize:FontSize.reText(22)}}>{'$'+data.price+'.00'}</Text>
                      <View style={{flexDirection:'row'}}>
                        <Icon type={TypeIcon.Ionicons} name={'md-chevron-down-outline'} color={colors.green} size={30}></Icon>
                        <Text  style={{fontSize:FontSize.reText(22),color:colors.green}}>{'In-stock'}</Text>
                        </View>
                    
                      </View>
                      <View style={{height:FontSize.scale(10)}}/>
                        <Text>{'sku:]]]]'}</Text>  
                        <Text style={{color:colors.grayLight}}>{'.Returns accepted within 90 days of placing order. Full policy here.Duties & taxers are non-refundable'}</Text>
                        <View style={{height:FontSize.scale(10)}}/>
                        <Text style={{color:colors.grayLight}}>{'.Returns accepted within 90 days of placing order. Full policy here.Duties & taxers are non-refundable'}</Text>
                       
                       <View style={{flexDirection:'row',paddingVertical:FontSize.scale(10)}}> 
                              {data.color.map((item,index) =>{
                            return( 
                              <TouchableOpacity key={index} 
                              onPress={() =>{this.setState({index:index+1})}}
                              style={{
                                height:FontSize.scale(30),
                                width:FontSize.scale(30),
                                backgroundColor:item.color,
                                borderRadius:FontSize.scale(30),
                                marginRight:FontSize.scale(10)
                              }}>
                              </TouchableOpacity>
                            )
                          })}
                          </View>

                    </View>
                   
                    </ScrollView>
                    <Button2
                    title={'Add to Cart'}
                    style={{
                      backgroundColor:colors.black,
                      height:FontSize.scale(50),
                      marginHorizontal:FontSize.scale(10),
                      borderRadius:FontSize.scale(3)
                    }}
                    styleTxt={{
                      color:colors.white,
                      fontSize:FontSize.reText(18)
                    }}
                    />
                    <View style={{height:FontSize.scale(20),}}>

                    </View>
              

      </View>
    );
  }
}



export default DetalisProduct