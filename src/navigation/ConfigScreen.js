import Categories from "../component/Categories/Categories"
import DetalisBlog from "../component/Home/DetalisBlog"
import Home from "../screen/home/Home"
import SplashScreen from "../screen/home/SplashScreen"
import Loading from "../screen/loading/Loading"
import login from "../screen/login/Login"
import Registration from "../screen/login/Registration"
import Sign from "../screen/login/Sign"
import Messbox from "../screen/MessBox/Messbox"
import DetalisProduct from "../screen/shop/DetalisProduct"
import ProductScreen from "../screen/shop/ProductScreen"
import Shop from "../screen/shop/Shop"
import WishListScreen from "../screen/WishList/WishListScreen"
import CartScreen from "../screen/Cart/CartScreen"
import Modal from "./Modal/Modal"
import Camera from "../screen/Camera/Camera"
import CameraSelect from "../screen/Camera/CameraSelect"
import ImageSelect from "../screen/Camera/ImageSelect"
import VideoItem from "../screen/Camera/VideoItem"
import AppSetting from "../screen/login/AppSetting"
import DetalisBlogAll  from "../screen/Blog/DetalisBlog"
import LoginSuccess from "../screen/login/LoginSuccess"


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