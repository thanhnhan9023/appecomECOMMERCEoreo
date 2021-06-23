import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Utils from '../app/Utilis';
import FontSize from '../config/FontSize';
import Icon, { TypeIcon } from '../config/Icon';
import { colors } from '../config/style';
import QuestionComponent from './QuestionComponent';



 class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropdown:false,
      dataquestioncopy:this.props.dataquestion
    };
  }
  _dropdown=()=>{
    this.setState({ isDropdown:!this.state.isDropdown})  
  }
  onchangeanswer=(cauhoi,cautraloi) =>{
     const {dataquestioncopy}=this.state
    let listnewdata=dataquestioncopy.map((item,index) =>{
          if(item.id==cauhoi.id)
          {
            return {...cauhoi,answer:cautraloi}
          }
          else
          return item;
    })
    this.setState({dataquestioncopy:listnewdata})

  }
  _ClearCheckbox=() =>{
    const {dataquestioncopy}=this.state
   let datanew=dataquestioncopy.map((item,index)=>{
  
    return {...item,answer:{}}
   })
   this.setState({dataquestioncopy:datanew})
  
  }
  render() {
      const {txtLeft=null,icontype=null,nameicon=null,sizeicon=0 }=this.props
      const {dataquestioncopy} =this.state
    return (  

      <View >
           <TouchableOpacity 
           style={{flexDirection:'row',paddingHorizontal:FontSize.scale(30)}}
              onPress={this._dropdown}
           >
             
           <Text style={{fontSize:FontSize.reText(22),fontWeight:'bold'}}>{txtLeft}</Text>
            <View style={{flex:6}}>

            </View>
            <Icon
            type={TypeIcon.MaterialIcons}
            name={'arrow-drop-down'}
            size={30}
            ></Icon>
              

            </TouchableOpacity>
            {/* <TouchableOpacity style={{alignItems:'center'}}
            
            onPress={this._ClearCheckbox}
            >
              <Text>{'Clear'}</Text>
            </TouchableOpacity> */}
            {this.state.isDropdown?<View style={{flexDirection:'column',paddingHorizontal:FontSize.scale(30)}}>
                {dataquestioncopy.map((item,index)=>{
                  return(     
                        <QuestionComponent
                        key={index}
                        item={item}
                        index={index}
                        onchangeanswer={this.onchangeanswer}
                        ></QuestionComponent>
                      
                
                  )
                })}
            </View>:null}

      </View>
     
  
    );
  }
}
export default Dropdown