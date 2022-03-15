import {  useDispatch, useSelector } from "react-redux"
import operations from "../auth/authOperations"
import authSelectors from "../auth/authSelectors"

export default function UserMenu() {

    const dispatch = useDispatch()
const name = useSelector(authSelectors.getUserName)


    return (
    <div style={{ display: "flex", alignItems: 'center' }}>
        <p>Hello {name} </p>
        <button onClick={() => dispatch(operations.logOut())} variant="contained">Exit</button>
        </div>
    )
}
