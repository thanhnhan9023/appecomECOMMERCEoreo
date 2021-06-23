import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text } from 'react-native';
import FontSize from '../../config/FontSize';
import { colors } from '../../config/style';

import { connect } from 'react-redux'
import { addNewTask } from '../../Redux/Actions';
import taskReducer from '../../Redux/Reducers/TaskReducer';


 class CongTru extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
onPressCong=() =>{
    this.props.actionAdd()
}
  render() {
    return (
      <View style={{paddingVertical:FontSize.Height(50),justifyContent:'center',alignItems:'center'}}>

          <Text>{this.props.taskReducer}</Text>
            <TouchableOpacity  onPress={this.onPressCong} style={{justifyContent:'center',width:FontSize.scale(200),height:FontSize.scale(40),backgroundColor:colors.orange}}>
                <Text style={{textAlign:'center'}} >{'Cong'}</Text>
            </TouchableOpacity>
            <View style={{height:FontSize.scale(20)}}>

            </View>
            <TouchableOpacity style={{justifyContent:'center',width:FontSize.scale(200),height:FontSize.scale(40),backgroundColor:colors.orange}}>
                <Text style={{textAlign:'center'}}> {'Tru'}</Text>
            </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps=state =>{
    return{
        taskReducer:state.TaskReducer.dataNew
    }
}

const mapDispatchToProps =(dispatch) =>{
    return{
        actionAdd:(data)=>dispatch(addNewTask(data))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CongTru)