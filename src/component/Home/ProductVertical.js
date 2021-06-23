
import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native';
import { View, Text ,StyleSheet,FlatList,Image} from 'react-native';
import {IMAGES} from '../../../assets/images/IndexImg';
import Utils from '../../app/Utilis';
import FontSize from '../../config/FontSize';
import { colors } from '../../config/style';
import Config from '../../navigation/Config';



export default class ProductVertical extends Component {
  
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //   };
  // }
  _renderItem({item}){
    return(
      <TouchableOpacity 
      
      onPress={
    () =>{
      Utils.navigate(Config.DetalisBlog,{id:1})
    
    }
    }
      style={{width:FontSize.Width(120),height:FontSize.scale(150),
        borderBottomWidth:0.7}}>
          <View style={{flex:1,flexDirection:'row',paddingVertical:FontSize.scale(20)}}>
            <View style={{flex:4}}>
              
                  <Image source={IMAGES.imgKids} style={{width:'100%',height:'100%',resizeMode:'cover'}}  ></Image>
            </View>
            <View style={{width:FontSize.scale(10)}}></View>
            <View style={{flex:7}}>

              <Text style={{fontSize:FontSize.reText(21),fontWeight:'bold'}} >{'Vogue`s Ultimate Fall Boot Guide Is Here a '}</Text>
              <View style={{height:FontSize.scale(10)}}></View>
              <Text style={{color:colors.grayLight}}>{'2 years ago'}</Text>
              <View style={{height:FontSize.scale(20)}}></View>
              <View style={{flexDirection:'row'}}>

              <Text style={{color:colors.grayLight}}>{'Fashion by '}</Text>
              <Text >{'admin'}</Text>
              </View>
              
            </View>
            </View>
           
      </TouchableOpacity>
    )
  }

  render() {
    const {txtLeft=null,txtRight=null,styleTextLeft={},datanew=[]}=this.props
    return (
      <SafeAreaView style={{flex:1}} >
          <View style={{flexDirection:'row',paddingHorizontal:FontSize.scale(12),justifyContent:'space-between'}}>
                <Text style={{...styles.StyleTextLeftBasic,...styleTextLeft}} >{txtLeft}</Text>
                <Text>{txtRight}</Text>
                </View>
                <View
                style={{height:FontSize.scale(20)}}
                />
              
                      <FlatList
                        style={{height:FontSize.scale(500),backgroundColor:'white',paddingHorizontal:FontSize.scale(10)}}
                        renderItem={this._renderItem}
                        data={datanew}
                        onPress={{}}
                        keyExtractor={item => item.id}
                      >

                      </FlatList>
                                    
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
    StyleTextLeftBasic : {
        fontSize:FontSize.reText(28)

   },

});