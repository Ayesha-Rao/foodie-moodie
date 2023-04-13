 
 import { initializeApp } from "firebase/app";
 import { getAnalytics } from "firebase/analytics";
 import {getAuth} from 'firebase/auth'
 
 
 
 
 export const firebaseConfig = {
    apiKey: "AIzaSyB1XZ3GBnBgQjF3N6XQNClC891LDzcQygI",
    authDomain: "food-app-26b79.firebaseapp.com",
    databaseURL: "https://food-app-26b79-default-rtdb.firebaseio.com",
    projectId: "food-app-26b79",
    storageBucket: "food-app-26b79.appspot.com",
    messagingSenderId: "148600908195",
    appId: "1:148600908195:web:1c85dbacc0ff1054d85216",
    measurementId: "G-GVHH5XYLLL"
  };


  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  export{app,auth};