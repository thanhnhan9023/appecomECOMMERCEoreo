import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native';
import { Text, View,Linking } from 'react-native'
import Icon, { TypeIcon } from '../../config/Icon';

export default class test extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      }
    render() {
        return (
                <TouchableOpacity onPress={() => {
                let url = 'https://facebook.com/events/:eventId/';
                        Linking.openURL(url).then((data) => {
                        console.log('open whatsapp', data)
                        }).catch(() => {
                        console.log('App not installed')
                        }); 
                    }} >
                <Icon name={TypeIcon.AntDesign} name={'facebook-square'} style={{color: '#395894', fontSize: 30, marginRight: 10}}/>
                 </TouchableOpacity>
            
        )
    }
}
