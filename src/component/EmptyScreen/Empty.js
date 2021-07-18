import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import Utils from '../../app/Utilis';
import FontSize from '../../config/FontSize';
import Icon, { TypeIcon } from '../../config/Icon';
import { colors } from '../../config/style';
import Button2 from '../Button2';
import { TextColor, themes } from '../../config/ThemeProvider';
import { Context } from '../../config/ThemeProvider2';

export default class Empty extends Component {
  render() {
      const {CenterComponent,TxtTitle='',TxtSub='',TitleButton='',TxtSceen}=this.props;
    return (
      <Context.Consumer>
          {({ theme, updateTheme }) => (
        <View style={{justifyContent:'center',alignItems:'center'}}> 
                  <View style={{width:FontSize.scale(80),
                      height:FontSize.scale(80),
                      borderRadius:FontSize.scale(80),
                      backgroundColor:colors.colorGrayBgr,
                      justifyContent:'center',
                      alignItems:'center',
                      }}>
                          {CenterComponent}
                  </View>
                  <View
                  style={{height:FontSize.scale(20)}}
                  />
                  <Text 
                    style={{
                    ...FontSize.TextStyles.semiBold,
                    fontSize:FontSize.sizes.sText26,
                    color:theme.colors.text}}>{TxtTitle}
                  </Text>
                  <View
                  style={{height:FontSize.scale(10)}}
                  />
                  <Text style={{...FontSize.TextStyles.roboto,fontSize:FontSize.sizes.sText16,color:theme.colors.text}}>{TxtSub}</Text>
                  <View
                  style={{height:FontSize.scale(35)}}
                  />
                  <Button2
                  title={TitleButton}
                  onPress={() =>{Utils.navigate(TxtSceen)}}
                  styleTxt={{
                      ...FontSize.TextStyles.semiBold,
                      fontSize:FontSize.sizes.sText17
                  }}
                  style={{
                    backgroundColor:colors.white,
                    width:FontSize.scale(170),
                    height:FontSize.scale(40),
                    borderWidth:0.8
                  }}
                  />
        </View>
          )}
      </Context.Consumer>
    );
  }
}



const styles = StyleSheet.create({
        


})
