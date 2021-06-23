import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Utils from '../../app/Utilis';
import FontSize from '../../config/FontSize';
import { colors } from '../../config/style';
import Config from '../../navigation/Config';

export default class Messbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View  onTouchEnd={()=>{
        Utils.goBack(Config.login)
      }}  style={{flex:1,backgroundColor:colors.transparent,paddingTop:FontSize.Height(0),justifyContent:'center',alignItems:'center'}}>
            <View style={{backgroundColor:'white',width:FontSize.Width(70),height:FontSize.Height(30),justifyContent:'center',alignItems:'center',borderRadius:30}} >
                        <Text>{'Mess Box'}</Text>
                        <View style={{flexDirection:'row'}}>
                        <TouchableOpacity >
                            <Text>{'Ok'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text>{'Cancel'}</Text>
                        </TouchableOpacity>
                        </View>
                       
            </View>
      </View>
    );
  }
}
