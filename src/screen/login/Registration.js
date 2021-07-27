import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity,Text ,Switch,StyleSheet} from 'react-native';
import FontSize from '../../config/FontSize';
import Icon, { TypeIcon } from '../../config/Icon';
import { colors } from '../../config/style';
import HeaderView from '../../container/HeaderView';
import Button2 from '../../component/Button2';
import Utils from '../../app/Utilis';
import AuthAction from '../../Redux/Actions/ActionAuth/AuthAction'
import { connect } from 'react-redux'
import { emailValidator,phoneValidator,passwordValidator, nameValidator, infoValidator }
 from '../../moudels/auth.validation';
import ConfigStack from '../../navigation/ConfigStack';
import Config from '../../navigation/Config'
import LinearGradient from 'react-native-linear-gradient';
import { ScrollView } from 'react-native';
import { Dimensions } from 'react-native';

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

class Registration extends Component {
  constructor(props) {
    super(props);
    this.ref_input1  = React.createRef();
    this.ref_input2  = React.createRef();
    this.ref_input3  = React.createRef();
    this.ref_input4  = React.createRef();
    this.ref_input5  = React.createRef();
    this.ref_input6  = React.createRef();
    this.state = {
      value:'',
      isshowpass:true,
      isEnabled:false,
      FirstName:null,
      LastName:null,
      UserName:null,
      Phone:null,
      Email:null,
      Password:null,
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
  _Resgistration= async() =>{
    const {FirstName,LastName,UserName,Email,Phone,Password,isEnabled}=this.state
    let data={
      FirstName:FirstName,
      LastName:LastName,
      UserName:UserName,
      Email:Email,
      Phone:Phone,
      Password:Password,
    }
    if(isEnabled)
    {
         this.props.Registration(data)
    }
    else{
      Utils.showMessages('Danger',"Age like oreo")
    }
  }
  _checkEmail=(val) =>{
   if(emailValidator(val)==true)
  return  this.ref_input6.current.focus();
    Utils.showMessages('Danger',emailValidator(val))
  }
  _checkPhone=(val) =>{
      if(phoneValidator(val)==true)
     return this.ref_input5.current.focus()
    Utils.showMessages('Danger',phoneValidator(val))
  }
  _checkPassword=(val) =>{
    if(passwordValidator(val)==true)
      return;
    Utils.showMessages('Danger',passwordValidator(val))
  }
  _checkUserName=val =>{
    if(nameValidator(val))
    return
    Utils.showMessages('Danger',nameValidator(val))
  }
  _checkFistName=val =>{
    if(infoValidator(val))
    return
    Utils.showMessages('Danger',infoValidator(val))
  }
  _checkLastName=val=>{
    if(infoValidator(val))
    return
    Utils.showMessages('Danger',infoValidator(val))
  }

 
  componentDidUpdate=() =>{
    if(this.props.data.error!=null)
    {
      Utils.showMessages('Danger',this.props.data.error.messge);
      this.props.ClearError();
    }
    if(this.props.data.isRes==true)
    {
      this.props.ClearRs(); 
      Utils.navigate(ConfigStack.AuthStack,{screen:Config.Sign,initial: false});
    }
  }
 
  render() {
    const {data,
      FirstName,
      LastName,
      UserName,
      Email,
      Phone,
      Password,
    }=this.state
    return (
      <ScrollView  showsVerticalScrollIndicator={false} style={{flex:1,backgroundColor:colors.white}}>
            <HeaderView
            IconLefType={TypeIcon.AntDesign}
            IconNameLeft={'left'}
            IconLeftShow={true}
            TitleCenter={'Registration'}
            sizeText={30}
            iconright={false}
            onPressLeft={() => Utils.goBack()}
            />
               <View style={{paddingHorizontal:FontSize.scale(12),height:'55%'}}>
                  <TextInput style={styles.input}
                  value={FirstName}
                  placeholder={'Frist Name *'}
                  autoFocus={false}
                  blurOnSubmit={false}
                  ref={ref => (this.ref_input1.current = ref)}
                  onSubmitEditing={() => { this.ref_input2.current.focus()}}
                  onChangeText={(val) => this.setState({FirstName:val})}
                  />
                  <TextInput style={styles.input}
                  ref={ref => { this.ref_input2.current = ref }}
                  placeholder={'Last Name*'}
                  value={LastName}
                  onSubmitEditing={() => this.ref_input3.current.focus()}
                  onChangeText={(val) => this.setState({LastName:val})}
                  />
                  <TextInput style={styles.input}
                  ref={ref => (this.ref_input3.current = ref)}
                  placeholder={'User Name *'}
                  value={UserName}
                  onChangeText={(val) => this.setState({UserName:val})}
                  onSubmitEditing={() => this.ref_input4.current.focus()}
                  />
                  <TextInput style={styles.input}
                   ref={ref => (this.ref_input4.current = ref)}
                  placeholder={'Phone *'}
                  value={Phone}
                  onChangeText={(val) => this.setState({Phone:val})}
                  onEndEditing={() =>this._checkPhone(Phone)}
                  onSubmitEditing={() => this._checkPhone(Phone)}
                  keyboardType="phone-pad"
                  />
                  <TextInput style={styles.input}
                    ref={ref => (this.ref_input5.current = ref)}
                  placeholder={'Email *'}
                  value={Email}
                  textContentType="emailAddress"
                  onChangeText={(val) => this.setState({Email:val})}
                  onEndEditing={() =>this._checkEmail(Email)}
                  onSubmitEditing={() =>this._checkEmail(Email)}
                  // onTouchEnd={() => this._checkEmail(Email)}
                  />
                  <TextInput style={styles.input}
                    ref={ref => (this.ref_input6.current = ref)}
                  placeholder={'Password *'}
                  value={Password}
                  secureTextEntry={true}
                  onChangeText={(val) => this.setState({Password:val})}
                  />
               </View>
                <View style={{flex:1,paddingVertical:FontSize.scale(10)}}>
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
                    <View style={{height:FontSize.scale(14)}}/>
                    <View style={{paddingHorizontal:FontSize.scale(12),height:FontSize.scale(30)}}>
                    <Button2  style={styles.btnRegister} 
                    styleTxt={{color:colors.white,
                    fontSize:FontSize.reText(18)}} 
                    title={'Register'}
                    onPress={() => this._Resgistration()}
                    isloading={this.props.data.isLoading}
                    />
                    </View>
                    <View style={{height:FontSize.scale(14)}}>
                    </View>
                   <View style={{flexDirection:'row',justifyContent:'center'}}>
                    {dataIcon.map(this._Viewicon)} 
                    </View>
                    <TouchableOpacity  onPress={() => Utils.navigate(Config.login)}>
                       <Text style={{textAlign:'center',fontSize:FontSize.reText(18)}}>{'Already have an account?'}</Text>
                    </TouchableOpacity>
                </View>
                <View style={{height:FontSize.scale(30)}}/>
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
    input:{
      height:FontSize.scale(38),
      borderWidth:0.6,
      marginTop:FontSize.scale(10),
      borderColor:colors.grayLight,
      borderRadius:FontSize.scale(3)
    },
    btnRegister:{
      height:FontSize.scale(40),
      backgroundColor:colors.black
    }
})


const mapStateToProps =(state) =>{
  return{
    data:state.AuthReducer
  }
}

const mapDispatchToProps =(dispatch) =>{
  return {
    Registration:(data) => dispatch(AuthAction.Resgistration(data)),
    ClearRs:() => dispatch(AuthAction.ActionClearIsRes()),
    ClearError:() => dispatch(AuthAction.ActionClearError()),
   
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Registration)
