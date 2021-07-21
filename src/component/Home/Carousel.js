import { load } from 'npm';
import React, { Component, createRef } from 'react'
import { Text, View ,FlatList,StyleSheet,Animated,Dimensions} from 'react-native'
import Utils from '../../app/Utilis';
import FontSize from '../../config/FontSize'
import { colors } from '../../config/style';
import CarsoulItem from './CarouselItem';


const { width, heigth } = Dimensions.get('window');
export default class Carousel extends Component {
    flatList = createRef();
    constructor(props) {
        super(props);
       this.state = {
        datalist:[]
        };
      }
    componentDidMount()
    {
        // this._inifiniteScroll();
        this.props.navigation.addListener('focus',() =>{
            this._inifiniteScroll();
        })
        this.props.navigation.addListener('blur', () => {
            this._stop();
        })
    }
    _stop=() =>
    {
        if(this.interval) 
        {
         clearInterval(this.interval);
         this.interval = null;
        }
    }
    _inifiniteScroll=()=>
    {
        let a=this.props.autotTime;
        Utils.nlog(this.props.autotTime)
                if(this.props.data && this.props.data.length>0 )
                {
                    Utils.nlog(this.props.enableAuto)
                    let scrollValue = 0, scrolled = 0
                    const numberofdata=this.props.data.length;
                    this.interval=setInterval(() =>{
                        scrolled++;
                        if(scrolled<numberofdata)
                        {
                            scrollValue=scrollValue+width;
                        }
                        else{
                            scrollValue=0,
                            scrolled=0;
                        }
                        if (this.flatList.current ) {
                            console.log('chay 1')
                            this.flatList.current.scrollToOffset({ animated: true, offset: scrollValue})
                        }
                    },a)
                }
    }
    render() {
        const scrollX = new Animated.Value(0)
        let position=Animated.divide(scrollX, width)
        const {data,autotTime=3000,renderitem={}}=this.props
        if( data && data.length)
        {
            return (
                <View>
                    <FlatList
                    ref = {this.flatList}
                    data={data}
                    renderItem={ ({item})=>{
                        return <CarsoulItem
                        item={item}
                        data={data}
                        />
                    }}
                    keyExtractor={(item,index) => index}
                    horizontal
                    pagingEnabled
                    scrollEnabled
                    snapToAlignment='center'
                    scrollEventThrottle={16}
                    decelerationRate={'fast'}
                    showsHorizontalScrollIndicator={false}
                    onScroll={
                        Animated.event(
                            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                            {useNativeDriver: false}
                        )}  
                    />
                    <View style={styles.dotView}>
                     {data.map((_,i) =>{
                                let opacity=position.interpolate(
                                    {
                                        inputRange:[i-1,i,i+1],
                                        outputRange:[0.3,1,0.3],
                                        extrapolate:'clamp',
                                    })  
                                    return(
                                        <Animated.View
                                            key={i}
                                            style={{
                                                opacity,
                                                height:FontSize.scale(7),
                                                width:FontSize.scale(7),
                                                borderRadius:FontSize.scale(7),
                                                backgroundColor:colors.grayLight,
                                                margin:FontSize.scale(6),
                                            }}
                                        />
                                    )
                        })}
                        </View>
                </View>
            )
        }
        else
        {
            return null
        }
        }
}

const styles = StyleSheet.create({
    dotView:{
        flexDirection:'row',
        paddingHorizontal:FontSize.scale(10),
    }
})

// import React, {Component, createRef} from 'react';
// import {
//   Text,
//   View,
//   ScrollView,
//   Image,
//   StyleSheet,
//   Dimensions,
//   FlatList,
// } from 'react-native';

// let CurrentSlide = 0;
// let IntervalTime = 3000;

// export default class Carousel extends Component {
//   flatList = createRef();

//   // TODO _goToNextPage()
//   _goToNextPage = () => {
//     if (CurrentSlide >= this.state.link.length-1) CurrentSlide = 0;

//     this.flatList.current.scrollToIndex({
//       index: ++CurrentSlide,
//       animated: true,
//     });
//   };

//   _startAutoPlay = () => {
//     this._timerId = setInterval(this._goToNextPage, IntervalTime);
//   };

//   _stopAutoPlay = () => {
//     if (this._timerId) {
//       clearInterval(this._timerId);
//       this._timerId = null;
//     }
//   };


//   componentDidMount() {
//     this._stopAutoPlay();
//     this._startAutoPlay();
//   }

//   componentWillUnmount() {
//     this._stopAutoPlay();
//   }

//   // TODO _renderItem()
//   _renderItem({item, index}) {
//     return <Image source={{uri: item}} style={styles.sliderItems} />;
//   }

//   // TODO _keyExtractor()
//   _keyExtractor(item, index) {
//     // console.log(item);
//     return index.toString();
//   }
//   state = {
//     link: [
//       'https://image.shutterstock.com/image-vector/online-exam-computer-web-app-260nw-1105800884.jpg',
//       'https://image.shutterstock.com/image-vector/online-exam-computer-web-app-260nw-1105800884.jpg',
//     //   'https://picsum.photos/200/300',
//       'https://image.shutterstock.com/image-vector/online-exam-computer-web-app-260nw-1105800884.jpg',
//       'https://image.shutterstock.com/image-vector/online-exam-computer-web-app-260nw-1105800884.jpg',
//     ],
//   };

//   render() {
//     return (
//       <View style={{marginTop: 10, marginBottom: 10}}>
         
//         <FlatList
//           style={{
//             width:400,
//             height:500,
//             backgroundColor:'red'
//             // TODO Remove extera global padding
//             // marginLeft: -size.padding,
//             // marginRight: -size.padding,
//           }}
//           data={this.state.link}
//           keyExtractor={this._keyExtractor.bind(this)}
//           renderItem={this._renderItem.bind(this)}
//           horizontal={true}
//           flatListRef={React.createRef()}
//           ref={this.flatList}
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   sliderItems: {
//     marginLeft: 5,
//     marginRight: 5,
//     height: 200,
//     width: Dimensions.get('window').width,
//   },
// });