import { createContext, useState } from "react"
import auth from "../firebaseAuth/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";



export const UserContext = createContext(null);


const UserAuthContext = ({ children }) => {
    // set login user
    const [user, setUser] = useState(null);
    
    // Current User status
    function currentUser() {
        onAuthStateChanged(auth, currUser => {
            if (currUser) {
                setUser(currUser)
                console.log(user)
            }
            else {
                console.log('User is not Defind')
            }
        })
    }
    // New user
    function newUser(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // LogIn user function
    function LoginUser(email, password){
        return signInWithEmailAndPassword(auth, email, password) 
    }
    // logOut Function
    function logOutUser(){
        return signOut(auth)
    }






    const result = {
        user,
        setUser,
        currentUser,
        newUser,
        logOutUser,
        LoginUser,
    }
    return (
        <UserContext.Provider value={result}>
            {children}
        </UserContext.Provider>
    )
}
export default UserAuthContext