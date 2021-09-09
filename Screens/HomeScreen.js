import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    ImageBackground,
    Image
    } from "react-native";
    

export default class HomeScreen extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <SafeAreaView style = {styles.SafeAreaViewstyle}/>
                <ImageBackground source = {require('../assets/stars.gif')} style = {styles.backgroundImage }>
                <View>
                    <Text style = {styles.text}> Stellar </Text>
                </View>
                <TouchableOpacity style  = {styles.button} onPress={() => this.props.navigation.navigate("DailyPic")}>
                    <Text style = {styles.buttonText}>
                        Tonight Sky
                    </Text>
                    <Image source = {require('../assets/daily_pictures.png')} style = {styles.iconImage}></Image>
                </TouchableOpacity >
                </ImageBackground>
            </View>
        )}}

        const styles = StyleSheet.create({
            SafeAreaViewstyle:{
                marginTop:Platform.OS === "android"?StatusBar.currentHeight:0
            },
            container: {
                flex: 1,
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent:'center'
              },
            text:{
                flex:0.15,
                fontSize:40,
                fontWeight:'bold',
                color:'white',
                justifyContent:'center',
                alignItems:'center'
            },
            textView:{
                flex :0.15,
                justifyContent:'center',
                alignItems:'center'
            },
            button:{
                flex:0.25,
                marginLeft:50,
                marginRight:50,
                marginTop:50,
                borderRadius:30,
                backgroundColor:'white',
                justifyContent:'center'
        
            },
            buttonText:{
                fontSize:35,
                fontWeight:'bold',
                color:'black',
                marginTop:75,
                paddingLeft:30
            },
            backgroundImage:{
                flex:1,
                resizeMode:'cover'
            },
            getmore:{
                paddingLeft:30,
                color:'red',
                fontSize:15
            },
            digits:{
                position:'absolute',
                color:"rgba(183,183,183,0.5)",
                fontSize:150,
                right:20,
                bottom:-15,
                zIndex:-1
        
               },
            iconImage:{
                position:'absolute',
                height:80,
                width:200,
                resizeMode:'contain',
                right:20,
                top:-80
               }
        
        
        })