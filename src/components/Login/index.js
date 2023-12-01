import {Component} from 'react'
import Cookies from 'js-cookie'
import {
  LoginPageContainer,
  MainContainer,
  WebsiteLogo,
  FormContainer,
  Label,
  Input,
  CheckBoxContainer,
  InputCheckbox,
  CheckBoxLabel,
  LoginButton,
  ErrorMessage,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showError: false,
    errorMsg: '',
    isShowPassword: false,
  }

  onUsernameChange = event => {
    this.setState({username: event.target.value})
  }

  onPasswordChange = event => {
    this.setState({password: event.target.value})
  }

  onShowPasswordChange = () => {
    this.setState(prevState => ({isShowPassword: !prevState.isShowPassword}))
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 1})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showError: true, errorMsg})
  }

  onLoginFormSubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {showError, errorMsg, isShowPassword} = this.state
    const inputType = isShowPassword ? 'text' : 'password'
    return (
      <LoginPageContainer>
        <MainContainer>
          <WebsiteLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <FormContainer onSubmit={this.onLoginFormSubmit}>
            <Label htmlFor="username">USERNAME</Label>
            <Input
              id="username"
              type="text"
              placeholder="Username"
              onChange={this.onUsernameChange}
            />
            <Label htmlFor="password">PASSWORD</Label>
            <Input
              id="password"
              type={inputType}
              placeholder="Password"
              onChange={this.onPasswordChange}
            />
            <CheckBoxContainer>
              <InputCheckbox
                id="checkbox"
                type="checkbox"
                onChange={this.onShowPasswordChange}
              />
              <CheckBoxLabel htmlFor="checkbox">Show Password</CheckBoxLabel>
            </CheckBoxContainer>
            <LoginButton type="submit">Login</LoginButton>
          </FormContainer>
          {showError && <ErrorMessage>{errorMsg}</ErrorMessage>}
        </MainContainer>
      </LoginPageContainer>
    )
  }
}

export default Login
