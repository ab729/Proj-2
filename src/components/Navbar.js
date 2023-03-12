import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'



export default function Navbar() {
    const { logout } = useLogout()



    return ( 
        <div className={styles.navbar}>
            <ul>
                <li className={styles.title}>myMoney</li>
                <li><Link to='/login'>Log in</Link></li>
                <li><Link to='/signup'>Sign up</Link></li>
                <li>
                    <button className='btn' onClick={logout}>Logout</button>
                </li>
            </ul>
        </div>
     );
}

