import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import Utils from '../../app/Utilis';
import FontSize from '../../config/FontSize';
import { colors } from '../../config/style';
import Actioncaculator from '../../Redux/Actions/calulatorAction';

 class CongTruNhanChia extends Component {
  constructor(props) {
    super(props);
    this.state = {
        numberA:0,
        numberB:0,
    };
  }
_thucthi=() =>{
    const {numberA,numberB}=this.state
    Utils.nlog('this props:',this.props)
const data={
    a:Number(numberA),
    b:Number(numberB)
}

    this.props.ChiaHaiSo(data)
    const {CaculatorReducer}=this.props
    Utils.nlog('ket qua:',CaculatorReducer.result)
}
  render() {
      Utils.nlog(this.props)
      const {numberA,numberB}=this.state
      const {CaculatorReducer}=this.props
    return (
      <View style={{justifyContent:'center',alignItems:'center'}}>
        
           <View
           style={{height:FontSize.scale(200)}}
           />
            <Text>{`${CaculatorReducer.result}`}</Text>
       
        <View style={{width:FontSize.scale(200),paddingHorizontal:FontSize.scale(10),marginBottom:FontSize.scale(10)}}>
                    <TextInput 
                     style={{borderWidth:0.7,borderColor:colors.grayLight}}
                     onChangeText={(text) => this.setState({ numberA: text })}
                     placeholder={'Nhập số A'}
                    />
               </View>
               <View style={{width:FontSize.scale(200),paddingHorizontal:FontSize.scale(10)}}>
                    <TextInput 
                     style={{borderWidth:0.7,borderColor:colors.grayLight}}
                     onChangeText={(text) => this.setState({ numberB: text })}
                     placeholder={'Nhập số A'}
                    />
               </View>
       
        <View
        
        style={{height:FontSize.scale(30)}}
        />
        <TouchableOpacity
        style={{backgroundColor:colors.orange,width:FontSize.scale(40),height:FontSize.scale(40)}}
        onPress={() =>this._thucthi()}
        >
            
                <Text style={{textAlign:'center'}}>{'Cộng'}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
 
    return {
      
      CaculatorReducer:state.Caculator
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    
        CongHaiSo: (data) => dispatch(Actioncaculator.actionCong(data)),
        ChiaHaiSo: (data) => dispatch(Actioncaculator.actionChia(data)),
     
       
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CongTruNhanChia)