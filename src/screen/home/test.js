import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {connect} from 'react-redux'
import { Add } from '../../Redux/Actions/Test';



 class Test extends Component {
     
  constructor(props) {
    super(props);
    this.state = {
    };
  }
_move =() =>{
    // this.props.navigation.navigate('Home');
    this.props.add(1)

}
  render() {
   
    return (
      <View>
        <Text>
          {this.props.data}
        </Text>
            <TouchableOpacity
            onPress={() =>{
               this._move()
            }}
            > 
               
            </TouchableOpacity>
            <Text>{'1 2 3 4 5'}</Text>
      </View>
    );
  }
}


const mapStateToProps =(state) =>{
console.log(state)
  return{
    data:state.Caculator.result
  }
}

const mapDispatchToProps =(dispatch) =>{
  return {
    add:(key) => dispatch(Add(key))
  }
  
}
export default connect(mapStateToProps,mapDispatchToProps)(Test);
