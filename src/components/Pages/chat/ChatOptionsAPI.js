import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDB1Y3d08r5v6r_Fn8_y6EMjVf5R58F9ns",
    authDomain: "chatest-4572f.firebaseapp.com",
    databaseURL: "https://chatest-4572f-default-rtdb.firebaseio.com",
    projectId: "chatest-4572f",
    storageBucket: "chatest-4572f.appspot.com",
    messagingSenderId: "980682379037",
    appId: "1:980682379037:web:0f7e862bc45178ab7d5bf4",
    measurementId: "G-ZJPN1DNN64"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//Acceder a la base de datos
const db = getDatabase();
const userdb = ref(db, 'chat');

export { db, userdb };