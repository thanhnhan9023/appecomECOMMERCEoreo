import React, { Component } from 'react'
import { TextInput, View,StyleSheet} from 'react-native'
import FontSize from '../config/FontSize';
import Icon, { TypeIcon } from '../config/Icon';
import { colors } from '../config/style';
import { Context } from '../config/ThemeProvider2';


 class SreachView extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        const { iconLeft = null ,txtNameIcon=null, sizeicon=20 , txtCenter = null, iconRight = null } = this.props
             return (
                 <Context.Consumer>
                      {({ theme, updateTheme }) => (
                    <View style={{...styles.container,backgroundColor:theme.colors.backgroundSreach}}>
                        <Icon type={iconLeft} name={txtNameIcon} size={sizeicon} color={theme.colors.text} ></Icon>
                        <View style={{width:FontSize.scale(7)}}/>
                        <TextInput style={{flex:1,color:theme.colors.text}}
                        placeholder="Sreach Product"
                        placeholderTextColor={theme.colors.text}

                            />  
                    </View>
                      )}
             </Context.Consumer>
        )
    }
}

export default SreachView

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        paddingHorizontal:FontSize.scale(10),
        borderRadius:3,alignItems:'center',
    }
})
