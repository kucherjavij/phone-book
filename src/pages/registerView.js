import { useState } from "react"
import { useDispatch } from "react-redux";
import operations from "../auth/authOperations";
import s from './registerView.module.css'
export default function RegisterView() {
    const dispatch = useDispatch()
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleChange = ({ target: { name, value } }) => {
    switch (name) {
        case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit =(e) => {
      e.preventDefault()
      dispatch(operations.register({name, email, password}))
      setName('')
      setPassword('');
      setEmail('')

  }
    return <form onSubmit={handleSubmit} className={s.form}>
    <label>
      Name
      <input
      autoComplete="false"
        type="text"
        name="name"
        value={name}
          onChange={handleChange}
          className={s.input}
      />
    </label>
    <label>
      Email
      <input
            autoComplete="false"
        type="email"
        name="email"
        value={email}
          onChange={handleChange}
          className={s.input}
      />
    </label>
    <label>
      Password
      <input
            autoComplete="false"
        type="password"
        name="password"
        value={password}
          onChange={handleChange}
          className={s.input}
      />
    </label>
    <button className={s.button} type="submit">register</button>
    </form>
}