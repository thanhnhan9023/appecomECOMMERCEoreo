import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Carousel from 'react-native-snap-carousel';

export default class DetalisBlog extends Component {
    _renderItem = ({item, index}) => {
        return (
            <View style={styles.slide}>
                <Text style={styles.title}>{ item.title }</Text>
            </View>
        );
    }
    render() {
        return (
            <View>
                  <Carousel
              ref={(c) => { this._carousel = c; }}
           
              renderItem={this._renderItem}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
            />
            </View>
        )
    }
}
