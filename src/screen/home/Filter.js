import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';
import Utils from '../../app/Utilis';
import FontSize from '../../config/FontSize';
import Icon, { TypeIcon } from '../../config/Icon';
import { colors } from '../../config/style';
import Dropdown from '../../container/Dropdown';
import HeaderView from '../../container/HeaderView';
import HeaderView1 from '../../container/HeaderView1';


const dataquestion=[
  {
    id:1,
    name:'Service',
    data:[
      {
        id:'1',
        name:'cau hoi 1',
        answer: {
          id:1,
          name:'cau hoi  1'
        }, 
          
        options:[
          {
            id:1,
            name:'cau tra loi 1'
          },
          {
            id:2,
            name:'cau tra loi 2'
          },
          {
            id:3,
            name:'cau tra loi 3'
          },
        ]
      }
    ]
    
  },
  {
    id:2,
    name:'Presonaitly',
    data:[
      {
        id:'2',
        name:'cau hoi 2',
        answer: {
          id:1,
          name:'cau hoi 2'
        }, 
          
        options:[
          {
            id:1,
            name:'cau tra loi 1'
          },
          {
            id:2,
            name:'cau tra loi 2'
          },
          {
            id:3,
            name:'cau tra loi 3'
          },
        ]
      }
    ]
  },
  {
    id:3,
    name:'Culture',
    data:[
      {
        id:'3',
        name:'cau hoi 3',
        answer: {
          id:1,
          name:'cau hoi 3'
        }, 
          
        options:[
          {
            id:1,
            name:'cau tra loi 1'
          },
          {
            id:2,
            name:'cau tra loi 2'
          },
          {
            id:3,
            name:'cau tra loi 3'
          },
        ]
      }
    ]
  },
 
  
]
export default class Filter extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      data:dataquestion
        
    };
    this.refdrop=React.createRef(null);
    this.listRef=[];
  }
  
  componentDidMount()
  {

  }
  componentDidUpdate()
    {

    }
 updateItem=(id, itemAttributes) => {
 
} 
_onClear =() =>{
  for (let index = 0; index < this.listRef.length; index++) {
    const element = this.listRef[index];
    if(element._ClearCheckbox)
    {
      element._ClearCheckbox();
     
    }
  }
}



 


  render() {
    const {data}=this.state
    return (
            <View style={{flex:1}}>
                <HeaderView1
                styleViewMain={{}}
                onPressClear={() =>this._onClear()}
                txtLeft={'Clear'}
                styleTxtLeft={{fontWeight:'bold',fontSize:FontSize.reText(22)}}
                txtRight={'Done'}
                styleTxtRight={{fontWeight:'bold',fontSize:FontSize.reText(22)}}
                
                >
                </HeaderView1>
                <View style={{flexDirection:'row',justifyContent:'center'}}>
                  <Text style={{fontWeight:'bold',fontSize:FontSize.reText(28)}}>
                    {'Filters'}
                  </Text>

                </View>
                {data.map((item,index)=>{
                  return(                  
                   <Dropdown
                  //  ref={this.refdrop}
                   ref={ref=>this.listRef[index]=ref}
                    key={index}
                   txtLeft={item.name}
                   dataquestion={item.data}
   
                   ></Dropdown> 
                  )

                })}
               

            </View>
    );
  }
}
