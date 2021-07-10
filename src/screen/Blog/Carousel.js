import React, { Component } from 'react'
import { Text, View ,Animated,StyleSheet,Dimensions,TouchableOpacity,Image} from 'react-native'
import FontSize from '../../config/FontSize';
import { colors } from '../../config/style';

const {width} = Dimensions.get('window');
const cardWidth = width / 1.2;
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
            outputRange: [0.8, 1, 0.7],
          });
        return(
            <TouchableOpacity
            // disabled={activeCardIndex != index}
            activeOpacity={1}
            // onPress={() => navigation.navigate('DetailsScreen', hotel)}
            >
            <Animated.View  style={{...style.card, transform: [{scale}]}}>
              <Animated.View style={{...style.cardOverLay, opacity}} />
              <Image source={item.img} style={style.cardImage} />
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
              paddingHorizontal:FontSize.scale(10)
              // paddingLeft: 20,
              // paddingRight: cardWidth / 2 - 40,
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
        borderRadius: 15,
        paddingHorizontal:FontSize.scale(10),
        backgroundColor:colors.white,
      },
      cardOverLay: {
        height: 280,
        backgroundColor:colors.white,
        position: 'absolute',
        zIndex: 1,
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