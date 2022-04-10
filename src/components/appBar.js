import { useSelector } from "react-redux"
import authSelectors from "../auth/authSelectors"
import AuthNav from "./authNav"
import Navigation from "./navigation"
import UserMenu from "./userMenu"
import s from "./appbar.module.css"

export default function AppBar() {
const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)

return <div>
    <nav className={s.nav}>
<Navigation/>
{isLoggedIn ? <UserMenu/> : <AuthNav/>}

</nav>
</div> 
}