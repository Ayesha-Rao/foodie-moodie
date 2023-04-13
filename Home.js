import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Alert, TextInput, Button,Image,ImageBackground } from 'react-native';

export default function MyHome({navigation}){
 return(
<View style={{flex:1}}> 
    <ImageBackground style={{flex:1,height:1000,width:500,top:0,left:0}}
    resizeMode='cover'
     source={require('./assets/image/background.jpeg')}>
        <View>
       <Text style={{padding:5,margin:60,marginLeft:70,borderWidth:6,backgroundColor:'darksalmon',borderColor:'black',color:'black',fontSize:20,position:'absolute',fontWeight:'bold',textDecorationLine:'line-through',
    textDecorationStyle:'dotted',textShadowRadius:100,textDecorationColor:'black',textShadowColor:'white', marginTop:'30%',
       textTransform:'uppercase', marginLeft:10, fontWeight:'bold',textAlign:'center',justifyContent:'center'
    }}>Welcome to FOODIE MOODIE</Text>
         </View>
         <View>
         <TouchableOpacity style={styles.Login}onPress={() => navigation.navigate('Login')} >
        <View style={styles.Loginbutton}><Text style={styles.Logintext}>L O G I N</Text></View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Signup}onPress={() => navigation.navigate('Signupscreen')}>
        <View style={styles.Signupbutton} ><Text style={styles.Signuptext}>S I G N   U P</Text></View>
      </TouchableOpacity>

         </View>
     </ImageBackground>

  
     </View>


 );




}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      //alignItems: 'center',
      //justifyContent: 'center',
    },
    Login:{
        width: 300,
        height:200,
        marginLeft: 50,
        marginTop: 600,
    },
    Logintext:{
      fontSize: 25,
      fontWeight:'bold',
      textShadowRadius:20,
      textShadowColor:'white',
      color: 'black'
    },
    Loginbutton:{
  
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'darksalmon',
        borderRadius:30,
       // borderBottomWidth:7,
       // borderBottomColor:'',
       // borderLeftColor:'yellow',
        borderWidth:5,
        borderColor:'black',
        height: 80
        
      },
      Signupbutton:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'darksalmon',
        borderRadius: 30,
        borderWidth:5,
        borderColor:'black',
        height: 80,
        
        
      },
      Signup:{
          width: 300,
          marginLeft: 50,
          marginTop: 1,

         // borderColor: 'white',
         // borderWidth: 1,
         // borderRadius: 18
      },
      Signuptext:{
        fontSize: 25,
        color: 'black',
        textShadowRadius:20,
      textShadowColor:'white',
        fontWeight:'bold'
      },
}
)
