import { useState } from 'react';


import styles from './signin.module.css';



export default function Signin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email, password);
    }

    return ( 
        <form onSubmit={handleSubmit} className={styles['login-form'] }>
            <h2>Login</h2>
            <label>
                <span>Email:-</span>
                <input 
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
            </label>
            <label>
                <span>Password:-</span>
                <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value= {password}
                />
            <button className='btn'>Login</button>
            </label>
        </form>
     );
}
