import PropTypes from "prop-types";
import {  useDispatch, useSelector } from "react-redux";
import {changeFilter} from "../contacts/contacts-actions";
import { getFilter } from "../contacts/contacts-selectors";


export default function Filter() {
    const value = useSelector(getFilter)
    const dispatch = useDispatch()
    return (
        <label>
            <span>Find contacts by name</span>
            <br/>
            <input
                type="text"
                name="filter"
                value={value}
                onChange={(e) => dispatch(changeFilter(e.target.value))}
            />
        </label>
    );
}

Filter.propTypes={
    value:  PropTypes.string,
    onChange: PropTypes.func
}
