import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Config from '../../navigation/Config';
import RootSrceen from '../../navigation/RootSrceen';
import Home from '../home/Home';


import SplashScreen from '../home/SplashScreen';
// import RootSrceen from '../../navigation/RootSrceen';
// import Home from '../home/Home';


 class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading:true
    };
   
  }
  async componentDidMount()
  {
    const data = await this.performTimeConsumingTask();
  if (data !== null) {
    this.setState({ isLoading: false });

  }
}
  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        2000
      )
    );
  }
  

  render() {
    
    if(this.state.isLoading)
    {
      console.log('vao lan 1')
      return <SplashScreen></SplashScreen>
    }
    return (
 
   
      <RootSrceen></RootSrceen>
      
    );
  }
}
export default Loading