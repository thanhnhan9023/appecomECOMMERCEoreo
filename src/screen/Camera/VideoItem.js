import React, { Component } from 'react'
import { Text, View,StyleSheet,TouchableNativeFeedback} from 'react-native'
import Video from 'react-native-video';
import Utils from '../../app/Utilis';
import FontSize from '../../config/FontSize';
import Icon, { TypeIcon } from '../../config/Icon';
import { colors } from '../../config/style';
import Slider from '@react-native-community/slider';
import Orientation from 'react-native-orientation';





export default class VideoItem extends Component {
    constructor(props) {
        super(props)
        this.videoPlayer = React.createRef(null),
        this.state = {
          currentTime:0,
          duration:0,
          paused:false,
          overlay:false,
          fullsceen:false,
        }
    }
    lastTap=null;
    _handleDoubleTap=(doubeTapCallback,singleCallback)=>{
        const now=Date.now();
        const Doube_press_delay=300;
        if(this.lastTap && (now-this.lastTap) <Doube_press_delay)
        {
            clearTimeout(this.timer);
            doubeTapCallback();
        }
        else{
            this.lastTap=now;
            this.timer=setTimeout(() =>{
                singleCallback();
            },Doube_press_delay);
        }
    }
    _onPaused=() =>
    {
        const {paused, }=this.state
        // this.setState({duration:0,currentTime:0})
        this.setState({paused:!paused})
    }
    _getTime=(t)=>
    {
        const disgt =n => n<10 ? `0${n}`:`${n}`;
        const sec =disgt(Math.floor(t%60));
        const min =disgt(Math.floor(t/60) % 60);
        const hr =disgt(Math.floor(t/3600) % 60);
        return hr+':'+min +':'+':'+sec;
    }
    _load=({duration}) =>
    {
        this.setState({duration})
    }
    _progress=({currentTime})=>
    {
        this.setState({currentTime})
    }
    _backward=()=>
    {
        const {currentTime }=this.state
        this.video.seek(currentTime-5);
        clearTimeout(this._overlayTimer);
        this._overlayTimer=setTimeout(()=> this.setState({overlay:false}),3000);
    }
    _onward=()=>
    {
        const {currentTime }=this.state
        this.video.seek(currentTime+5);
        clearTimeout(this._overlayTimer);
        this._overlayTimer=setTimeout(()=> this.setState({overlay:false}),3000);
    }
    _onsilde=slide=>
    {
        const {duration }=this.state
        this.video.seek(slide*duration);
        clearTimeout(this.overlayTimer);
        this._overlayTimer=setTimeout(()=> this.setState({overlay:false}),3000);
    }
    _valuevideo=() =>
    {
        const {currentTime,duration}=this.state
        let a=0;
        if(currentTime>0 && duration>0)
        {
         a=currentTime/duration
         return a;
        }
        return a=0;
    }
    _youtubeSeekLeft=() =>{
        const {currentTime }=this.state
        this._handleDoubleTap(() =>{
            this.video.seek(currentTime-5);
        },() =>{
            this.setState({overlay:true})
            this._overlayTimer=setTimeout(()=> this.setState({overlay:false}),3000);
        })
    }
    _youtubeSeekRight=() =>{
        const {currentTime }=this.state
        this._handleDoubleTap(() =>{
            this.video.seek(currentTime+5);
        },() =>{
            this.setState({overlay:true})
            this._overlayTimer=setTimeout(()=> this.setState({overlay:false}),3000);
        })
    }
    _fullscreen=() =>{
        const {fullsceen}=this.state;
        if(fullsceen)
        {
            Orientation.lockToPortrait();
        }
        else{
            Orientation.lockToLandscape();
        }
        this.setState({fullsceen:!fullsceen})
    }
    render() {
        const {
            duration,
            currentTime,
            paused,
            overlay,
            fullsceen,
        }=this.state
        const {uri}=this.props.route.params
       let a=this._valuevideo();
       Utils.nlog(overlay)
        Utils.nlog(parseInt(currentTime)/parseInt(duration));
        return (
            <View style={styles.container}>
                <View style={!fullsceen ? styles.video:styles.fullsceen}>
                    <Video
                        ref={ref => this.video =ref}
                        onProgress={this._progress}
                        onLoad={this._load}
                        paused={paused}
                        source={{uri:'https://www.w3schools.com/html/mov_bbb.mp4'}}
                        style={{...StyleSheet.absoluteFill}}
                        volume={10}
                        resizeMode={'cover'}
                        fullscreen={fullsceen}
                    >
                    </Video>
                    <View style={styles.overlay}>
                        {!overlay? 
                            <View style={{...styles.overlayset,backgroundColor:'#0006'}} > 
                                <Icon onPress={this._backward} style={styles.Icon} type={TypeIcon.FontAwesome}   name={'backward'}/>
                                <Icon 
                                style={styles.Icon}
                                type={TypeIcon.FontAwesome} 
                                name={!paused ?'play':'pause' } 
                                onPress={this._onPaused} 
                                /> 
                                <Icon  onPress={this._onward} style={styles.Icon}  type={TypeIcon.FontAwesome}  name={'forward'}/>
                                <View style={styles.silderCount}>
                                    <View style={styles.timer}>
                                        <Text style={{color:colors.white}}>{this._getTime(currentTime)}</Text>
                                        <Text style={{color:colors.white}}>{this._getTime(duration)}</Text>
                                        <Icon onPress={this._fullscreen} type={TypeIcon.FontAwesome5} name={!fullsceen? 'expand':'compress'} size={22}/>
                                    </View>
                                    <Slider
                                    maximumTrackTintColor={colors.white}
                                    minimumTrackTintColor={colors.white}
                                    value={a}
                                    thumbTintColor={colors.white}
                                    onValueChange={this._onsilde}
                                    />
                                </View>
                            </View>:
                            <View style={styles.overlayset}>
                                    <TouchableNativeFeedback onPress={this._youtubeSeekLeft}
                                    >
                                        <View style={{flex:1}}></View>
                                    </TouchableNativeFeedback>
                                    <TouchableNativeFeedback onPress={this._youtubeSeekRight}
                                    >
                                        <View style={{flex:1}}></View>
                                    </TouchableNativeFeedback>
                            </View>
                        }
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:colors.black,
      paddingVertical:FontSize.scale(40),
    },
    overlay:{
        ...StyleSheet.absoluteFillObject
    },
    overlayset:{
        flex:1,
        flexDirection:'row'
    },
    mediaPlayer:{
        margin:FontSize.scale(10)   ,
        height:FontSize.scale(400),
    },
    Icon:{
        textAlign:'center',
        textAlignVertical:'center',
        flex:1,
        fontSize:25,
        color:colors.white,
    },
    silderCount:{
        position:'absolute',
        left:0,
        right:0,
        bottom:0,
    },
    timer:{
        width:FontSize.Width(100),
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:FontSize.scale(5),
    },
    video:{
        height:FontSize.scale(400),
    },
    fullsceen:{
        backgroundColor:'black',
        ...StyleSheet.absoluteFill,
    }
  });