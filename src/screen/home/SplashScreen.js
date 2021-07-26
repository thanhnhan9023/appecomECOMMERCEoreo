import { config } from 'npm';
import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { IMAGES } from '../../../assets/images/IndexImg';
import Utils from '../../app/Utilis';
import FontSize from '../../config/FontSize';
import { colors } from '../../config/style';
import Config from '../../navigation/Config';

 class SplashScreen extends Component {
  render() {
    return (
        <ImageBackground style={{width:FontSize.Width(100),height:FontSize.Height(100)}} resizeMode={'stretch'} source={IMAGES.imgSplasScreen}></ImageBackground>
    );
  }
}
export default SplashScreen