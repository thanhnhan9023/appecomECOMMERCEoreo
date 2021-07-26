import React, { Component } from 'react'
import { Dimensions } from 'react-native';
import { ImageBackground } from 'react-native';
import { Text, View } from 'react-native'
import { FlatGrid } from 'react-native-super-grid';
import { connect } from 'react-redux';
import FontSize from '../../config/FontSize';
import ProductACtion from '../../Redux/Actions/ActionProduct/ProductAction'

const {width,height}=Dimensions.get('window')
 class ProductTest extends Component {
     componentDidMount=() =>{
         this.props.FetchProduct();
     }
    render() {
        console.log(this.props)
        console.log(this.props.dataProduct)
        return (
            <View style={{flex:1}}>
                <FlatGrid
                itemDimension={width/3}
                style={{  marginTop: 10,
                    flex: 1,}}
                data={this.props.dataProduct.Listsp}
                spacing={10}
                renderItem={({ item }) => (
                    <View style={{ 
                    borderRadius: 5,
                    }}>
                        <ImageBackground
                        style={{  justifyContent: 'flex-end',
                        borderRadius: 5,
                        height: 150,}}
                        source={{uri:item.imgproduct[0].img}}   
                        />
                    </View>
                )}
                />
            </View>
        )
    }
}
const mapStateToProps =(state) =>{
    return{
      dataProduct:state.ProductReducer,
    }
  }
const mapDispatchToProps =(dispatch) =>{
    return {
      FetchProduct:() =>dispatch(ProductACtion.FecthProduct()),
    }
  }
export default  connect(mapStateToProps,mapDispatchToProps)(ProductTest)

// import React from 'react';
// import { StyleSheet, View, Text } from 'react-native';
// import { FlatGrid } from 'react-native-super-grid';

// export default function ProductTest() {
//     const [items, setItems] = React.useState([
//       { name: 'TURQUOISE', code: '#1abc9c' },
//       { name: 'EMERALD', code: '#2ecc71' },
//       { name: 'PETER RIVER', code: '#3498db' },
//       { name: 'AMETHYST', code: '#9b59b6' },
//       { name: 'WET ASPHALT', code: '#34495e' },
//       { name: 'GREEN SEA', code: '#16a085' },
//       { name: 'NEPHRITIS', code: '#27ae60' },
//       { name: 'BELIZE HOLE', code: '#2980b9' },
//       { name: 'WISTERIA', code: '#8e44ad' },
//       { name: 'MIDNIGHT BLUE', code: '#2c3e50' },
//       { name: 'SUN FLOWER', code: '#f1c40f' },
//       { name: 'CARROT', code: '#e67e22' },
//       { name: 'ALIZARIN', code: '#e74c3c' },
//       { name: 'CLOUDS', code: '#ecf0f1' },
//       { name: 'CONCRETE', code: '#95a5a6' },
//       { name: 'ORANGE', code: '#f39c12' },
//       { name: 'PUMPKIN', code: '#d35400' },
//       { name: 'POMEGRANATE', code: '#c0392b' },
//       { name: 'SILVER', code: '#bdc3c7' },
//       { name: 'ASBESTOS', code: '#7f8c8d' },
//     ]);
  
//     return (
//       <FlatGrid
//         itemDimension={130}
//         data={items}
//         style={styles.gridView}
//         // staticDimension={300}
//         // fixed
//         spacing={10}
//         renderItem={({ item }) => (
//           <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
//             <Text style={styles.itemName}>{item.name}</Text>
//             <Text style={styles.itemCode}>{item.code}</Text>
//           </View>
//         )}
//       />
//     );
//   }
  
//   const styles = StyleSheet.create({
//     gridView: {
//       marginTop: 10,
//       flex: 1,
//     },
//     itemContainer: {
//       justifyContent: 'flex-end',
//       borderRadius: 5,
//       padding: 10,
//       height: 100,
//     },
//     itemName: {
//       fontSize: 16,
//       color: '#fff',
//       fontWeight: '600',
//     },
//     itemCode: {
//       fontWeight: '600',
//       fontSize: 12,
//       color: '#fff',
//     },
//   });