import {useState, React} from 'react';
import '../style/style.css';
import Logo from '../assets/Logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../config/AuthContext';

const Navigation = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false)

  const handleToggle=() => {
    setToggle(!toggle)
  }

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <div>
      <nav className={toggle?'navbar expanded':'navbar'}>
      <button className='hamburger'  onClick={handleToggle}>☰</button>
        <Link to='/'>
          <div className='logo'>
            <img src={Logo} alt='Logo' />
          </div>
        </Link>
        <div className='menu'>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/article'>Article</Link></li>
            <li><Link to='/mentaltest'>Mental Test</Link></li>
            <li><Link to='/konsultasi'>Konsultasi</Link></li>
          </ul>
        </div>
        {user?.email ?
          <div className='login'>
            <button onClick={handleLogout} className='btn-login'>Logout</button>
          </div> :
          <div className='login'>
            <Link to='/login'><button className='btn-login'>Login</button></Link>
          </div>}
      </nav>
    </div>
  )
}

export default Navigation

