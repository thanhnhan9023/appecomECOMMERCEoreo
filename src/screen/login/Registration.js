import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity,Text ,Switch} from 'react-native';
import FontSize from '../../config/FontSize';
import Icon, { TypeIcon } from '../../config/Icon';
import { colors } from '../../config/style';
import HeaderView from '../../container/HeaderView';
import Button2 from '../../component/Button2';
import Utils from '../../app/Utilis';


const dataIcon=[
  {
    TypeIcon:TypeIcon.AntDesign,
    NameIcon:'facebook-square',
    ColorIcon:colors.white,
    backgroundColorIcon:colors.blue,
    
  },
  {
    TypeIcon:TypeIcon.FontAwesome,
    NameIcon:'google-plus-square',
    ColorIcon:colors.white,
    backgroundColorIcon:colors.redStar,
    
  },
  {
    TypeIcon:TypeIcon.AntDesign,
    NameIcon:'message1',
    ColorIcon:colors.white,
    backgroundColorIcon:colors.black,
    
  },
]
const data=[
    {
      label:'Frist Name *'
    },
    {

      label:'Last Name*'
    },
    {

      label:'User Name *'
    },
    {

      label:'Email *'
    },
    {
      label:'Password *'
    },
]


export default class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value:'',
      isshowpass:true,
      isEnabled:false,
    };
  }
  togelePassword=() =>{
    this.setState({isshowpass:!this.state.isshowpass})
  }
  toggleSwitch=() =>{
    this.setState({isEnabled:!this.state.isEnabled})
  }
  _Viewicon=(item,index) =>
  {
  
    return(
      <View key={index} style={{flexDirection:'row',paddingVertical:FontSize.scale(20)}}>
      <TouchableOpacity style={{width:FontSize.scale(44),height:FontSize.scale(44),backgroundColor:item.backgroundColorIcon,borderRadius:FontSize.scale(40),justifyContent:'center',alignItems:'center'}} >
          <Icon type={item.TypeIcon}   size={18} name={item.NameIcon} color={item.ColorIcon}></Icon>
  
      </TouchableOpacity>
      <View style={{width:FontSize.scale(20)}}>
  
      </View>
      </View>
    )
  }
  render() {
    return (
      <View style={{flex:1,backgroundColor:colors.white}}>
            <HeaderView
            IconLefType={TypeIcon.AntDesign}
            IconNameLeft={'left'}
            IconLeftShow={true}
            TitleCenter={'Registration'}
            sizeText={22}
            iconright={false}
            onPressLeft={() => Utils.goBack()}
            />
            <View style={{height:FontSize.scale(14)}}> 

            </View>
                {data.map((item,index) =>{
                  if(index===4)
                  {
                    return(
                      <View key={index} style={{
                      marginHorizontal:FontSize.scale(12),
                      flexDirection:'row',
                      paddingHorizontal:FontSize.scale(6),
                      marginBottom:FontSize.scale(12),
                      borderWidth:0.6,
                      borderColor:colors.grayLight,
                      justifyContent:'center',
                      alignItems:'center'}}>
                      <TextInput
                      placeholder={item.label}
                        style={{flex:8,height:FontSize.scale(40)}}
                      >
                      </TextInput>
                        <TouchableOpacity  onPress={this.togelePassword}>
                                {this.state.isshowpass ==false ?  
                                <Icon  type={TypeIcon.Feather} name={'eye-off'} size={22} colors={colors.grayLight}></Icon> 
                                : 
                                <Icon  type={TypeIcon.Feather} name={'eye'} size={22} colors={colors.grayLight}></Icon>} 
                        </TouchableOpacity>
                      </View>
                    )
                  }
                  else
                  return(
                    <View key={index} style={{paddingHorizontal:FontSize.scale(12),marginBottom:FontSize.scale(12)}}>
                    <TextInput
                    placeholder={item.label}
                      style={{paddingHorizontal:FontSize.scale(10),borderWidth:0.6,borderColor:colors.grayLight,height:FontSize.scale(40)}}
                    >
                    </TextInput>
                    </View>
  
                  )
                })}
                <View style={{height:FontSize.scale(14)}}></View>
                <View style={{flex:1}}>
                    <View style={{flexDirection:'row',paddingHorizontal:FontSize.scale(12)}}>
                      <Text style={{flex:8,fontSize:FontSize.reText(18)}}>
                        {`I'd like to receive exclusive offers and style advice by email and sms from Oreo` }
                      </Text>
                       <Switch style={{flex:2}}
                      trackColor={{ false: "#767577", true: colors.seaweedGreen }}
                      thumbColor={this.state.isEnabled ? colors.mediumGreen : "#f4f3f4"}
                      ios_backgroundColor="#3e3e3e"
                      onValueChange={this.toggleSwitch}
                      value={this.state.isEnabled}
                    />
              
               
                   </View>
                    <View style={{height:FontSize.scale(14)}}>

                    </View>
                    <View style={{paddingHorizontal:FontSize.scale(12),height:FontSize.scale(30)}}>
                    <Button2  style={{height:FontSize.scale(40),backgroundColor:colors.black}} styleTxt={{color:colors.white,fontSize:FontSize.reText(18)}} title={'Register'}    ></Button2>
                    </View>
                    <View style={{height:FontSize.scale(14)}}>

                    </View>
                   <View style={{flexDirection:'row',justifyContent:'center'}}>
                    {dataIcon.map(this._Viewicon)} 
                   
                    </View>
                    <View style={{height:FontSize.scale(20)}} ></View>
                    {/* <View>

                    </View> */}
                    <Text style={{textAlign:'center',fontSize:FontSize.reText(18)}}>{'Already have an account?'}</Text>
                </View>
                   





                  
      </View>
    );
  }
}
