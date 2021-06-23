import React, { Component } from 'react';
import { View, Text } from 'react-native';
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
    };
  }

  _GoBack(){
    Utils.goBack();
  }
  render() {
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
            <ScrollView>
            <SwiperFlatList
                    index={0}
                    showPagination

                    data={colors1}
                    renderItem={({ item }) => (
                        <View style={{  width:FontSize.Width(100),height:FontSize.Height(45),justifyContent:'center',backgroundColor:colors.colorGrayBgr}}>
                              <Image source={IMAGES.imgBackGroud} style={{resizeMode:'cover'}} ></Image>
                             
                        </View>
                        
                    )}
                    paginationStyleItem={ // custom dot
                        {
                            width:7,
                            height:7, 
                        }
                    }          
                    paginationStyle={
                        {
                         
                           
                            position:'absolute',
                            left:0,
                            top:FontSize.Height(48),
                            bottom:FontSize.scale(10),           
                        }
                    }
                    />
                     <View style={{position:'absolute',top:FontSize.Height(47),paddingHorizontal:FontSize.scale(10),right:0,flexDirection:'row'}}>
                        <TouchableOpacity>
                            <Icon type={TypeIcon.AntDesign} name={'upload'} size={22}></Icon>
                        </TouchableOpacity>
                        <View
                        style={{width:FontSize.scale(15)}}
                        />
                        <Icon type={TypeIcon.AntDesign} name={'heart'} size={22}></Icon>

                        </View>
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
                      <Text style={{fontWeight:'bold',fontSize:FontSize.reText(30)}}>{'Cropped Pocket Tee'}</Text>
                      <View style={{height:FontSize.scale(10)}}/>
                      
                      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                      <Text style={{fontWeight:'bold',fontSize:FontSize.reText(22)}}>{'$20'+'.00'}</Text>
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
                      <View style={{flex:1,justifyContent:'flex-start',alignItems:'center'}}>
                        <TouchableOpacity>

                        </TouchableOpacity>

                      <Button2
                          styleTxt={{color:colors.white}}
                          style={{backgroundColor:colors.black,with:FontSize.Width(100)}}
                          title={'Add to Cart'}
                          />
                      </View>
                          
                    </View>
                    </ScrollView>
              

      </View>
    );
  }
}



export default DetalisProduct