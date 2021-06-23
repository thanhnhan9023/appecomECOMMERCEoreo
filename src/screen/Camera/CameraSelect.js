import React, { Component } from 'react';
import { 
  View,
  TouchableOpacity,
  PermissionsAndroid,
  Image,
  ImageBackground,FlatList,
  Platform } from 'react-native';
import CameraRoll from "@react-native-community/cameraroll";
import Utils from '../../app/Utilis';
import { colors } from '../../config/style';
import FontSize from '../../config/FontSize';
import Config from '../../navigation/Config';
import CheckBox from 'react-native-check-box';
import { ActivityIndicator } from 'react-native';
import Video from 'react-native-video';
import Icon, { TypeIcon } from '../../config/Icon';
import { load } from 'npm';


const data=[
  {
    name:1,
  },
  {
    name:2,
  },
  {
    name:3,
  },
]

class CameraSelect extends Component {
  constructor(props) {
   super(props);
  this.number=8;
  this.state = {
       photos:[],// state lay anh
       selectimage:[], // state danh sach anh dc chon
       loading:false, // loading
       datalist:[]
   };
 }
  _load()
  {
    this.setState({datalist:data})
    console.log(this.state.datalist)
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

 _selectImageCheck=(image,selectsingle) =>{
   const {photos}=this.state
   if(selectsingle)
   {
    this.setState({photos:!photos[1].check})
   }
   else{
     let datanew=photos.map((item) =>{
      if(item.node.modified==image.node.modified)
      {
        return{
          ...item,
          check: !item.check,
        }
      }
      else{
        return item;
      }
    })
   this.setState({photos:datanew})  
      }
}
  _onRefresh=() =>{
    this._getphoto(0);

  }
 _selectImage=(image,selectsingle=false) =>{
   const {selectimage}=this.state
   if(selectsingle)
   {
     if(selectimage.length==0)
      {
        this.setState({selectimage:[{...image,check:true}]})
      }
     else{
       if(image.node.image.uri ==selectimage[0].node.image.uri)
       {

        let datacheck=selectimage.filter(item => item.node.image.uri!=image.node.image.uri)
        this.setState({selectimage:datacheck})
       }
       else
       {
       this.setState({selectimage:[selectimage[0]={...image,check:true}]})
       }
     }
   }
   else{
      if(selectimage.length >0)
      { 
        Utils.nlog('vao khi list lon hon 0')
        const check=selectimage.find(item => item.node.image.uri ==image.node.image.uri)
        Utils.nlog(check)
        if(!check)
        {
        
          this.setState({selectimage:[...selectimage,{...image,check:true}]})
        }
        else
        {
          this.setState({selectimage:selectimage.filter(item => item.node.image.uri!=image.node.image.uri)})
        }
      }
      else
      {
        this.setState({selectimage:[{...image,check:true}]})
      }
  }
 }
   _loadmore=() =>
   {
     const {loading}=this.state
     if(!loading )
     {
       let num=8
       this.setState({loading:true})
       this._getphoto(num)
     }
     else{
       return;
     }
   }
   _getvideo()
{
      CameraRoll.getPhotos({
        first:10,
        assetType: 'Videos',
    })
    .then(r => {
      Utils.nlog('load video')
      Utils.nlog(r.edges)
    this.setState({ photos:r.edges});
      })
    .catch((err) => {
      console.log(err)
    });
}

   _getphotoablum(num)
   {
      CameraRoll.getPhotos({
          first:num,
          assetType: 'Photos',
      })
      .then(r => {
        console.log(r.edges)
      this.setState({ photos:r.edges});
      console.log('array photo-_____')
      console.log(this.state.photos)
      this.setState({photos:this.state.photos.map((item,index)=>{
                return{
                  ...item,
                  check:false,
                      }
                })})
        })
      .catch((err) => {
        console.log(err)
      });
   }

   _getphoto = (numberimage) => {
  
    if(numberimage==0)
    {
      this._getphotoablum(8);
      this.setState({loading:false})
      return;
    }
    else{
      Utils.nlog('vao load more')     
      this.number+=numberimage;
      let numbernew=this.number
      this._getphotoablum(numbernew);
      this.setState({loading:false})
      return;
    }
   
   }
  async componentDidMount()
   { 
    // this._getphoto(0); 
    this._getvideo();
    Utils.nlog('gia tri data list___________')
    this._load();
   }
   _isCheckCkbox(item)
   {
     const {selectimage}=this.state
     const check=selectimage.find(item1 => item1.node.image.uri==item.node.image.uri)
     if(check)
     {
       return true;
     }
     else{
       return false;
     }
   }
   
   _renderitem=({item,index}) =>{
      const check=this._isCheckCkbox(item);
          return(
            <TouchableOpacity onPress={() =>this._selectImage(item,false)}>
            <ImageBackground key={index}
            style={{
            width:200,height:200,
            marginRight:10,
            marginBottom:10}} source={{uri:item.node.image.uri}}>
              {check? 
              <CheckBox
              isChecked={check}
              />
              :null}
            </ImageBackground>
        </TouchableOpacity>
          )
    }
    _rendetItemVideo=({item,index}) =>
    {
      return(
        <View key={index}>
            <Video
            style={{
              width:FontSize.scale(160),
              height:FontSize.scale(200),
              marginRight:FontSize.scale(10),
              marginBottom:FontSize.scale(10),
            }}
            source={{uri:item.node.image.uri}}
            ref={(ref) => {
              this.player = ref
            }}
            paused={false}
            posterResizeMode={'cover'}
            resizeMode={'cover'} 
            />
            <TouchableOpacity 
              onPress={() => Utils.navigate(Config.VideoItem,{uri:item.node.image.uri})}
              style={{position:'absolute',
              top:FontSize.scale(200/2),
              left:FontSize.scale(150/2),
              alignItems:'center'}}>
                <Icon type={TypeIcon.FontAwesome} name={'play'}  size={35}/>
            </TouchableOpacity>
        </View>
      )
    }
    _renderFooter=() =>{
      const  {loading}=this.state
      // Utils.nlog("loading footer"+loading)
      return(
      <View  style={{marginTop:10,alignItems:'center'}}>
            {loading? <ActivityIndicator size={'large'}/>:null}
      </View>
      )
    }
  render() {
      const {photos,loading}=this.state
      // Utils.nlog(photos)
    return (
      <View style={{flex:1}}>
         {loading ? 
          <ActivityIndicator size="large" />
         : null}
          <FlatList
          style={{paddingHorizontal:FontSize.scale(10)}}
          numColumns={2}
          data={photos}
          renderItem={this._renderitem}
          keyExtractor={(item,index) => index}
          onRefresh={this._onRefresh}
          refreshing={loading}
          onEndReached={this._loadmore}
          onEndReachedThreshold={0}
          ListFooterComponent={this._renderFooter}
          >
          </FlatList>
      </View>
    );
  }
}
export default CameraSelect;
