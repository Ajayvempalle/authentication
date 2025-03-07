// Write your JS code here
import {Link} from 'react-router-dom'
import LogoutButton from '../LogoutButton'

const Header = () => (
  <div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <LogoutButton />
    </ul>
  </div>
)
export default Header
