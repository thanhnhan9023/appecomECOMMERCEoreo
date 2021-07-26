import React, { Component } from 'react';
import Config from './Config';
import ConfigScreen from './ConfigScreen';
import {Animated, Easing } from 'react-native'
import { createStackNavigator,CardStyleInterpolators ,TransitionPresets, TransitionSpecs, HeaderStyleInterpolators} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DrawMenuComponent from '../navigation/ComponentDrawmenu/DrawMenuComponent'
import MyTabBar from './ComponentBottomenu/MyTabBar';
import Utils from '../app/Utilis';
import { colors } from '../config/style';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ConfigStack from './ConfigStack';



const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const StackRoot = createStackNavigator();

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

 export class BottomMenu extends Component {
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
           <Tab.Screen {...this.props} name={ConfigStack.HomeStack} component={HomeScreen} />
           <Tab.Screen name={ConfigStack.AuthStack} component={AuthScreen} />
           <Tab.Screen name={Config.DrawMenuSceen} component={DrawMenuSceen} />
           <Tab.Screen name={Config.Shop} component={ConfigScreen.Shop} />
           <Tab.Screen name={Config.WishListScreen} component={ConfigScreen.WishListScreen} />
           <Tab.Screen name={Config.CartScreen} component={ConfigScreen.CartScreen} 
           />
           <Tab.Screen name={Config.login} component={ConfigScreen.login} />
      </Tab.Navigator>
    );
    }
}
class DrawMenuSceen extends Component {
  render() {
    return (
      <Drawer.Navigator 
      drawerContent= {(props) => <DrawMenuComponent data={data} {...props}></DrawMenuComponent>}>
      <Drawer.Screen {...this.props} name={Config.HomeScreen} component={ConfigScreen.Home} />
      <Drawer.Screen name={Config.Categories} component={ConfigScreen.Categories} />
    </Drawer.Navigator>
    );
  }
}

const AuthStack=createStackNavigator();
const forSlide = ({ current, next, inverted, layouts: { screen } }) => {
  const progress = Animated.add(
      current.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
          extrapolate: 'clamp',
      }),
      next
      ? next.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
          extrapolate: 'clamp',
      })
      : 0
  );

  return {
      cardStyle: {
          transform: [
              {
                  translateX: Animated.multiply(
                      progress.interpolate({
                          inputRange: [0, 1, 2],
                          outputRange: [
                              screen.width, // Focused, but offscreen in the beginning
                              0, // Fully focused
                              screen.width * -0.3, // Fully unfocused
                          ],
                          extrapolate: 'clamp',
                      }),
                      inverted
                  ),
              },
          ],
      },
  };
};

const config = {
  duration: 300,
  easing: Easing.out(Easing.poly(4)),
  timing: Animated.timing,
};
 export  class AuthScreen extends Component{
  render()
  {
    return(
    <AuthStack.Navigator
    initialRouteName={ConfigScreen.login}
    headerMode={false}
    >
    <AuthStack.Screen  name={Config.login}  component={ConfigScreen.login} 
     options={{ headerShown: false, transitionSpec: { open: config, close: config }, cardStyleInterpolator: forSlide}}
    />
    <AuthStack.Screen  name={Config.Sign}  component={ConfigScreen.Sign} 
      options={{ headerShown: false, transitionSpec: { open: config, close: config }, cardStyleInterpolator: forSlide}}
    />
    <AuthStack.Screen  name={Config.Registration}  component={ConfigScreen.Registration} 
    options={{ transitionSpec: { open: config, close: config },cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS}}
    />
    </AuthStack.Navigator>
    )
  }
}
const HomeStack=createStackNavigator();
class HomeScreen extends Component{
  render()
  {
    return(
    <HomeStack.Navigator 
    initialRouteName={ConfigScreen.Home}
    headerMode={false}
    screenOptions={{
      headerShown: false,
      cardStyleInterpolator:
        CardStyleInterpolators.forRevealFromBottomAndroid,
    }}
    >
    <HomeStack.Screen  name={Config.HomeScreen}  component={ConfigScreen.Home} />
    <HomeStack.Screen name={Config.DetalisBlog} component={ConfigScreen.DetalisBlog} />
    <HomeStack.Screen name={Config.DetalisBlogAll} component={ConfigScreen.DetalisBlogAll} 
    />
    </HomeStack.Navigator>
    )
  }
}


const MainStack= createStackNavigator();
class MainStackScreen extends Component{
  render()
  {
    return(
        <MainStack.Navigator
        // mode="modal"
        headerMode={false}
        initialRouteName={Config.bottomenu}
        >
        <MainStack.Screen name={Config.bottomenu} component={BottomMenu} /> 
        <MainStack.Screen name={Config.Sign} component={Config.Sign}  /> 
        <MainStack.Screen name={Config.Shop} component={ConfigScreen.Shop} />
        <MainStack.Screen  name={Config.WishListScreen} component={ConfigScreen.WishListScreen} />
        <MainStack.Screen name={Config.Categories} component={ConfigScreen.Categories} />
        <MainStack.Screen  name={Config.ProductScreen}  component={ConfigScreen.ProductScreen}
            options={{
            headerShown: false,
            cardStyleInterpolator:
              CardStyleInterpolators.forRevealFromBottomAndroid,
          }}
        />
        <MainStack.Screen name={Config.DetalisProduct} component={ConfigScreen.DetalisProduct} 
            options={{
              headerShown: false,
              cardStyleInterpolator:
                CardStyleInterpolators.forRevealFromBottomAndroid,
            }}
        />
        <MainStack.Screen name={Config.Camera} component={ConfigScreen.Camera} />
        <MainStack.Screen name={Config.CameraSelect} component={ConfigScreen.CameraSelect} />
        <MainStack.Screen name={Config.ImageSelect} component={ConfigScreen.ImageSelect} />
        <MainStack.Screen name={Config.VideoItem} component={ConfigScreen.VideoItem} />
        <MainStack.Screen name={Config.Settings} component={ConfigScreen.AppSetting} 
          options={{
            headerShown: false,
            cardStyleInterpolator:
              CardStyleInterpolators.forRevealFromBottomAndroid,
          }}
        
        />
    </MainStack.Navigator>
    )
  }
}
const StackMoal=createStackNavigator();

// class ModalSceen extends Component{
//   render()
//   {
//     return(
//     <StackMoal.Navigator
//     headerMode={false}
//     screenOptions={{
//       cardStyle: { backgroundColor: 'transparent' },
//       gestureDirection: 'vertical',
//       transitionSpec: {
//           open: TransitionSpecs.TransitionIOSSpec,
//           close: TransitionSpecs.TransitionIOSSpec,
//       },
//       headerStyleInterpolator: HeaderStyleInterpolators.forFade,
//       cardStyleInterpolator: ({ current, next, layouts }) => {
//           return {
//               cardStyle: {
//                   opacity: current.progress.interpolate({
//                       inputRange: [0, 0.5, 0.9, 1],
//                       outputRange: [0, 0.25, 0.7, 1],
//                   }),
//                   transform: [
//                       {
//                           translateX: current.progress.interpolate({
//                               inputRange: [0, 1],
//                               outputRange: [layouts.screen.width, 1],
//                           }),
//                       },
//                       {
//                           scale: next
//                               ? next.progress.interpolate({
//                                   inputRange: [0, 1],
//                                   outputRange: [1, 0.9],
//                               })
//                               : 1,
//                       },
//                   ],
//               },
//               overlayStyle: {
//                   opacity: current.progress.interpolate({
//                       inputRange: [0, 1],
//                       outputRange: [0, 0.5],
//                   }),
//               },
//           };
//       },
//   }}
//     >
//         <StackMoal.Screen name={Config.ModalCartSuccess} component={ConfigScreen.ModalModalCartSuccess} />
  
//     </StackMoal.Navigator>
//     )
//   }
// }
// Root Stack
 const RootSrceen =() => { 
    return (
        <StackRoot.Navigator
        mode="modal"
        headerMode={false}
        initialRouteName={'Main'}
        screenOptions={{
          cardStyle: { backgroundColor: 'transparent' },
          gestureDirection: 'vertical-inverted',
          transitionSpec: {
              open: TransitionSpecs.TransitionIOSSpec,
              close: TransitionSpecs.TransitionIOSSpec,
          },
          cardStyleInterpolator: ({ current, next, layouts }) => {
              return {
                  cardStyle: {
                      opacity: current.progress.interpolate({
                          inputRange: [0, 0.5, 0.9, 1],
                          outputRange: [0, 0.25, 0.7, 1],
                      }),
                      transform: [
                          {
                              translateX: current.progress.interpolate({
                                  inputRange: [0, 1],
                                  outputRange: [layouts.screen.width, 1],
                              }),
                          },
                      ],
                  },
                  overlayStyle: {
                      opacity: current.progress.interpolate({
                          inputRange: [0, 1],
                          outputRange: [0, 0.5],
                      }),
                  },
              };
          },
      }}
    //   screenOptions={{
    //     headerShown: false,
    //     gestureDirection: 'vertical',
    //     cardStyle: { backgroundColor: 'transparent' },
    //     transitionSpec: {
    //               open: TransitionSpecs.TransitionIOSSpec,
    //               close: TransitionSpecs.TransitionIOSSpec,
    //           },
    //           // cardStyleInterpolator:
    //           //   CardStyleInterpolators.forRevealFromBottomAndroid,
    //     cardStyleInterpolator: ({ current: { progress } }) => ({
    //         cardStyle: {
    //             opacity: progress.interpolate({
    //                 inputRange: [0, 0.5, 0.9, 1],
    //                 outputRange: [0, 0.25, 0.7, 1],
    //             }),
    //         },
    //         overlayStyle: {
    //             opacity: progress.interpolate({
    //                 inputRange: [0, 1],
    //                 outputRange: [0, 0.2],
    //                 extrapolate: 'clamp',
    //             }),
    //         },

    //     }),
    //     ...TransitionPresets.ModalSlideFromBottomIOS

    // }}
        >
        <StackRoot.Screen name={'Main'} component={MainStackScreen}  /> 
        {/* <StackRoot.Screen name={Config.Sign} component={Config.Sign}  options={{ headerShown: false }} />  */}
        <StackRoot.Screen name={Config.ModalCartSuccess} component={ConfigScreen.ModalModalCartSuccess} />
        {/* <StackRoot.Screen name={'Modal'} component={ModalSceen}  options={{ headerShown: false }} /> 
         */}
        
      </StackRoot.Navigator>
    );
}


export default RootSrceen
