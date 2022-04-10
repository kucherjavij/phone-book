import { useState } from 'react';
import { useDispatch } from 'react-redux';
import operations from '../auth/authOperations';
import s from './registerView.module.css'
export default function LoginView() {
    const dispatch = useDispatch()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
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

          dispatch(operations.logIn({email, password}))
          setPassword('');
          setEmail('')

      }


    

    return (
<form onSubmit={handleSubmit} autoComplete="on" className={s.form}>
        <label>
          Email
          <input
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
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            className={s.input}
          />
        </label>
        <button className={s.button} type='submit'>Log In</button>
        </form>
    )
}
