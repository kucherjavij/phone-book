import { useSelector } from "react-redux"
import authSelectors from "../auth/authSelectors"
import AuthNav from "./authNav"
import Navigation from "./navigation"
import UserMenu from "./userMenu"

export default function AppBar() {
const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)

return <div>
    <nav  style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
<Navigation/>
{isLoggedIn ? <UserMenu/> : <AuthNav/>}

</nav>
</div> 
}