import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList,Image,StyleSheet} from 'react-native';
import FontSize from '../../config/FontSize';
import { colors } from '../../config/style';

 class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
_renderItem({item,index})
 {
  const {styleRenderItem={}}=this.props
  return(
        <TouchableOpacity  key={index} style={{...styles.commonFlaslit,...styleRenderItem,}}>
                  
                  
                  <Image  source={item.img}></Image>
                  <Text>{item.name}</Text>
        </TouchableOpacity>
  )
}



  render() {
    const {txtLeft=null,txtRight=null,data=null}=this.props
    return (
      <View style={{borderBottomWidth:0.7,borderBottomColor:colors.grayLight,paddingVertical:FontSize.scale(12),paddingHorizontal:FontSize.scale(8)}}>
        
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <Text>{txtLeft}</Text>
          <TouchableOpacity>

          <Text>  
          {txtRight}
            
            </Text>   
          </TouchableOpacity>
          </View>
          <FlatList
          data={data}
          horizontal
          renderItem={this._renderItem}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item=>item.name}
          >

          </FlatList>
        
        
        
      </View>
    );
  }
}
export default Categories

const  styles = StyleSheet.create({

  commonFlaslit:{
 
      
      width:FontSize.scale(100),
      height:FontSize.scale(40),
      marginLeft:FontSize.scale(20),
      
  },
  commonText:{
      fontSize:FontSize.reText(18),
      color:colors.black,    
      fontWeight:'bold',
      textAlign:'center'
      
  }
})