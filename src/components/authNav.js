import { Link } from "react-router-dom"
import s from './appbar.module.css'
export default function AuthNav() {
    return <div> 
<Link to="/register" className={s.link}>Register </Link>
<Link to="/login" className={s.link}> Login</Link>
    </div>
}