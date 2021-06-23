import React, { PureComponent } from 'react';
import {StyleSheet,TouchableOpacity, View,Image,Text}from 'react-native';
// import { RNCamera } from 'react-native-camera';
import CameraRoll from "@react-native-community/cameraroll";
import Utils from '../../app/Utilis';
import Config from '../../navigation/Config';
import Icon, { TypeIcon } from '../../config/Icon';
import { colors } from '../../config/style';
import FontSize from '../../config/FontSize';
import { RNCamera} from 'react-native-camera';


class Camera extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      photosfirst:[],
      recording: false,
      timer:null,
      counter:0,
      countermin:0,
      urivdeo:null,
    };
  }

   _hasAndroidPermission=async () => {
    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
    const hasPermission = await PermissionsAndroid.check(permission);
    if (hasPermission) {
      return true;
    }
    const status = await PermissionsAndroid.request(permission);
    return status === 'granted';
  }

  _takePicture = async () => {
     if (this.camera){
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      CameraRoll.save(data.uri,{type:"photo"}).
      then((res)=>{console.log("save img...",res);}).
      catch((err)=>{console.log("err for save img...",err);})
    }
  };

  _getphotolast=() =>{
       CameraRoll.getPhotos({
          first:1,
          assetType: 'Photos',
      })
      .then(r => {
      
      this.setState({ photosfirst:[...r.edges]});
        })
      .catch((err) => {
        console.log(err)
      });
  }

  _getUri=()=>{
    const {photosfirst}=this.state
       let a= photosfirst.map((item) => 
       {
         return item.node.image.uri
       }
       )
       return a;
   }

  _getrecord=async ()=>
  {
    const {recording}=this.state
    if (this.camera && !recording) {
      try {
          this.setState({recording:true})
          this._startTimer()
          const { uri, codec = "mp4" } = await this.camera.recordAsync(
            {mute:true}
          );
         CameraRoll.save(uri,{type:"video"})
      } catch (e) {
          console.error(e);
      }
     }
  }

  _stopRecording = () => 
  {
    const {recording}=this.state
    if(recording)
    {
    this.camera.stopRecording();
    // CameraRoll.save(data.uri,{type:"video"}).
    clearInterval(this.state.timer)
    this.setState({counter:0,timer:null,countermin:0,recording:false})
    }
  }
  _startTimer = () =>
  {
    let timer = setInterval(this._tick,1000)
    this.setState({timer:timer});
  }

  _tick =() => 
  {
    const {counter,countermin,timer}=this.state
    this.setState({
      counter: this.state.counter + 1
    });
    if(counter==60)
    {
      clearInterval(timer)
      this.setState({countermin:1,counter:0,timer:null})
      clearInterval(timer)
      this._startTimer()
    }
    if(countermin>=1 && counter==60)
    {
      this.setState({countermin:countermin+1})
    }
  } 

  componentDidMount()
  {
   this._getphotolast();
  }

  _viewcamera=(data) =>
  {
   return(
     <View>
    <TouchableOpacity onPress={() =>this._getrecord(data)} 
    style={{
    ...styles.capture,backgroundColor:colors.white}}
    >
      <View style={{
      width:'100%',
      height:'100%',
      borderColor:colors.black,
      backgroundColor:colors.redStar,
      borderRadius:FontSize.scale(60),
      borderWidth:2}} />
     </TouchableOpacity>
     </View>
   )
  }

  _viewstopcamera=(data) =>
  {
    return(
      <TouchableOpacity onPress={() =>this._stopRecording(data)} 
      style={{  
      ...styles.capture,backgroundColor:colors.black,
      justifyContent:'center',
      alignItems:'center',}}
      >
        <View style={{
        width:FontSize.scale(30),
        height:FontSize.scale(30),
        backgroundColor:colors.redStar,
        borderRadius:FontSize.scale(2),
       }} />
       </TouchableOpacity>
     )
  } 

  render() {
    const {photosfirst,recording,timer,counter,countermin}=this.state
    return (
      <View style={styles.container}>
           {/* {timer ? 
            <View style={{
              justifyContent:'center'
              ,alignItems:'center',
              height:FontSize.scale(150),
                }}> 
                <Text style={{fontSize:FontSize.reText(24),color:colors.redStar}}>{"0"+countermin+":"+counter}</Text>
            </View>:null
            } */}
          <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style={styles.preview}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            androidRecordAudioPermissionOptions={{
              title: 'Permission to use audio recording',
              message: 'We need your permission to use your audio',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
          />
            {timer ? 
            <View style={{
              justifyContent:'center',
              alignItems:'center',
              position:'absolute',
              top:10,
              left:FontSize.Width(40),
                }}> 
                <Text style={{fontSize:FontSize.reText(24),color:colors.redStar}}>{"0"+countermin+":"+counter}</Text>
            </View>:null
            }
          <View styles={{height:FontSize.scale(10)}}/>
          <View 
          style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          paddingVertical:FontSize.scale(60)}
          }>
            {photosfirst.length >0 ?
                <Image source={{uri:this._getUri()+''}}
                  borderRadius={50}
                  style={{
                  width:FontSize.scale(55),
                  height:FontSize.scale(55)
                  }}  
                  resizeMode={'cover'} 
                />
                :<View style={{width:FontSize.scale(50)}} >
                  </View>
              }
              {/* {!recording?this._viewcamera(this):this._viewstopcamera(this)} */}
              <TouchableOpacity   
                  style={{  
                  ...styles.capture,
                  backgroundColor:colors.black,
                  justifyContent:'center',
                  alignItems:'center',}}  
                    onPress={this._takePicture.bind(this)} >
                   <View 
                   style={{
                    width:FontSize.scale(30),
                    height:FontSize.scale(30),
                    backgroundColor:colors.redStar,
                    borderRadius:FontSize.scale(2),
                  }} 
                  />
              </TouchableOpacity>
            <TouchableOpacity onPress={() =>{Utils.navigate(Config.CameraSelect)}} style={{justifyContent:'center'}}>
                <Icon type={TypeIcon.Ionicons} name='md-folder-open-outline' size={40 } color={colors.white} />
            </TouchableOpacity>
          </View> 
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor:colors.blackShadow,
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    justifyContent:'center',
    backgroundColor:'red',
    width:FontSize.scale(60),
    height:FontSize.scale(60),
    borderRadius:FontSize.scale(60),
    paddingVertical:FontSize.scale(1),
    paddingHorizontal:FontSize.scale(1),
  },
});

export default  Camera