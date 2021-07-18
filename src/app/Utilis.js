
// import AsyncStorage from '@react-native-community/async-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationActions } from '@react-navigation/compat';
import  axios from 'axios'

const URLAPI='https://shoporeo.herokuapp.com';

 const  CallApi=(endpoint,method='GET',body) =>
 {
     return axios({
            method:method,
            url:`${URLAPI}/${endpoint}`,
            data:body,
     }).catch(err =>{

        console.log(err);
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
    // let temp = await AsyncStorage.getItem(keys);
    // if (temp == null) return defaultValue;
    // try {
    //     let tempValue = JSON.parse(temp);
    //     return tempValue;
    // } catch (error) {
    //     return temp;
    // }
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
}

export default Utils;