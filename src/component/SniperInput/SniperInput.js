import React, { Component } from 'react';
import { TouchableOpacity,StyleSheet } from 'react-native';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import Utils from '../../app/Utilis';
import FontSize from '../../config/FontSize';
import Icon, { TypeIcon } from '../../config/Icon';
import { colors } from '../../config/style';
import CartAction from '../../Redux/ActionsCart/CartAction';

 class SniperInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
        value:0,
    };
  }
//   componentWillReceiveProps()
//   {
//     const {valuenew=0}=this.props
//     this.setState({value:valuenew})
//   }
  
//   componentDidMount()
//   {
    
//     this.setState({value:valuenew})
//   }
 
//   _MinusNumber=(value) =>{
  
//     if(value<=0)
//     {
//         return;
//     }
//     else 
//     {
//       return value-1;
//     }
//   }
//   _PlusNumber=(max,value) =>{
 
//     if(value==max)
//     {
//         return;
//     }
//     else 
//     {
//         return value+1;
//     }
//   }
    
//   _UpdateValue=(valuenew)=>{
//       this.setState({value:valuenew})
//   }

  render() {
      const {StyleMinus={},valuenew,id}=this.props
      const {value}=this.state
    Utils.nlog('snip_________',this.props.data)
    return (
     
        <View>
            <View style={{...styles.CommonContainer}}>       
                    <TouchableOpacity   onPress={()=>{this.props.MinusNumber(id)}}  style={{...styles.CommonSytleMinus,...StyleMinus}}>
                    <           Icon type={TypeIcon.AntDesign} name={'minus'} size={18}/>
                    </TouchableOpacity >
                    <View style={{...styles.CommonCenter}}>
                        <Text>{ valuenew}</Text>
                    </View>
                   
                    <TouchableOpacity  onPress={() =>{this.props.PlusNumber(id)}} style={{...styles.CommonSytlePlus,...StyleMinus}}>
                                <Icon type={TypeIcon.Ionicons} name={'add-sharp'} size={18}/>
                            
                    </TouchableOpacity>             
            </View>
            </View>
     
    );
  }
}

const mapStateToProps =(state) =>{


    return{
    

      data:state.CartReducer.ListProduct
    
    }
  }
  const mapDispatchToProps =(dispatch) =>{
    
    return {
      PlusNumber:(id) => dispatch(CartAction.ActionPlusNumber(id)),
      MinusNumber:(id) => dispatch(CartAction.ActionMinusNumber(id)),
      RemoveCart:(id) => dispatch(CartAction.ACTION_DeleteCart(id)),

    }
    
  }
 
export default connect(mapStateToProps,mapDispatchToProps)(SniperInput)
const styles = StyleSheet.create({
    CommonContainer:{
        flexDirection:'row',
        height:FontSize.scale(30),
        width:FontSize.scale(90),
        paddingHorizontal:FontSize.scale(2),
        backgroundColor:colors.colorGrayBgr,
        borderRadius:FontSize.scale(3)
       
    },

    CommonCenter:{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            
    },
    CommonSytleMinus:{
        flex:1,
        justifyContent:'center',
        paddingHorizontal:FontSize.scale(2),
       
        
    
    },
    CommonSytlePlus:{
        flex:1,
        justifyContent:'center',
        paddingLeft:FontSize.scale(10),
     
        
    }

})
