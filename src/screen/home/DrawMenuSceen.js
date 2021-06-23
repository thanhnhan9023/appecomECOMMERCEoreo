import React, { Component } from 'react';
import { View, Text,TouchableOpacity, Alert } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Config from '../../navigation/Config';
import ConfigScreen from '../../navigation/ConfigScreen';
import FontSize from '../../config/FontSize';
import Icon, { TypeIcon } from '../../config/Icon';
import { colors } from '../../config/style';
const Drawer = createDrawerNavigator();
const data=[
  {
      Name:'Women',
      IsShowIcon:true,
  },
  {
    Name:'Women',
    IsShowIcon:false,
  },
  {
    Name:'Women',
      IsShowIcon:true,

  },
  {
    Name:'Women',
    IsShowIcon:false,
  },
  

]
class DrawMenuSceen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isshowmenu:false,
    };
  }
  _Showmenu()
  {
    this.setState({ isshowmenu:!this.state.isshowmenu})
  }

  render() {
  
    return (
      <Drawer.Navigator 
      
      initialRouteName={ConfigScreen.Home}
      drawerContent= {(props) => <DrawMenuComponent data={data} {...props}></DrawMenuComponent>}>
      <Drawer.Screen name={Config.HomeScreen} component={ConfigScreen.Home} />
      <Drawer.Screen name={Config.Categories} component={ConfigScreen.Categories} />
    
    </Drawer.Navigator>
    
    );
  }
}
export default  DrawMenuSceen