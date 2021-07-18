import Categories from "../component/Categories/Categories"
import DetalisBlog from "../component/Home/DetalisBlog"
import Home from "../screen/Home/Home"
import SplashScreen from "../screen/Home/SplashScreen"
import Loading from "../screen/Loading/Loading"
import login from "../screen/Login/Login"
import Registration from "../screen/Login/Registration"
import Sign from "../screen/Login/Sign"
import Messbox from "../screen/MessBox/Messbox"
import DetalisProduct from "../screen/Shop/DetalisProduct"
import ProductScreen from "../screen/Shop/ProductScreen"
import Shop from "../screen/Shop/Shop"
import WishListScreen from "../screen/WishList/WishListScreen"
import CartScreen from "../screen/Cart/CartScreen"
import Modal from "./Modal/Modal"
import Camera from "../screen/Camera/Camera"
import CameraSelect from "../screen/Camera/CameraSelect"
import ImageSelect from "../screen/Camera/ImageSelect"
import VideoItem from "../screen/Camera/VideoItem"
import AppSetting from "../screen/Login/AppSetting"
import DetalisBlogAll  from "../screen/Blog/DetalisBlog"
import LoginSuccess from "../screen/Login/LoginSuccess"


const Screen={
    Splashscreen:SplashScreen,
    Loading:Loading,
    Home:Home,
    Categories:Categories,
    Shop:Shop,
    login:login,
    WishListScreen:WishListScreen,
    Modal:Modal,
    Sign:Sign,  
    Messbox:Messbox,
    Registration:Registration,
    ProductScreen:ProductScreen,
    DetalisProduct:DetalisProduct,
    DetalisBlog:DetalisBlog,
    CartScreen:CartScreen,
    Camera:Camera,
    CameraSelect:CameraSelect,
    ImageSelect:ImageSelect,
    VideoItem:VideoItem,
    AppSetting:AppSetting,
    DetalisBlogAll:DetalisBlogAll,
    LoginSuccess:LoginSuccess,
}
export default Screen