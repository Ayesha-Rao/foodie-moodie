import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  MyFlatlist from './MyFlatlist';

import Mylogin from './Login';
import MyHome from './Home';

import SignUp from './Signupscreen';
import { firebaseConfig } from './FirebaseConfig';
import {initializeApp} from "firebase/app"; 
import {getDatabase, ref, onValue} from "firebase/database";
import { useEffect } from 'react';

const Stack = createNativeStackNavigator();

const app = initializeApp(firebaseConfig);
const database = getDatabase();

export default function App() {
    // useEffect(()=>{
     //const db= getDatabase
    // const userInfo= ref(database,'user');
    // onValue(userInfo,(snapshot)=>{
     // const data = snapshot.val();
    //  console.log(data)

    // });



  //   });





  return (

<NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen name='Home' component={MyHome} options={{headerShown:false}} />
   <Stack.Screen name='Login' component={Mylogin}  options={{headerShown:false}}/>
    <Stack.Screen name='Signupscreen' component={SignUp}options={{headerShown:false}} />
     <Stack.Screen name='MyFlatlist' component={ MyFlatlist}options={{headerShown:false}} />

   </Stack.Navigator>
  </NavigationContainer>





  // <MyFlatlist/>
 //<Mylogin/>
 // <myHome/>
 //<MyHome/>
  //<Mysignup/>
 //<Text>hiiiiiiiiiiiiii</Text>
 //<SignUp/>
 

  
)}
