import React, { Component } from 'react';
import { View, Text, TouchableOpacity ,StyleSheet} from 'react-native';
import Icon, { TypeIcon } from '../../config/Icon';
import FontSize from '../../config/FontSize';
import { colors } from '../../config/style';
import Config from '../Config';

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
       
      <View style={{paddingHorizontal:FontSize.scale(10),paddingVertical:FontSize.scale(15)}}>
            <Text
            style={styles.TxtTitle}
            >{'Categories'}</Text>
            <View
            style={{height:FontSize.scale(20)}}
            />
        {data.map((item,index) =>{
                    if(item.IsShowIcon ==true)
                    {
                        return(
                          <View key={index}>
                            <View key={index} style={{flexDirection:'row',justifyContent:'space-between',borderBottomWidth:0.6,borderBottomColor:colors.grayLight}}
                            >
                                  <TouchableOpacity>
                                      <Text style={{fontSize:FontSize.reText(20)}} >{item.Name}</Text>
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
                            style={{fontSize:FontSize.reText(20)}}
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
    fontSize:FontSize.reText(28),fontWeight:'bold'
  }
});



export default DrawMenuComponent