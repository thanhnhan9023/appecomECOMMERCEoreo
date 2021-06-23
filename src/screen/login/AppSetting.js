import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Setting from '../../component/Home/Setting'
import i18n from '../../config/i18n'
import { TypeIcon } from '../../config/Icon'
import { Context } from '../../config/ThemeProvider2'

const datasetings=[
       {
           name:'Language',
           typeicon:TypeIcon.AntDesign,
           nameicon:'right',
           txtright:'EN',
           onpress:() =>{
               console.log('vao chuyen doi')
               i18n.changeLanguage('en');
            }
       },
       {
           name:'Currency',
           typeicon:TypeIcon.AntDesign,
           nameicon:'right',
           txtright:'USD',
           onpress:() =>{}
       },
       {
           name:'Config Advanced',
           typeicon:TypeIcon.AntDesign,
           nameicon:'right',
           txtright:'',
           onpress:() =>{}
       },
       {
           name:'Dark Theme',
           typeicon:'',
           nameicon:'',
           txtright:'',
           onpress:() =>{}
       },
]
export default class AppSetting extends Component {
    render() {
        return (
            <Context.Consumer>
                {({ theme, updateTheme }) => (
               <View style={{flex:1,backgroundColor:theme.colors.background}}>
                    <Setting
                        data={datasetings}
                        txtCenter={'App Settings'}
                        indexSwtich={'3'}
                        
                    />
                </View>
                )}
            </Context.Consumer>
        )
    }
}
const styles = StyleSheet.create({})
