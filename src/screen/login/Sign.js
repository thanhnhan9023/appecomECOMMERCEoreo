import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert,StyleSheet } from 'react-native';
import Utils from '../../app/Utilis';
import Button2 from '../../component/Button2';
import FontSize from '../../config/FontSize';
import Icon, { TypeIcon } from '../../config/Icon';
import { colors } from '../../config/style';
import Config from '../../navigation/Config';
import Login from './Login';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { LoginManager,AccessToken ,Profile} from "react-native-fbsdk-next";
import LoginSuccess from './LoginSuccess';
import { connect } from 'react-redux'
import AuthAction from '../../Redux/Actions/ActionAuth/AuthAction'
import Loading from '../../component/Loading';
import ConfigStack from '../../navigation/ConfigStack';

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

 class Sign extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showpass:true,
      checkemail:false,
      datalogin:null,
      UserName:null,
      Password:null,
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
    alignItems:'center'}} 
    onPress={() =>this._login(index)}
    >
        <Icon type={item.TypeIcon}  size={18} name={item.NameIcon} color={item.ColorIcon}></Icon>
    </TouchableOpacity>
    <View style={{width:FontSize.scale(20)}}>
    </View>
    </View>
  )
}
_login= async(index) =>
{
  const {datalogin}=this.state
  switch (index) {
    case 0:
      const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
      if (result.isCancelled) {
        throw 'User cancelled the login process';
      }
      // Once signed in, get the users AccesToken
      const data = await AccessToken.getCurrentAccessToken();
      if (!data) 
      {
        alert('tài khoản hoặc mật khẩu sai')
      }
      else
      {
        Utils.nlog(data)
        const currentProfile = await Profile.getCurrentProfile().then(
          res => this.setState({datalogin:res})
        )
        const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

        // Sign-in the user with the credential
        return auth().signInWithCredential(facebookCredential);
      }
      break;
      case 1:
        GoogleSignin.configure({
          webClientId: '1019229060057-egtcg0dv3g63kvn490299o2l2tkltev5.apps.googleusercontent.com',
        });
        const { idToken } = await GoogleSignin.signIn();

        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        const userInfo = await GoogleSignin.signIn().then(res => this.setState({datalogin:res.user}) );
        // Sign-in the user with the credential
        return auth().signInWithCredential(googleCredential);
      break;
    default:
      break;
  }
}
_logout= async() =>{
  // LoginManager.logOut();
  LoginManager.logOut();
 console.log('vao out')
  auth()
  .signOut()
  .then(() => console.log('User signed out!'));
  const token = await AccessToken.getCurrentAccessToken();
  Utils.nlog('gia tri token')
  Utils.nlog(token)
}
_LoginToken=async () =>{
  const {UserName,Password}=this.state
  let a={
    UserName,
    Password
  }
   this.props.LoginToken(a)
  
}
componentDidUpdate=() =>{
  
  if(this.props.data.token!=null)
  {
    Utils.navigate(ConfigStack.AuthStack,{screen:Config.login})
  }
}
  render() {
    const {showpass,UserName,Password,datalogin}=this.state
    return (
      <View style={styles.container}>    
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
                    value={UserName}
                    autoFocus = {false}
                    onChangeText={val => this.setState({UserName:val})}
                    // onTouchEnd={() =>this._checkemial(UserName)}
                    />
                    <View style={{height:FontSize.scale(12)}}/>
                    <TextInput 
                      style={{borderWidth:0.7,borderColor:colors.grayLight}}
                      autoFocus = {false}
                      placeholder={'Password'}
                      secureTextEntry={showpass}
                      value={Password}
                      onChangeText={val => this.setState({Password:val})}
                    />
                    <Icon style={{position:'absolute',right:20,bottom:10}}  onPress={this._showpass} type={TypeIcon.Ionicons} 
                     name={showpass?'eye-off-outline':'eye-outline'} size={22}/>
                    <Text style={{position:'absolute',left:20,top:-10}}>{'Email Address or Username *'}</Text>
             </View>
            <View View style={{height:FontSize.scale(10)}}/>
                <View style={{paddingHorizontal:FontSize.scale(10)}}>
                <View style={{height:FontSize.scale(15)}}/>
                    <TouchableOpacity 
                    onPress={() => this._LoginToken()}
                    style={styles.btnSign}>
                      {this.props.data.isLoading ? <Loading/> :
                      <Text style={{fontSize:FontSize.reText(20),color:colors.white,textAlign:'center'}}>
                      {'Sign In'}
                    </Text>
                      }
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
                      <View style={{flex:1,justifyContent:'flex-end'}}>
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
const mapStateToProps =(state) =>{
  return{
    data:state.AuthReducer
  }
}
const mapDispatchToProps =(dispatch) =>{
  return {
    LoginToken:(data) => dispatch(AuthAction.Login(data)),
   
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:colors.white
  },
  btnSign:{
    borderRadius:3,
    paddingVertical:FontSize.scale(12),
    backgroundColor:'red',
    backgroundColor:colors.black
  }
})
export default connect(mapStateToProps,mapDispatchToProps)(Sign)