import React, { Component } from 'react'
import { Text, View,TouchableOpacity,Switch } from 'react-native'
import Utils from '../../app/Utilis';
import FontSize from '../../config/FontSize';
import Icon, { TypeIcon } from '../../config/Icon';
import { colors } from '../../config/style';
import HeadViewCustom from '../../container/HeadViewCustom';
import NumberCart from '../../container/NumberCart';
import ThemeProvider2,{Context} from '../../config/ThemeProvider2';
import { LightTheme, DarkTheme } from '../../config/Themes'
import i18n from '../../config/i18n';
import { RFValue } from 'react-native-responsive-fontsize';

 class  Setting extends Component {
     constructor(props) {
         super(props)
         this.state = {
              isEnabled:false,
         }
     }
    render() 
{
    const {isEnabled}=this.state
    const {txtCenter='',data=[],onpress=() =>{},isSwtich=false,indexSwtich=''}=this.props
        return (
            <Context.Consumer> 
                {({ theme, updateTheme }) => (
            <View style={{backgroundColor:theme.colors.background}}>
                <HeadViewCustom
                            ContainerStyle={{paddingHorizontal:FontSize.scale(15),paddingVertical:FontSize.scale(10)}}
                            ViewLeft={
                                <Icon type={TypeIcon.Entypo} name='chevron-left' size={FontSize.scale(22)} onPress={() => Utils.goBack()} 
                                color={theme.colors.backgroundicon}
                                />
                            }
                            ViewCenter={
                                <Text style={{...FontSize.TextStyles.optionBold,fontSize:RFValue(19,FontSize.Height(100)),color:theme.colors.text}}>{txtCenter}</Text>
                            }
                            ViewRight={
                                <View style={{flexDirection:'row'}}>
                                    <NumberCart 
                                         number={0}
                                    />
                                    <Icon type={TypeIcon.AntDesign} name='down-square-o' size={FontSize.scale(22)}/>
                                </View>
                            }
                    />
                {data.map((item,index)=>
                {
                    const {TextRightItem}=this.props;
                    Utils.nlog(item.onpress)
                    return(
                        <TouchableOpacity onPress={item.onpress} key={index} 
                        style={{borderBottomWidth:0.8,
                        borderBottomColor:colors.grayLight,
                        flexDirection:'row',
                        padding:FontSize.scale(12),
                        justifyContent:'space-between'}}>
                            <Text style={{...FontSize.TextStyles.semiBold,fontSize:RFValue(18,FontSize.Height(100)),color:theme.colors.text}}>{item.name}</Text>
                            <View style={{flexDirection:'row'}}>
                                {item.txtright? (<Text style={{color:theme.colors.text}}>{item.txtright}</Text>):null}
                                <View style={{width:FontSize.scale(10)}} />
                                <Icon type={item.typeicon} name={item.nameicon} size={FontSize.scale(18)}/>
                                <TouchableOpacity>
                                {index==indexSwtich ?(
                                        <Switch
                                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                                        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                                        ios_backgroundColor="#3e3e3e"
                                        onValueChange={() =>{
                                            this.setState({isEnabled:!isEnabled})
                                            updateTheme(theme.dark ? LightTheme : DarkTheme)
                                        }}
                                        value={isEnabled}
                                        />
                                 ):null
                                 }
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )
                })}

                {/* <TouchableOpacity onPress={() =>{
                        if(i18n.language=='vi')
                        {
                            i18n.changeLanguage('en');
                        }
                        else{
                            i18n.changeLanguage('vi');
                        }
                }}>
                    <Text>{'doi ngon ngu'}</Text>
                      </TouchableOpacity> */}
            </View>
                )}
            </Context.Consumer>
        )
    }
}

export default Setting