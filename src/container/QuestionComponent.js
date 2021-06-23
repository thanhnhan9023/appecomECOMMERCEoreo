import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Utils from '../app/Utilis';
import FontSize from '../config/FontSize';
import CheckBox from '@react-native-community/checkbox';
import Icon, { TypeIcon } from '../config/Icon';
export default class QuestionComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isSelected:false,
    };
  }

  setToggleCheckBox=() =>{
      this.setState({isSelected:!this.state.isSelected})
  }
  render() {
      const {item=null,index=null,onchangeanswer=()=>{}}=this.props;
      const {answer={},}=item
   
    
    return (
        
        <View style={{paddingHorizontal:FontSize.scale(18)}} >
           
        <Text style={{fontWeight:'bold',fontSize:FontSize.reText(24)}} >{item.name}</Text>
    
           { item.options.map((itemtl,index)=>{
                return(
                           
                    <TouchableOpacity  style={{flexDirection:'row',paddingHorizontal:FontSize.scale(10)}} key={index}
                    onPress={()=>onchangeanswer(item,itemtl)}
                    >
                        
                         <Icon type={TypeIcon.MaterialCommunityIcons} name={itemtl.id!=answer.id?'checkbox-blank-outline':'checkbox-marked'} size={22}></Icon>
                         <View style={{width:FontSize.scale(10)}}>

                         </View>
                         <Text style={{fontSize:FontSize.reText(22)}}>{itemtl.name}</Text>
                        
                    </TouchableOpacity>
                )
            })
            }
            </View>
    );
  }
}
