import React, { Component } from 'react'
import { Text, View } from 'react-native'

import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import EvilIcons from 'react-native-vector-icons/dist/EvilIcons';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import Feather from 'react-native-vector-icons/dist/Feather';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import Fontisto from 'react-native-vector-icons/dist/Fontisto';

 

export const TypeIcon = {
    AntDesign: "AntDesign",
    Fontisto:"Fontisto",
    Entypo: "Entypo",
    EvilIcons: "EvilIcons",
    FontAwesome: "FontAwesome",
    MaterialCommunityIcons:"MaterialCommunityIcons",
    MaterialIcons: "MaterialIcons",
    Feather:"Feather",
    FontAwesome5:'FontAwesome5',
    Ionicons:'Ionicons',
  
}
class Icon extends Component {
    render() {
        
            const { type = '', ...other } = this.props
            switch (type) {
                case TypeIcon.AntDesign:
                    return <AntDesign {...other} />
              
                case TypeIcon.Entypo:
                    return <Entypo {...other} />
                  
                case TypeIcon.EvilIcons:
                    return <EvilIcons {...other} />
                  
                case TypeIcon.FontAwesome:
                    return <FontAwesome {...other} />
                  
                case TypeIcon.MaterialCommunityIcons:
                    return <MaterialCommunityIcons {...other} />
               
                case TypeIcon.MaterialIcons:
                    return <MaterialIcons {...other} />
                
               case TypeIcon.Fontisto:
                        return <Fontisto {...other} />
                       
                case TypeIcon.Feather:
                return <Feather {...other} />

                case TypeIcon.FontAwesome5:
                return <FontAwesome5 {...other} />
                

                case TypeIcon.Ionicons:
                return <Ionicons {...other}/>
     
                    
                default:
                    return null;
                    break;
        
                            }               
            }
}

export default  Icon