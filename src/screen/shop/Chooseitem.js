import React, { Component } from 'react';
import { View, Text,Image } from 'react-native';
import {IMAGES} from '../../../assets/images/IndexImg';
import { TypeIcon } from '../../config/Icon';
import { colors } from '../../config/style';
import HeaderView from '../../container/HeaderView';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import FontSize from '../../config/FontSize';


const datacolors = [{
    name: 'New Sweater',
    saleoff: '50% OFF',
    img: IMAGES.imgWomen,

},
{
    name: 'New Sweater',
    saleoff: '50% OFF',
    img: IMAGES.imgDecor,

},
{
    name: 'New Sweater',
    saleoff: '50% OFF',
    img: IMAGES.imgKids

},
]

_RenderItem=({item}) =>{
return(
    <View style={{flex:1,height:FontSize.Height(50)}}> 
                <View>
                            <Image source={item.im} ></Image>
                </View>
    </View>
)
}
export default class Chooseitem extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1,backgroundColor:colors.white}}>
          <HeaderView
          IconLeftShow={true}
          IconLefType={TypeIcon.AntDesign}
          IconNameLeft={'left'}
          iconright={true}
          righticonone={true}
          
          
          />
            <SwiperFlatList 
                autoplay
                autoplayDelay={4}
                autoplayLoop
                data={datacolors} 
             

            >


            </SwiperFlatList>
      </View>
    );
  }
}
