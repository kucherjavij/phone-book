import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import authSelectors from "../auth/authSelectors"
import s from "./appbar.module.css"

export default function Navigation() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
    return <div>
        <Link to="/" className={s.link}>Home </Link>
        {isLoggedIn && <Link to="/contacts"className={s.link}> Contacts</Link>}
    </div>
}