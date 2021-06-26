import React, { Component } from 'react'
import { Text, View ,Animated,StyleSheet,Dimensions,TouchableOpacity,Image} from 'react-native'
import FontSize from '../../config/FontSize';
import { colors } from '../../config/style';

const {width} = Dimensions.get('window');
const cardWidth = width / 2;
const scrollX = new Animated.Value(0);
// scrollX=React.createRef();
export default class Carousel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeCardIndex:0
        }
    }
    _Card=({item,index}) =>{
        // const scrollX = React.useRef(new Animated.Value(0)).current;
        const inputRange = [
            (index - 1) * cardWidth,
            index * cardWidth,
            (index + 1) * cardWidth,
          ];
        //   console.log(inputRange)
          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.7, 0, 0.7],
          });
          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [0.8, 1, 0.8],
          });
        return(
            <TouchableOpacity
            // disabled={activeCardIndex != index}
            activeOpacity={1}
            // onPress={() => navigation.navigate('DetailsScreen', hotel)}
            >
            <Animated.View  style={{...style.card, transform: [{scale}]}}>
              <Animated.View style={{...style.cardOverLay, opacity}} />
              <View style={style.priceTag}>
                <Text
                  style={{color:colors.white, fontSize: 20, fontWeight: 'bold'}}>
                  {item.title}
                </Text>
              </View>
              <Image source={item.img} style={style.cardImage} />
              {/* <View style={style.cardDetails}>
                <View
                  style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <View>
                    <Text style={{fontWeight: 'bold', fontSize: 17}}>
                      {hotel.name}
                    </Text>
                    <Text style={{color: COLORS.grey, fontSize: 12}}>
                      {hotel.location}
                    </Text>
                  </View>
                  <Icon name="bookmark-border" size={26} color={COLORS.primary} />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 10,
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Icon name="star" size={15} color={COLORS.orange} />
                    <Icon name="star" size={15} color={COLORS.orange} />
                    <Icon name="star" size={15} color={COLORS.orange} />
                    <Icon name="star" size={15} color={COLORS.orange} />
                    <Icon name="star" size={15} color={COLORS.grey} />
                  </View>
                  <Text style={{fontSize: 10, color: COLORS.grey}}>365reviews</Text>
                </View>
              </View> */}
            </Animated.View>
          </TouchableOpacity>
        )
    }
    render() {
        const {data=[]}=this.props
        console.log(scrollX)
        return (
            <Animated.FlatList
            keyExtractor={(item,index) => index}
            onMomentumScrollEnd={(e) => {
                this.setState({activeCardIndex:Math.round(e.nativeEvent.contentOffset.x / cardWidth)})
            }}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: scrollX}}}],
              {useNativeDriver: true},
            )}
            horizontal
            data={data}
            contentContainerStyle={{
              paddingVertical: 30,
              paddingLeft: 20,
              paddingRight: cardWidth / 2 - 40,
            }}
            showsHorizontalScrollIndicator={false}
            renderItem={this._Card}
            snapToInterval={cardWidth}
          />
        )
    }
}


const style = StyleSheet.create({
    card: {
        height: 280,
        width: cardWidth,
        elevation: 15,
        marginRight: 20,
        borderRadius: 15,
        paddingHorizontal:FontSize.scale(10),
        backgroundColor:colors.white,
      },
      cardOverLay: {
        height: 280,
        backgroundColor:colors.white,
        position: 'absolute',
        zIndex: 100,
        width: cardWidth,
        borderRadius: 15,
      },
      cardImage: {
        height: 200,
        width: '100%',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
      },
})