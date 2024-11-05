import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = { 
    apiKey : "AIzaSyBbD_vuI25WFPHy2WPusWitnBcgwgoe_g8" , 
    authDomain : "agroconnect-cf045.firebaseapp.com" , 
    projectId : "agroconnect-cf045" , 
    storageBucket : "agroconnect-cf045.appspot.com" , 
    mensagensSenderId : "804014550103" , 
    appId : "1:804014550103:web:74a01738495d84ae9f8712" , 
    
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
