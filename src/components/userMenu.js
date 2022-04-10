import {  useDispatch, useSelector } from "react-redux"
import operations from "../auth/authOperations"
import authSelectors from "../auth/authSelectors"
import s from './appbar.module.css'

export default function UserMenu() {

    const dispatch = useDispatch()
const name = useSelector(authSelectors.getUserName)


    return (
    <div className={s.usermenu}>
        <p>Hello {name} </p>
        <button onClick={() => dispatch(operations.logOut())} variant="contained" className={s.button}>Exit</button>
        </div>
    )
}
