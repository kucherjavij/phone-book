import { useSelector } from "react-redux";
import { Navigate} from "react-router-dom";
import authSelectors from "../auth/authSelectors";



function PublicRoute({ children, restricted = false}) {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    const shouldRedirect = isLoggedIn & restricted;
    return shouldRedirect ? <Navigate to='/'/> : children
}

export default PublicRoute ;