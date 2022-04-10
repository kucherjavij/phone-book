import { useSelector } from "react-redux";
import { Navigate} from "react-router-dom";
import authSelectors from "../auth/authSelectors";



function PrivateRoute({ children}) {
const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
    return isLoggedIn ? children : <Navigate to='/login'/>
}

export default PrivateRoute ;