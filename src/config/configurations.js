import { initializeApp } from 'firebase/app';
import mongoose from 'mongoose';

export const mongooseCon = async () => mongoose.connect('mongodb+srv://emurua:MongoCoderHouse1717!@cluster0.q6bht.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    .then(() => console.log('Mongo connected'))
    .catch(err => console.log(err));



    import firebase from 'firebase/compat/app';
    import 'firebase/compat/auth';
    import 'firebase/compat/firestore';
    
    const firebaseConfig = {
    //   apiKey: "AIzaSyCSnTgMj5wXpsYtJrEGxu2tkYwFiWcJyUA",
    //   authDomain: "coderhouse-reactjs-ecommerce.firebaseapp.com",
    //   projectId: "coderhouse-reactjs-ecommerce",
    //   storageBucket: "coderhouse-reactjs-ecommerce.appspot.com",
    //   messagingSenderId: "545453854318",
    //   appId: "1:545453854318:web:88b86e627a85789a94607f"
        apiKey: "AIzaSyBNaHMow_iS95mPqYc2ChG69MtQCwno7eI",
        authDomain: "coderhouse-backend-ecomm-ad9bc.firebaseapp.com",
        projectId: "coderhouse-backend-ecomm-ad9bc",
        storageBucket: "coderhouse-backend-ecomm-ad9bc.appspot.com",
        messagingSenderId: "856336356350",
        appId: "1:856336356350:web:7354298ee6caf2139166af"
    };
    
    const app = firebase.initializeApp(firebaseConfig);
    
    export const getFirestoreApp = () =>{
        return app
    }
    


// const firebaseConfig = {
//     apiKey: "AIzaSyBNaHMow_iS95mPqYc2ChG69MtQCwno7eI",
//     authDomain: "coderhouse-backend-ecomm-ad9bc.firebaseapp.com",
//     projectId: "coderhouse-backend-ecomm-ad9bc",
//     storageBucket: "coderhouse-backend-ecomm-ad9bc.appspot.com",
//     messagingSenderId: "856336356350",
//     appId: "1:856336356350:web:7354298ee6caf2139166af"
// };

export const firebaseApp = initializeApp(firebaseConfig);


export default {    //mySqlDatabase, 
                    //sqlLite3Database,
                    firebaseApp, 
                    mongooseCon };