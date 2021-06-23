import React, { Component } from 'react';
import { View, Text,TouchableOpacity} from 'react-native';

export default class Ablum extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <TouchableOpacity onPress={() => this._selectImage(item),alert('chon imgae')}>
               
        <Image key={index} style={{
        width:200,height:200,
        marginRight:10,
        marginBottom:10}} source={{uri:item.node.image.uri}}>
        </Image>
       
    </TouchableOpacity>
    );
  }
}
