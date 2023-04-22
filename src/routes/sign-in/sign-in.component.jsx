import { singInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await singInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }
    return(
        <div>
            <h1>Sing in Page</h1>
            <button onClick={logGoogleUser}>
                Sing in with Google
            </button>
        </div>
    )
}

export default SignIn;