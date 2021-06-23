import React, { Component } from 'react'
import { Text, TouchableOpacity, View ,Image} from 'react-native'
import {IMAGES} from '../../assets/images/IndexImg';
import Utils from '../app/Utilis';
import FontSize from '../config/FontSize';
import Icon, { TypeIcon } from '../config/Icon';
import { colors } from '../config/style';


 class HeaderView extends Component {
    _ViewLeft=()  =>{
        const {txtLeft=null,IconLeftShow=false,IconLefType=null,IconNameLeft=null,onPressLeft=() =>{},
         SizeIconLeft=22,StyleTxtLeft={}
        }=this.props
        return <View style={{
            flex:1,
            // backgroundColor:'red'
        }}>
         <Text style={{fontSize:FontSize.reText(18),...StyleTxtLeft}}  >{txtLeft}</Text>
         <TouchableOpacity 
         onPress={onPressLeft}
         >
             {/* {Utils.nlog('Icon Home:',IconLeftShow)} */}
           {IconLeftShow==true ?<Icon type={IconLefType} name={IconNameLeft} size={SizeIconLeft}></Icon> :null }   
      
                
         </TouchableOpacity>
        </View>
    }
    _ViewCenter=()     =>{
        const {TitleCenter=null,StyleTxtCenter={},SizeTextCenter=18,ShowIconCenter=false}=this.props
        return <View style={{
            flex:6,
            marginTop:FontSize.scale(6),
            justifyContent:'center',
            alignItems:'center',
            // backgroundColor:'red'
            
        }}>
            <Text numberOfLines={1}  style={{textAlign:'center',fontWeight:'bold',fontSize:FontSize.reText(SizeTextCenter),...StyleTxtCenter}} >{TitleCenter?TitleCenter:null}</Text>
           
           
           {ShowIconCenter==true  ?  <Image style={{width:'30%'}} source={IMAGES.imgLogo} resizeMode={'cover'}></Image>:null}
         
        </View>
    }
    _ViewRight=()     =>{
        const {iconright=false,typeicon=TypeIcon.AntDesign,iconname='checkcircleo',sizeicon=30,righticonone=false,sizeicon1=30,onPressRight=() =>{}} = this.props
        return <View style={{
            flex:1,    
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
            marginTop:FontSize.scale(8)
            
        }}>         
                   {righticonone==true  ?     
                   <View style={{backgroundColor:colors.redStar,width:FontSize.scale(20),height:FontSize.scale(20),borderRadius:FontSize.scale(23),justifyContent:'center',alignItems:'center'}}  >
                   
                   <Text style={{color:colors.white,fontSize:FontSize.reText(18),textAlign:'center'}}>{'1'}</Text>                   
                   </View>      
                    :null}
                 
           
            <View style={{width:FontSize.scale(2)}}>

            </View>
            <TouchableOpacity  onPress={onPressRight}>
               
          {iconright ==true ? <Icon  type={typeicon}  name={iconname} size={sizeicon}></Icon>:null}  
          
          </TouchableOpacity>
          
          
        </View>
    }
    render() {
        const { ViewLeft = null, ViewCenter = null, ViewRight = null, isDefault = true,styleContainer={},colorbackgroud=colors.white } = this.props
        return (
       
                < View style={{backgroundColor:colorbackgroud,flexDirection:'row',paddingVertical:FontSize.scale(2),paddingHorizontal:FontSize.scale(10),justifyContent:'center',alignItems:'center',...styleContainer,} } >
                            {this._ViewLeft()}
                            {this._ViewCenter()}
                            {this._ViewRight()}
                </View>
        
        )
    }
}

export default HeaderView