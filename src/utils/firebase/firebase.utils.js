import {initializeApp} from 'firebase/app';
import { getAuth , signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBzVEJ-gQ7B20EIrlDp66Gy8LYVMGAnP7k",
    authDomain: "crwn-clothing-db-c41a6.firebaseapp.com",
    projectId: "crwn-clothing-db-c41a6",
    storageBucket: "crwn-clothing-db-c41a6.appspot.com",
    messagingSenderId: "1010630008612",
    appId: "1:1010630008612:web:13390d81a36f1b46711db1"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore();
export const createUserDocumentFromAuth =  async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch (e) {
            console.log('error creating the user', e.message);
        }
    }
    return userDocRef;

    // if user data does not exist
    // create / set the document with the data from userAuth in my collection

    // if user data exists
    //return userDocRef
}