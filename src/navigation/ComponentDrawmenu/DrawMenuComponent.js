import React, { Component } from 'react';
import { View, Text, TouchableOpacity ,StyleSheet} from 'react-native';
import Icon, { TypeIcon } from '../../config/Icon';
import FontSize from '../../config/FontSize';
import { colors } from '../../config/style';
import Config from '../Config';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { RFValue } from 'react-native-responsive-fontsize';

 class DrawMenuComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isshowmenu:false,
    };
  }
  componentDidMount()
  {
  }
  _navigation=(txtsrceen) =>{
    this.props.navigation.navigate(txtsrceen)
  }
  render() {
    const {data=null,SizeIcon=22,NameIcon='plus',typeIcon=TypeIcon.Feather,txtScreen=Config.Categories}=this.props
    const {isshowmenu}=this.state
    return (
       
      <View style={{paddingHorizontal:scale(10),paddingVertical:verticalScale(15)}}>
            <Text
            style={styles.TxtTitle}
            >{'Categories'}</Text>
            <View
            style={{height:verticalScale(20)}}
            />
        {data.map((item,index) =>{
                    if(item.IsShowIcon ==true)
                    {
                        return(
                          <View key={index}>
                            <View key={index} style={{flexDirection:'row',justifyContent:'space-between',borderBottomWidth:0.6,borderBottomColor:colors.grayLight}}
                            >
                                  <TouchableOpacity>
                                      <Text style={{fontSize:RFValue(20,FontSize.Height(100))}} >{item.Name}</Text>
                                  </TouchableOpacity>
                                  <TouchableOpacity>
                                        <Icon type={typeIcon} name={NameIcon}  size={SizeIcon}></Icon>
                                  </TouchableOpacity>
                            </View>
                            <View style={{height:FontSize.scale(10)}}></View>
                              {isshowmenu ? <View>
                              </View>:null}
                            </View>
                            )
                    }
                else 
                    {
                        return(
                            <View key={index}>
                                <View
                                style={{flexDirection:'row',justifyContent:'space-between',borderBottomWidth:0.6,borderBottomColor:colors.grayLight}
                              }>
                            <Text
                            style={{fontSize:RFValue(30,FontSize.Height(100))}}
                            >{item.Name}</Text>
                                </View>
                                <View style={{height:FontSize.scale(10)}}></View>
                            </View>
                            )
                    }
        })}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  TxtTitle:
  {
    fontSize:RFValue(30,FontSize.Height(100)),fontWeight:'bold'
  }
});



export default DrawMenuComponent