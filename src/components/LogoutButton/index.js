// Write your JS code here
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

const LogoutButton = props => {
  const logoutButton = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/')
  }

  return (
    <div>
      <button type="button" onClick={logoutButton}>
        Logout
      </button>
    </div>
  )
}
export default withRouter(LogoutButton)
