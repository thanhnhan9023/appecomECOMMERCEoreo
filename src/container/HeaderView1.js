import React, { Component } from 'react';
import { View, Text, TouchableOpacity ,Image} from 'react-native';
import {IMAGES} from '../../assets/images/IndexImg';
import FontSize from '../config/FontSize';

 class HeaderView1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  _ViewLeft=() =>  
  {
      const {txtLeft=null,styleViewLeft={},styleTxtLeft={},onPressClear=()=>{}}=this.props
      return(
        
          <TouchableOpacity onPress={() =>onPressClear()} style={{...styleViewLeft}}>
              <Text style={{...styleTxtLeft}}>{txtLeft}</Text>
          </TouchableOpacity>
      )
  }
  _ViewCenter =() =>{
    const {txtCenter=null,styleViewCenter={},styleTxtCenter={}}=this.props
      return(
          
        <View style={{...styleViewCenter}}>
                    <Image style={{width:FontSize.scale(30),height:FontSize.scale(30)}} source={IMAGES.imgLogo} resizeMode={'contain'}></Image>
                    {/* <Text style={{...styleTxtCenter}}>{txtCenter? txtCenter:null}</Text> */}
        </View>
      )
  }
  _ViewRight =() =>{
    const {txtRight=null,styleViewRight={},styleTxtRight={}}=this.props
      return(
          
        <View style={{...styleViewRight}}>
                    <Text style={{...styleTxtRight}}>{txtRight}</Text>
        </View>
      )
  }
  
  render() {
    const {styleViewMain={}}=this.props
    return (
      <View style={{flexDirection:'row',justifyContent:'space-between',paddingVertical:FontSize.scale(9),paddingHorizontal:FontSize.scale(22),...styleViewMain,}}>
            {this._ViewLeft()? this._ViewLeft():null }
            {this._ViewCenter() ? this._ViewCenter():null }
            {this._ViewRight() ? this._ViewRight():null }

      </View>
    );
  }
}
export default HeaderView1