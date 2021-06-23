
import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import Utils from './src/app/Utilis';
import RootSrceen from './src/navigation/RootSrceen';
import OneSignal from 'react-native-onesignal'; 
import Config from './src/navigation/Config';
import Test from './src/screen/Test/Test';
import Setting from './src/component/Home/Setting';
import Home from './src/screen/home/Home';
import ThemeProvider2 from './src/config/ThemeProvider2';
import { I18nextProvider } from 'react-i18next';
import i18n from './src/config/i18n';
import Carousel from './src/component/Home/Carousel';
const link={
  prefixes: ['recipes://'],
  config:{
    screen:{
      app1:Config.Shop,
    }
  }
}

const App=() => {
  
  // async componentDidMount() {  // cai   O N E S I G N A L 
  //   /* O N E S I G N A L   S E T U P */
  //   OneSignal.setLogLevel(6, 0);
  //   OneSignal.setAppId("ff30eb93-7e72-48e6-b35c-af775d722737");
          
  //   OneSignal.setNotificationWillShowInForegroundHandler(notificationReceivedEvent => { // sự kiện kích hoạt khi  lần đầu mở app
  //     console.log("OneSignal: notification will show in foreground:", notificationReceivedEvent);
  //     // let notification = notificationReceivedEvent.getNotification();
  //     // console.log("notification: ", notification.body);
  //     // const data = notification.additionalData
  //     // console.log("additionalData: ", data);
  //     // const button1 = {
  //     //    text: "Cancel",
  //     //    onPress: () => { notificationReceivedEvent.complete(); },
  //     //    style: "cancel"
  //     // };
  //     // const button2 = { text: "Complete", onPress: () => { notificationReceivedEvent.complete(notification); }};
  //     // alert("Complete notification?", "Test", [ button1, button2], { cancelable: true });
  //    });
  //    OneSignal.setNotificationOpenedHandler(notification => { // sự kiện kích hoạt khi mở tin nhắn ở thanh trạng trái
  //      console.log("OneSignal: notification opened:", notification.notification.body);
  //    });
  //   const deviceState = await OneSignal.getDeviceState();
  //    console.log(deviceState)
  //   this.setState({
  //       isSubscribed : deviceState.isSubscribed
  //   });
  // }
  // render() {
   ;
    // const MyTheme = {
    //   ...DefaultTheme,
    //   colors: {
    //     ...DefaultTheme.colors,
    //     primary: 'rgb(255, 45, 85)',
    //     text: colors.redStar,
    //   },
    // };
    return (
      <I18nextProvider i18n={i18n}>
        <ThemeProvider2>
          <NavigationContainer   linking={link} ref={ ref => Utils.setTopLevelNavigator(ref)}>
            <RootSrceen></RootSrceen>
            {/* <Carousel/> */}
        </NavigationContainer>
        </ThemeProvider2>
       </I18nextProvider>
      // <Carousel/>
    );
  // }
}
 export default App;
 