import { auth } from "../../lib/firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

function AdminSignIn() {
    const [userCredentials, setUserCredentials] = useState({});

    function handleCredentials(e) {
        setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
        console.log(userCredentials);
    }

    function handleSignIn(e) {
        e.preventDefault();

        signInWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    }

    return (
        <div>
            <form>
                <div>
                    <label>E-mail (*)</label>
                    <input onChange={(e) => { handleCredentials(e) }} type="text" name="email" placeholder="Enter your e-mail" />
                </div>

                <div>
                    <label>Password (*)</label>
                    <input onChange={(e) => { handleCredentials(e) }} type="password" name="password" placeholder="Enter your password" />
                </div>

                <div>
                    <button onClick={(e) => { handleSignIn(e) }}>Login</button>
                </div>
            </form>
        </div>
    )
}

export default AdminSignIn;