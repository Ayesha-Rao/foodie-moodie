import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Alert, TextInput, Button,Image } from 'react-native';
import {auth} from './FirebaseConfig';
import {createUserWithEmailAndPassword,signInAnonymously,signInWithEmailAndPassword,onAuthStateChanged, reauthenticateWithCredential}from 'firebase/auth'







export default function Mylogin({navigation}){
    const [username,setUser] = useState('');
    const [password,setPass] = useState('');
    const handleUsernameChange=(inputText)=>{
      setUser(inputText);
    }
    const handlePasswordChange=(inputText)=>{
      setPass(inputText);
    }
  
    
    const handleSignIn =async()=>{
      await signInWithEmailAndPassword(auth,username,password)
      .then((userCredential)=>{
        const user = userCredential.user;
        // console.log(user);
        navigation.navigate('MyFlatlist');
      }).catch((error)=>{
        Alert.alert('Error','Enter correct Username and Password');
  
      })
  
    }











return(
<View style={{flex:1}}>

    <View style={styles.view1}>
        <Image source={require('./assets/image/foody.jpeg')}style={{width:230,height:80,padding:90,marginHorizontal:100,marginVertical:80}}></Image>
    </View>
    <View style={styles.view2}>
        <View style={{flex:0.4, backgroundColor:'white',padding:20}}>
            <Text style={{fontSize:25,alignSelf:'center',marginTop:20}}> Username :</Text>
            <TextInput style={styles.input1}placeholder='enter username'
            

            value={username}
            onChangeText={handleUsernameChange}
            
            
            
            
            ></TextInput>
        </View>
        <View style={{flex:0.3, backgroundColor:'white',padding:20}}>
            <Text style={{fontSize:25, alignSelf:'center',}}> Password :</Text>
            <TextInput style={styles.input1}placeholder='enter password'
            
            value={password}
            onChangeText={handlePasswordChange}
            
            
            
            ></TextInput>

            
           
        </View>
        <View>
      

      <TouchableOpacity style={{marginLeft:260}} onPress={()=>navigation.navigate('Signupscreen')}>
                <Text >Forgot Password ?
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{padding:10, backgroundColor:'darksalmon',allignItems:'center',borderWidth:2,borderColor:'grey',borderRadius:25,width:150,marginLeft:50,marginTop:10}}
                 onPress={() =>{handleSignIn()}}>
       <Text style={{color:'white',alignSelf:'center'}}>Login</Text>
      </TouchableOpacity>
        </View>
       
     
       
       
    </View>
    <View style={styles.view3}>
      


    <Image source={require('./assets/image/bike.jpeg')}style={{width:390,height:200,padding:70,resizeMode:'contain',marginLeft:140}}></Image>


    </View>
</View>
);

}

const styles=StyleSheet.create({

view1:

{    
    
    flex:0.3,
    backgroundColor:'white',
  //  alignItems: 'left',
   // justifyContent: 'center',

},
view2:{
flex:0.5,
paddingTop:20,
backgroundColor:'white',


},
view3:{
    flex:0.2,
    padding:10,
    backgroundColor:'white',
},
input1:{

margin:45,
height:47,
borderColor:'sienna',
borderWidth:4,
marginTop:20,

backgroundColor:'bisque',
},
button:{
   width:10,
   height:200,
   borderColor:'black',
   borderRadius:2,
   marginTop:50,
   
    
    
  //  flex:0.2,
    backgroundColor:'white',
    allignItems:'center',
    justifyContent: 'center',

},
Login:{
    width: 300,
    marginLeft: 50,
    marginTop: 20,
},
Logintext:{
  fontSize: 19,
  color: 'white'
},


});