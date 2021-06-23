
import React, { Component } from 'react';
import { View, Text,Image } from 'react-native';
import Utils from '../../app/Utilis';
import FontSize from '../../config/FontSize';
import { colors } from '../../config/style';

class ImageSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
   };
  }

  render() {
    const {item} = this.props.route.params;
    Utils.nlog(item)
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:colors.black}}>
          <Image source={{uri:item.uri}} style={{width:FontSize.Width(90),height:FontSize.Height(90),resizeMode:'cover'}}></Image>
      </View>
    );
  }
}

export default ImageSelect;
 

