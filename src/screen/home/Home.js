import React, { Component } from 'react'
import { Text, 
    View, 
    StyleSheet, 
    ImageBackground, 
    TouchableOpacity, 
    ScrollView,
    FlatList, 
    Image, 
    ActivityIndicator,
    Dimensions,
}
     from 'react-native'
import Icon, { TypeIcon } from '../../config/Icon'
import HeaderView from '../../container/HeaderView'
import {IMAGES} from '../../../assets/images/IndexImg';
import FontSize from '../../config/FontSize';
import { colors } from '../../config/style';
import ProductHorizontal from '../../component/Home/ProductHorizontal';
import { Context } from '../../config/ThemeProvider2';
import Carousel from '../../component/Home/Carousel';
import Utils from '../../app/Utilis';
import Config from '../../navigation/Config';
import Button2 from '../../component/Button2';
import { connect } from 'react-redux'
import CartAction from '../../Redux/ActionsCart/CartAction'
import CarsoulItem from '../../component/Home/CarouselItem';

const {width,height}=Dimensions.get('window')

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

const databrand = [{
        name: 'zara',
        img: IMAGES.imgZara,
        rate: 5.0,
    },
    {
        name: 'pullandbear',
        rate: 5.0,
        img: IMAGES.imgPb,
    },
    {
        name: 'pullandbear',
        rate: 5.0,
        img: IMAGES.imgZara,
    },
]
const dataProduct = [{
        id: 1,
        name: 'colorful chino',
        price: '$30.00',
        img: IMAGES.imgQuanao1,
    },
    {
        id: 2,
        name: 'colorful chino',
        price: '$30.00',
        img: IMAGES.imgQuanao1,
    },
    {
        id: 3,
        name: 'colorful chino',
        price: '$30.00',
        img: IMAGES.imgQuanao1,
    },
    {
        id: 4,
        name: 'colorful chino',
        price: '$30.00',
        img: IMAGES.imgQuanao1,
    },
]
const datablog=[
    {
       id:1,
       Titele:'Vogue Utimate Fall Boot Guide I Here a',
       time:'2 year ago',
       img:IMAGES.imgBlog1,
    },
    {
        id:2,
        Titele:'Virgil Abloh Latest Off-White',
        time:'2 year ago',
        img:IMAGES.imgBlog2,
    },
    {
        id:3,
        Titele:'20 Reasons to Reconsider the Ballet Flat',
        time:'2 year ago',
        img:IMAGES.imgBlog3,
    }
]

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoadingCategory:true,
        };
      }
      componentDidMount= async() =>{
        const {isLoadingCategory}=this.state
        try 
        {
           const post= await this.props.FetchLoaiSp();
           if(post)
           {
                this.setState({isLoadingCategory:!isLoadingCategory});
           }
        } catch (error) {
            Utils.nlog(error);
        }
      }
      _rendeitemCategory=({item,index}) =>{
          const {dataCategory}=this.props
            return(
                <TouchableOpacity onPress={() =>{Utils.navigate(Config.ProductScreen,{maloai:item._id})}}  style={{flexDirection:'row'}}>
                    <View>
                        <Image style={styles.imageCategories}
                        source={ {uri:item.imgproduct}}
                        >
                        </Image>
                        <Text style={{marginTop:FontSize.scale(10),textAlign:'center',fontSize:FontSize.reText(20)}}>{item.nameproduct}</Text>
                    </View>
                        { index!=dataCategory.length-1 ?(<View style={{width:FontSize.scale(15),height:'100%'}}></View>):null }
            </TouchableOpacity>
            )
      }
      _rendeitemblog=(item,index) =>{
        return(
          <TouchableOpacity key={index} 
          style={{flexDirection:'row',
          paddingHorizontal:FontSize.scale(15),
          paddingVertical:FontSize.scale(20),
          borderBottomWidth:0.8,
          borderBottomColor:colors.colorGrayBgr
          }}
          onPress={() => Utils.navigate(Config.DetalisBlog,{item:item})}
          >
              <Image source={item.img} 
              style={{width:FontSize.scale(140),height:FontSize.scale(120)}}  
              /> 
              <View  style={{flex:1,paddingHorizontal:FontSize.scale(10),
              }}>
                  <Text  
                  style={{fontSize:FontSize.reText(20),
                  }}>{item.Titele}
                  </Text>
                  <View style={{height:FontSize.scale(10)}}></View>
                  <Text style={{color:colors.colorGrayLight }}>{item.time}</Text>
              </View>
              
          </TouchableOpacity>
        )
    }
    render() {
        const {dataCategory}=this.props
        const {isLoadingCategory}=this.state
        return ( 
             <Context.Consumer>
             {({ theme, updateTheme }) => (
                <ScrollView showsVerticalScrollIndicator={false} style={{flex:1,backgroundColor:colors.white}}>
                    <HeaderView
                    {...this.props}
                    IconLeftShow={true}
                    IconLefType={TypeIcon.Entypo}
                    IconNameLeft={'menu'}
                    iconright={true}
                    typeicon={TypeIcon.AntDesign}
                    iconname={'shoppingcart'}
                    righticonone={true}
                    onPressLeft={this.props.navigation.openDrawer}
                    />
                    <Carousel 
                        {...this.props}
                        data={datacolors}
                        renderitem={
                            <CarsoulItem  />}
                        autotTime={3000}
                    />
                    <View style={{height:FontSize.scale(12)}}/>
                    <View>
                            <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:FontSize.scale(10)}}>
                                    <Text style={styles.textMeidum}>{'Categories'}</Text>
                                    <Text style={styles.txtSmall}>{'Show all'}</Text>
                            </View>
                            <View style={{height:FontSize.scale(30)}}/>
                            {!isLoadingCategory ? 
                                    <FlatList
                                    style={{marginHorizontal:15}}
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                    data={dataCategory}
                                    renderItem={this._rendeitemCategory}
                                    keyExtractor={(item,index) => index}
                              />:
                              (
                                  <ActivityIndicator size={'large'}  color={colors.grayLight}/>
                              )
                              }
                    </View>
                    <View style={{height:FontSize.scale(20),borderBottomWidth:0.8,borderBottomColor:colors.grayLight}}/>
                    <View style={{paddingVertical:FontSize.scale(30)}}>
                        <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:FontSize.scale(10)}}>
                                        <Text style={styles.textMeidum}>{'Vendors'}</Text>
                                        <Text style={styles.txtSmall}>{'Show all'}</Text>
                        </View>
                        <View style={{height:FontSize.scale(30)}}></View>
                        <FlatList
                                    style={{marginHorizontal:FontSize.scale(15)}}
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                    data={databrand}
                                    renderItem={({item,index}) =>
                                    {
                                        return(
                                            <View  
                                            style={{
                                           ...styles.viewVendors,
                                            marginRight:index==databrand.length-1 ? 0:FontSize.scale(15)
                                            }}>
                                                <View style={{paddingHorizontal:FontSize.scale(2)}}>
                                                    <Image style={styles.imageVendors}
                                                    source={item.img}
                                                    >
                                                    </Image>
                                                    <Text style={{marginBottom:FontSize.scale(20),textAlign:'center',fontSize:FontSize.reText(20)}}>{item.name}</Text>
                                                </View>
                                            </View>
                                                )
                                    }
                                    }
                                    keyExtractor={(item,index) => index}
                                    />
                    </View>
                    <View style={{height:FontSize.scale(20),borderBottomWidth:0.8,borderBottomColor:colors.grayLight}}/>
                    <ProductHorizontal
                    txtLeft={'Best seller'}
                    txtRight={'Show all'}
                    datanew={dataProduct}
                    />
                    <ImageBackground source={IMAGES.imgBackGroud} style={{height:FontSize.scale(170)}}/>   
                    <View style={{height:FontSize.scale(40)}}/>
                    <ProductHorizontal
                    txtLeft={'New Arrivals'}
                    txtRight={'Show all'}
                    datanew={dataProduct}
                    />
                        <ImageBackground source={IMAGES.imgBackGroudShop} 
                        style=
                        {{
                            marginHorizontal:FontSize.scale(15),
                            height:FontSize.scale(190),
                            alignItems:'center',
                            justifyContent:'center',
                        }}
                        resizeMode={'cover'}
                        borderRadius={12}
                            >
                                <View style={{
                                    borderRadius:FontSize.scale(5),
                                    backgroundColor:colors.white,
                                    width:FontSize.scale(150),
                                    height:FontSize.scale(40),
                                    justifyContent:'center',
                                }}>
                                    <Text   style={{textAlign:'center',fontSize:FontSize.reText(22)}} >{'Shop Sale'}</Text>
                                </View>
                            </ImageBackground>
                     <View style={{height:FontSize.scale(30)}}/>
                      <Button2
                         title={'Free Shipping && Free Return'}
                         style=
                         {{
                         backgroundColor:colors.colorGrayBgr,
                         height:FontSize.scale(40)
                         }}
                        />
                     <View style={{height:FontSize.scale(30)}}/>
                     <View>
                     <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:FontSize.scale(10)}}>
                                        <Text style={styles.textMeidum}>{'Blogs'}</Text>
                                        <TouchableOpacity onPress={() => Utils.navigate(Config.DetalisBlogAll,{data:datablog})}> 
                                        <Text style={styles.txtSmall} >{'Show all'}</Text>
                                        </TouchableOpacity>
                        </View>
                         {datablog.map(this._rendeitemblog)}
                     </View>

                </ScrollView>
                )}
               </Context.Consumer>
        )
        }
    }
    
const mapStateToProps =(state) =>{
        return{
          dataCategory:state.CartReducer.ListLoaisp
        }
      }
const mapDispatchToProps =(dispatch) =>{
        return {
          FetchLoaiSp:() => dispatch(CartAction.ActionFetchLoaiSpRequest()),
        }
      }
export default connect(mapStateToProps,mapDispatchToProps)(Home)

const styles = StyleSheet.create({
    textMeidum:{
        fontWeight:'bold',
        fontSize:FontSize.reText(27),
    },
    txtSmall:{
        fontSize:FontSize.reText(16),
        color:colors.grayLight,
    },
    imageCategories:
    {
        width:width/3-FontSize.scale(15),
        height:FontSize.scale(120),
        borderRadius:FontSize.scale(4)
    },
    viewVendors:{
            backgroundColor:colors.colorGrayBgr,
            borderRadius:FontSize.scale(12),
            flexDirection:'row',
    },
    imageVendors:
    {
        width:FontSize.scale(110),
        height:FontSize.scale(100),
        resizeMode:'center',
        borderRadius:FontSize.scale(120),
    },
})
    