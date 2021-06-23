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
                    fontSize:FontSize.reText(30),
                    fontWeight:'bold',
                    color:theme.colors.text}}>{TxtTitle}
                  </Text>
                  <View
                  style={{height:FontSize.scale(10)}}
                  />
                  <Text style={{color:theme.colors.text}}>{TxtSub}</Text>
                  <View
                  style={{height:FontSize.scale(35)}}
                  />
                  <Button2
                  title={TitleButton}
                  onPress={() =>{Utils.navigate(TxtSceen)}}
                  style={{backgroundColor:colors.white,width:FontSize.scale(170),height:FontSize.scale(40)}}
                  />
        </View>
          )}
      </Context.Consumer>
    );
  }
}



const styles = StyleSheet.create({
        


})
