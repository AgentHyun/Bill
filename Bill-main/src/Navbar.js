import { useNavigate } from 'react-router-dom';
import './css/Navbar.css';
function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <ul className="navbar-links">
      <li onClick={() => navigate('/landing')}>Home</li>
        <li onClick={() => navigate('/')}>Login</li>
        <li onClick={() => navigate('/main')}>Main</li>
        
      </ul>
    </nav>
  );
}
export default Navbar;
