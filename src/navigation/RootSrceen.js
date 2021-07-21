import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Config from './Config';
import ConfigScreen from './ConfigScreen';
import { createStackNavigator,TransitionPresets, } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DrawMenuComponent from '../navigation/ComponentDrawmenu/DrawMenuComponent'
import MyTabBar from './ComponentBottomenu/MyTabBar';
import Utils from '../app/Utilis';
import { colors } from '../config/style';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SplashScreen from '../screen/Home/SplashScreen';
import { connect } from 'react-redux'


const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

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

 class BottomMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isLoading:true,
    };
  }
  render() {
    return (
        <Tab.Navigator
        initialRouteName={Config.DrawMenuSceen}
        activeColor={colors.black}
        tabBar={props => <MyTabBar {...props}></MyTabBar>} 
        >
          <Tab.Screen {...this.props} name={Config.HomeScreen} component={ConfigScreen.Home} />
           <Tab.Screen name={Config.DrawMenuSceen} component={DrawMenuSceen} />
           <Tab.Screen name={Config.Shop} component={ConfigScreen.Shop} />
           <Tab.Screen name={Config.WishListScreen} component={ConfigScreen.WishListScreen} />
           <Tab.Screen name={Config.Categories} component={ConfigScreen.CartScreen} />
           <Tab.Screen name={Config.login} component={ConfigScreen.login} />
           <Tab.Screen name={Config.Camera} component={ConfigScreen.Camera} />
           <Tab.Screen name={Config.LoginSuccess} component={ConfigScreen.LoginSuccess} />
      </Tab.Navigator>
    );
    }
}
class DrawMenuSceen extends Component {
  render() {
    return (
      <Drawer.Navigator 
      initialRouteName={ConfigScreen.Home}
      drawerContent= {(props) => <DrawMenuComponent data={data} {...props}></DrawMenuComponent>}>
      <Drawer.Screen {...this.props} name={Config.HomeScreen} component={ConfigScreen.Home} />
      <Drawer.Screen name={Config.Categories} component={ConfigScreen.Categories} />
      <Tab.Screen name={Config.LoginSuccess} component={ConfigScreen.LoginSuccess} />
    </Drawer.Navigator>
    );
  }
}

const MainStack= createStackNavigator();
class MainStackScreen extends Component{
  render()
  {
    return(
        <MainStack.Navigator
        mode="modal"
        headerMode={false}
        // initialRouteName={Config.Splashscreen}    
        >
        <MainStack.Screen name={Config.bottomenu} component={BottomMenu} /> 
        <MainStack.Screen name={Config.Splashscreen} component={ConfigScreen.Splashscreen} /> 
        <MainStack.Screen name={Config.HomeScreen} component={ConfigScreen.Home} />
        <MainStack.Screen name={Config.Shop} component={ConfigScreen.Shop} />
        <MainStack.Screen  name={Config.WishListScreen} component={ConfigScreen.WishListScreen} />
        <MainStack.Screen name={Config.login} component={ConfigScreen.login} />
        <MainStack.Screen  name={Config.Sign} component={ConfigScreen.Sign} />
        <MainStack.Screen  name={Config.Registration} component={ConfigScreen.Registration} />
        <MainStack.Screen name={Config.Categories} component={ConfigScreen.Categories} />
        <MainStack.Screen  name={Config.ProductScreen}  component={ConfigScreen.ProductScreen}/>
        <MainStack.Screen name={Config.DetalisProduct} component={ConfigScreen.DetalisProduct} />
        <MainStack.Screen name={Config.CartScreen} component={ConfigScreen.CartScreen} />
        <MainStack.Screen name={Config.DetalisBlog} component={ConfigScreen.DetalisBlog} />
        <MainStack.Screen name={Config.Camera} component={ConfigScreen.Camera} />
        <MainStack.Screen name={Config.CameraSelect} component={ConfigScreen.CameraSelect} />
        <MainStack.Screen name={Config.ImageSelect} component={ConfigScreen.ImageSelect} />
        <MainStack.Screen name={Config.VideoItem} component={ConfigScreen.VideoItem} />
        <MainStack.Screen name={Config.Settings} component={ConfigScreen.AppSetting} />
        <MainStack.Screen name={Config.DetalisBlogAll} component={ConfigScreen.DetalisBlogAll} />
        <MainStack.Screen name={Config.LoginSuccess} component={ConfigScreen.LoginSuccess} />
    </MainStack.Navigator>
    )
  }
}

 const RootSrceen =() => { // Root Scr
    return (
        <Stack.Navigator
        mode="modal"
        headerMode={false}
        initialRouteName={'Main'}
        screenOptions={{
          cardStyle: { backgroundColor: 'transparent' },
          cardStyleInterpolator: ({ current: { progress } }) => ({
              cardStyle: {
                  opacity: progress.interpolate({
                      inputRange: [0, 0.5, 0.9, 1],
                      outputRange: [0, 0.25, 0.7, 1],
                  }),
              },
              overlayStyle: {
                  opacity: progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, 0.1],
                      extrapolate: 'clamp',
                  }),
              },
          }),
      }}
        >
        <Stack.Screen name={'Main'} component={MainStackScreen} /> 
        <Stack.Screen name={'ModalSign'} component={ConfigScreen.Sign} />
        {/* <Stack.Screen name={"m1"} component={ConfigScreen.Messbox} /> */}
      </Stack.Navigator>
    );
}


export default RootSrceen
