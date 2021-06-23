import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import Utils from '../../app/Utilis';
import Button2 from '../../component/Button2';
import FontSize from '../../config/FontSize';
import Icon, { TypeIcon } from '../../config/Icon';
import { colors } from '../../config/style';
import Config from '../../navigation/Config';
import Login from './Login';



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

export default class Sign extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email:'',
      showpass:true,
      checkemail:false,
    };
  }
_showpass=() =>{
  const {showpass}=this.state
  this.setState({showpass:!showpass})
}
_checkemial=(val) =>
{
  if(val.length>0)
  {
      var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
      if (filter.test(val)) 
      { 
        this.setState({checkemail:true});
      }
      else{ 
        this.setState({checkemail:false});
        alert('ban nhap sai email')
        return;
      } 
  }
  else{
    alert('moi ban nhap email')
    return;
  }
}
_Viewicon=(item,index) =>
{
  return(
    <View key={index} style={{flexDirection:'row',paddingVertical:FontSize.scale(30)}}>
    <TouchableOpacity 
    style={{width:FontSize.scale(44),
    height:FontSize.scale(44),
    backgroundColor:item.backgroundColorIcon,
    borderRadius:FontSize.scale(40),
    justifyContent:'center',
    alignItems:'center'}} >
        <Icon type={item.TypeIcon}  size={18} name={item.NameIcon} color={item.ColorIcon}></Icon>
    </TouchableOpacity>
    <View style={{width:FontSize.scale(20)}}>
    </View>
    </View>
  )
}
  render() {
    const {showpass,email}=this.state
    return (
      <View style={{flex:1,backgroundColor:colors.white}}>    
        <View onTouchEnd={() => {
                    this.props.navigation.goBack()
                }} style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor:'transparent' }}></View>     
            <View style={{flexDirection:'row',paddingVertical:FontSize.scale(8),paddingHorizontal:FontSize.scale(10)}}>
                <TouchableOpacity  onPress={() =>{
                  this.props.navigation.goBack()
                }} style={{flex:1}}>
                     <Icon   type={TypeIcon.AntDesign} name={'close'} size={22}></Icon>  
                </TouchableOpacity>
                <View style={{flex:6,justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:FontSize.reText(20),fontWeight:'800'}}>{'Sign In'}</Text>
                </View>
                <View style={{flex:1}}/>
            </View> 
            <View style={{height:FontSize.scale(15)}}/>
            <View style={{paddingHorizontal:FontSize.scale(10)}}>
                    <TextInput
                    style={{borderWidth:0.7,borderColor:colors.grayLight}}
                    placeholder={'Email Address or Username * '}
                    value={email}
                    autoFocus = {true}
                    onChangeText={val => this.setState({email:val})}
                    onTouchEnd={() =>this._checkemial(email)}
                    />
                    <View style={{height:FontSize.scale(12)}}/>
                    <TextInput 
                      style={{borderWidth:0.7,borderColor:colors.grayLight}}
                      placeholder={'Password'}
                      secureTextEntry={showpass}
                     
                    />
                    <Icon style={{position:'absolute',right:20,bottom:10}}  onPress={this._showpass} type={TypeIcon.Ionicons} 
                     name={showpass?'eye-off-outline':'eye-outline'} size={22}/>
                    <Text style={{position:'absolute',left:20,top:-10}}>{'Email Address or Username *'}</Text>
             </View>
            <View View style={{height:FontSize.scale(10)}}/>
                <View style={{paddingHorizontal:FontSize.scale(10)}}>
                <View style={{height:FontSize.scale(15)}}/>
                    <TouchableOpacity style={{borderRadius:3,paddingVertical:FontSize.scale(12),backgroundColor:'red',backgroundColor:colors.black}}>
                      <Text style={{fontSize:FontSize.reText(20),color:colors.white,textAlign:'center'}}>{'Sign In'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{paddingVertical:FontSize.scale(20),alignItems:'center'}}>
                            <Text style={{fontSize:FontSize.reText(18),fontWeight:'bold',color:colors.black}}>{'Forgot Password ?'}</Text>
                    </TouchableOpacity>
                    <View style={{flexDirection:'row',paddingVertical:FontSize.scale(10)}}>
                    <View style={{flex:1,borderBottomWidth:0.2,borderBottomColor:colors.grayLight,marginBottom:FontSize.scale(6)}}></View>
                    <View style={{width:FontSize.scale(5)}}></View>
                    <Text style={{color:colors.grayLight}}>{'or'}</Text>
                    <View style={{width:FontSize.scale(5)}}></View>
                    <View style={{flex:1,borderBottomWidth:0.2,marginBottom:FontSize.scale(6),borderBottomColor:colors.grayLight}}></View>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'center'}}>
                    {dataIcon.map(this._Viewicon)} 
                    </View>
                </View>
                      <View style={{flex:1,justifyContent:'flex-end'}}
                          >
                            {/* <Text>{'Dont have account'}</Text> */}
                            <View style={{backgroundColor:null,width:FontSize.Width(100),paddingVertical:FontSize.scale(20),paddingHorizontal:FontSize.scale(10)}}>
                            <Text style={{textAlign:'center',color:colors.grayLight}}  >{'Dont have an account ?'}</Text>
                            <View style={{height:FontSize.scale(10)}}></View>
                            <Button2
                            title={'Register'}
                            onPress={() =>{
                             Utils.navigate(Config.Registration)
                            }
                            }
                            style={{height:FontSize.scale(35),backgroundColor:null}}
                            />
                            </View>
                          </View>
      </View>
    );
  }
}

// const app2=() =>{
//   return(
//     <Login {...props}></Login>
//   )
// }