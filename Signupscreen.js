import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Alert, TextInput, Button,Image,ScrollView,KeyboardAvoidingView } from 'react-native';
import {firebaseConfig} from './FirebaseConfig'
import {auth} from "./FirebaseConfig";
import { getDatabase,ref, set } from 'firebase/database';
import { initializeApp } from 'firebase/app';

import { createUserWithEmailAndPassword,signInWithEmailAndPassword,signInAnonymously,onAuthStateChanged } from 'firebase/auth';
import MyFlatlist from './MyFlatlist';


const app =initializeApp(firebaseConfig);





export default function SignUp({navigation}){

  const db=getDatabase();

    const [text, setText] = useState('');
    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');
    const [text3, setText3] = useState('');
    const [text4, setText4] = useState('');
    //const [text5, setText5] = useState('');


    


      const goToFirst = () => {
        navigation.navigate('MyFlatlist');
      };
    
    const onChangeTextemail= (inputText) => {
        setText(inputText);
      };
      const onChangeText1 = (inputText1) => {
        setText1(inputText1);
      };
      const onChangeText2 = (inputText2) => {
        setText2(inputText2);
      };
      const onChangeText3 = (inputText3) => {
        setText3(inputText3);
      };
      const onChangeText4 = (inputText4) => {
        setText4(inputText4);

        //const onChangeText5 = (inputText5) => {
            //setText5(inputText5);






      };
      const handleSignup = async () => {
       // console.log('LOGGED')
        await createUserWithEmailAndPassword(auth, text, text1)
          .then((userCredential) => {
            // Sign Up
           // console.log("Succesfull");
            const user = userCredential.user;
            console.log("user data,", user);
            navigation.navigate('MyFlatlist');
            // write code to save your data in firestore
            // FirebaseError.firestore.write(user.uid,user.uid)
            // ...
          })
          .catch((error) => {
             Alert.alert('please sign up with email and password');  

            console.log(error);
            console.log(text);
            // const errorCode = error.code;
            // const errorMessage = error.message;
            // console.log('Error Code == ',errorCode)
            // console.log('Error Message == ',errorMessage)
            // // ..
          });
          // goToFirst();
      };
      const signInGuest = async () => {
    
        await signInAnonymously(auth).then((userCredential)=>{
          console.log('Done',userCredential)
        });
     goToFirst();
      };



return(


    //<KeyboardAvoidingView
       
   // behavior='padding'>
<ScrollView style={{flex:1}}>

 <View style={styles.view1}>

<Image source={require('./assets/image/logo2.jpeg')} style={{width:100,marginHorizontal:60,height:90,padding:150,resizeMode:'contain'}}></Image>
 </View>
   <View style={styles.view2}>
    <Text style={styles.text1}>
        Email:
    </Text>
    <TextInput style={styles.TextInput1} placeholder='Enter Email'
    onChangeText={onChangeTextemail}
    value={text}
    
    
    ></TextInput>
    <Text style={styles.text1}>
        Password:
    </Text>
    <TextInput style={styles.TextInput1} placeholder='Create password'
    
    onChangeText={onChangeText1}
    value={text1}
    
    
    ></TextInput>
    <Text style={styles.text1}>
        First Name:
    </Text>
    <TextInput style={styles.TextInput1} placeholder='Enter first name'
     
     onChangeText={onChangeText2}
     value={text2}



    
    ></TextInput>
    <Text style={styles.text1}>
        Last Name:
    </Text>
    <TextInput style={styles.TextInput1} placeholder='Enter Last name'
    
    onChangeText={onChangeText3}
    value={text3}
    
    
    ></TextInput>
    <Text style={styles.text1}>
        Phone no:
    </Text>
    <TextInput style={styles.TextInput1} placeholder='Enter phone number'
    
    onChangeText={onChangeText4}
    value={text4}
    
    
    ></TextInput>

    
    <TouchableOpacity style={styles.Button2}onPress={()=>{signInGuest()}}>
        <Text style={{fontSize:15,color:'black'}}> sign up as guest </Text>
    </TouchableOpacity>
    
    <TouchableOpacity style={styles.Button1}onPress={()=>{handleSignup()}}>
        <Text style={{fontSize:15,color:'black'}}>       SIGN UP -- </Text>
    </TouchableOpacity>
    

   </View>
       
   
       
     
    
</ScrollView>
//</KeyboardAvoidingView>
);

}

const styles=StyleSheet.create({

view1:
{
    flex:0.3,
    backgroundColor:'white'
},
view2:{
    flex:0.7,
    backgroundColor:'white'
},
text1:{
 fontSize:20,
 fontWeight:600,
 color:'black',
 padding:10,
//textShadowRadius:100,
//textShadowColor:'black'
 


},
TextInput1:{

    color:'black',
    margin:5,
    height:40,
    borderColor:'sienna',
    borderWidth:3,
    backgroundColor:'bisque',
    borderRadius:20,
    
    

},
Button1:{
padding:10,
backgroundColor:'darksalmon',
borderRadius:20,
borderColor:'sienna',
borderWidth:3,
width:170,
justifyContent:'center',
//marginTop:20,
marginHorizontal:250



},
Button2:{
    padding:6,
    backgroundColor:'darksalmon',
    borderRadius:20,
    borderColor:'sienna',
    borderWidth:3,
    width:170,
    justifyContent:'center',
    marginTop:20,
   // marginHorizontal:250
    
    
    
    }



});