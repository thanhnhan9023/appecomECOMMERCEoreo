
// import AsyncStorage from '@react-native-community/async-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationActions } from '@react-navigation/compat';
import  axios from 'axios'
import { showMessage } from "react-native-flash-message";
import { colors } from '../config/style';
const URLAPI='https://apioreo.herokuapp.com';

 const  CallApi=(endpoint,method='GET',body=null) =>
 {
     return axios({
            method:method,
            url:`${URLAPI}/${endpoint}`,
            data:body,
     }).catch(

     )
 }
 const showMessages=(type,data) =>{
    showMessage({
        message: data,
        type: type,
        backgroundColor:colors.orangeyRed
        })
 }

 
let _navigator;
function setTopLevelNavigator(navigatorRef) {
    _navigator = navigatorRef;
}
function getPrams(NameParams)
{
    try {
        _navigator.dispatch(
          JSON.stringify(NavigationActions.getPrams(NameParams,''))
        )
    } catch (error) {
        
    }
   
}
function navigate(routeName, params = {}) {
    // alert(JSON.stringify(params));
    try {
        _navigator.dispatch(
            NavigationActions.navigate({
                routeName,
                params,
            }),
        );
    } catch (error) {
        // alert('lỗi gócreen');
    }
}
function push(routeName, params = {}) {
    // alert(JSON.stringify(params));
    try {
        _navigator.dispatch(
            StackActions.push(
                routeName,
                params,
            ),
        );
    } catch (error) {
        // alert('lỗi gócreen');
    }
}
function replace(routeName, params = {}) {
    try {
        _navigator.dispatch(
            StackActions.replace(
                routeName,
                params,
            ),
        );
    } catch (error) {
        // alert('lỗi gócreen');
    }
    // _navigator.dispatch(StackActions.replace(routeName, params));
}

function goBack() {
    try {
        _navigator.dispatch(NavigationActions.back({ type: 'GO_BACK' }));
    } catch (error) { }
}

function log(...res) {
    console.log(...res);
}
const filter = (arr = [], key = 'id', vals = "tam") => {
    let kq = arr.filter((item, index) => item[key] == vals)
    return kq;
}

async function ngetStore(keys, defaultValue = null) {
    try {
        const jsonValue = await AsyncStorage.getItem(keys)
         let a=jsonValue != null ? JSON.parse(jsonValue) : null;
         return a
      } catch(e) {
        Utils.nlog(e)
      }
}
async function nsetStore(keys, value) {
    // if (typeof value !== 'string') value = JSON.stringify(value);
    // await AsyncStorage.setItem(keys, value);
    try {
        if (typeof value !== 'string') value = JSON.stringify(value);
        await AsyncStorage.setItem(keys, value)
      } catch (e) {
        // saving error
        Utils.nlog(e)
      }
}
async  function removeItemValue(key) {
    try {
        await AsyncStorage.removeItem(key);
        return true;
    }
    catch(exception) {
        return false;
    }
}


const Utils = {
    nlog: log,
    filter: filter,
    ngetStore,
    nsetStore,
    setTopLevelNavigator,
    navigate,
    push,
    replace,
    goBack,
    getPrams,
    CallApi,
    removeItemValue,
    showMessages,
}

export default Utils;