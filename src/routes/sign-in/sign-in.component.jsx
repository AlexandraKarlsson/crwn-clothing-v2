import {signInWithGooglePopup, createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";


const SignIn = () => {
    const logGoogleUsers = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
        // console.log(userDocRef)
    }

    return (
        <div>
            <h1>Sign in page</h1>
            <button onClick={logGoogleUsers}>
                Sign in with Google Popup
            </button>
        </div>
    )
}

export default SignIn;