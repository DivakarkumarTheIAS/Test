
import { initializeApp } from "firebase/app";
import { getFirestore, collection ,addDoc, doc, setDoc, deleteDoc, getDoc} from "firebase/firestore";  


const firebaseConfig = {
  apiKey: "AIzaSyAuSh_sdTg2F1U7hujjwEpUERPfiXaJiPo",
  authDomain: "practice-110a8.firebaseapp.com",
  databaseURL: "https://practice-110a8-default-rtdb.firebaseio.com",
  projectId: "practice-110a8",
  storageBucket: "practice-110a8.firebasestorage.app",
  messagingSenderId: "855763202124",
  appId: "1:855763202124:web:fc05c996ef0b7f6bec04e9"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// addDoc(collection(db, "users"), {
//     first: "Ada",
//     last: "Lovelace", 
//     born: 1815
// })
// .then((docRef) => {
//     console.log("Document written with ID: ", docRef.id);
// })
// .catch((error) => {
//     console.error("Error adding document: ", error);
// }); 

// setDoc(doc(db, "users", "QiFCOjPp7myEmxZMLjaL"), {  
//     first: "Trace", 
//     class: "10th" , 
//     div: "A"
         
// }, { merge: true})
// .then(() => {
//     console.log("Document successfully written!");
// })
// .catch((error) => {
//     console.error("Error writing document: ", error);
// });

// const docRef = doc(db, "users", "QiFCOjPp7myEmxZMLjaL")
// deleteDoc(docRef)
// .then(() => {    
//     console.log("Document successfully deleted!");
// }           
// )
// .catch((error) => {
//     console.error("Error removing document: ", error);
// });   

// const docRef = doc(db, "Number", "Adhaar")
// const data = await getDoc(docRef)
// console.log(data.data()); 

// setDoc(doc(db, "Number", "Adhaar"), {
//     number: "1234 5678 9123"
// })        
   