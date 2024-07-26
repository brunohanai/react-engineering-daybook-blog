import { useNavigate } from "react-router-dom";
import { auth } from "../../lib/firebase/config";
import { signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../../lib/store/usersSlice";

function AdminPost() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleSignOut() {
        signOut(auth).then(() => {
            dispatch(setUser(null));
            navigate("/admin/login");
          }).catch((error) => {
            console.log(error);
          });
    }

    return (
        <div>
            <p>Edit Post...</p>

            <button onClick={handleSignOut}>Logout</button>
        </div>
    )
}

export default AdminPost;