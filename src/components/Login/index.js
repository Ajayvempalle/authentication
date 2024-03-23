// Write your JS code here
import Cookies from 'js-cookie'
import {Redirect, withRouter} from 'react-router-dom'

const Login = props => {
  const jwtToken = Cookies.get('jwt_token')

  const setTokenAndLogin = token => {
    const {history} = props
    Cookies.set('jwt_token', token, {expires: 30})
    history.replace('/')
  }

  const onClickForm = async () => {
    const userDetails = {username: 'rahul', password: 'rahul@2021'}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      setTokenAndLogin(data.jwt_token)
    }
    console.log(response)
  }

  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <div>
      <h1>Please Login</h1>
      <button type="button" onClick={onClickForm}>
        Login with Sample Creds
      </button>
    </div>
  )
}

export default withRouter(Login)
