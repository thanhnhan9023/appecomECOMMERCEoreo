import React, { Component } from 'react'
import { Dimensions,TouchableOpacity } from 'react-native';
import { ImageBackground } from 'react-native';
import { Text, View } from 'react-native'
import { scale, verticalScale } from 'react-native-size-matters';
import { FlatGrid } from 'react-native-super-grid';
import Icon, { TypeIcon } from '../../config/Icon'
import { connect } from 'react-redux';
import FontSize from '../../config/FontSize';
import HeadViewCustom from '../../container/HeadViewCustom';
import ProductACtion from '../../Redux/Actions/ActionProduct/ProductAction'
import HeaderImageScrollView, { ImageHeaderScrollView, TriggeringView } from 'react-native-image-header-scroll-view';
import { ScrollView } from 'react-native-gesture-handler';
import SwiperFlatList from 'react-native-swiper-flatlist';
import { IMAGES } from '../../../assets/images/IndexImg';
import { colors } from '../../config/style';


const datacolors = [{
  id:'1',
  name: 'New Sweater',
  saleoff: '50% OFF',
  img: IMAGES.imgWomen,
},
{
  id:'2',
  name: 'New Sweater',
  saleoff: '50% OFF',
  img: IMAGES.imgDecor,
},
{
  id:'3',
  name: 'New Sweater',
  saleoff: '50% OFF',
  img: IMAGES.imgKids
},
]

const {width,height}=Dimensions.get('window')
 class ProductTest extends Component {
     componentDidMount=() =>{
         this.props.FetchProduct();
     }
    render() {
        console.log(this.props)
        console.log(this.props.dataProduct)
        return (
            <View style={{flex:1,backgroundColor:colors.white}}>
                    <ImageHeaderScrollView
                    showsVerticalScrollIndicator={true}
                      // minOverlayOpacity={0.6}
                      // maxOverlayOpacity={0.6}
                      // fixedForegroundContainerStyles={{backgroundColor:colors.white}}
                      foregroundExtrapolate={'clamp'}
                    maxHeight={FontSize.Height(50)}
                    bounces={false}
                    renderHeader={() =>{
                        return(
                        <HeadViewCustom
                        ContainerStyle={{paddingHorizontal:scale(10)}}
                        ViewLeft={
                            <Icon name='left' type={TypeIcon.AntDesign} size={scale(20)}/>
                        }
                        />
                        )
                     }}
                    renderForeground={() => {
                        return(
                          <View>

                    <SwiperFlatList
                    // index={index}
                    showPagination
                    data={datacolors}
                    renderItem={({ item }) => (
                        <View style={{  width:FontSize.Width(100),height:FontSize.Height(50)}}>
                              <ImageBackground style={{width:FontSize.Width(100),height:'100%'}} resizeMode={'stretch'} source={item.img}  >
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
                                    {/* <TouchableOpacity onPress={() => this.props.LikeProduct(data)}>
                                      {this._checkWhishlist(data._id) ==true ? 
                                          <Icon type={TypeIcon.AntDesign} name={'hearto'} size={22} color={colors.colorRed} />
                                        :<Icon type={TypeIcon.AntDesign} name={'hearto'} size={22} color={colors.black} />
                                      }
                                    </TouchableOpacity> */}
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



                                 </View>
                            
                        )
                    }}
                        
                    
                    >
                        <TriggeringView>
                              <View style={{height:verticalScale(600)}}>
                             <Text >Overview</Text>
                             </View>
                         </TriggeringView>
                    </ImageHeaderScrollView>
              
                {/* <FlatGrid
                itemDimension={width/3}
                style={{  marginTop: 10,
                    flex: 1,}}
                data={this.props.dataProduct.Listsp}
                spacing={10}
                renderItem={({ item }) => (
                    <View style={{ 
                    borderRadius: 5,
                    }}>
                        <ImageBackground
                        style={{  justifyContent: 'flex-end',
                        borderRadius: 5,
                        height: 150,}}
                        source={{uri:item.imgproduct[0].img}}   
                        />
                    </View>
                )}
                /> */}
            </View>
        )
    }
}
const mapStateToProps =(state) =>{
    return{
      dataProduct:state.ProductReducer,
    }
  }
const mapDispatchToProps =(dispatch) =>{
    return {
      FetchProduct:() =>dispatch(ProductACtion.FecthProduct()),
    }
  }
export default  connect(mapStateToProps,mapDispatchToProps)(ProductTest)

