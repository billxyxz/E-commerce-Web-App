import {initializeApp} from "firebase/app"
import {collection, doc, getDoc, getDocs, getFirestore, onSnapshot} from "firebase/firestore"
import {getAuth} from "firebase/auth"



// Import the functions you need from the SDKs you need

const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db= getFirestore(app)

const productsCollection = collection(db, "products")

export const getProducts = async () => {
    const productsSnapshot = await getDocs(productsCollection);
    const productsArr = productsSnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
    }))
    return productsArr;
}

export const getProduct = async (id) => {
  const docRef = doc(db, "products", id);
  const product = await getDoc(docRef)
  return {
    ...product.data(),
    id: product.id
  }
}

// Initialize Firebase Authentication and get a reference to the service
export default app;
export const auth = getAuth(app)