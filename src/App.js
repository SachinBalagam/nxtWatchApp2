import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Login from './components/Login/index'
import Home from './components/Home/index'
import ThemeContext from './ThemeContext/index'
// import NotFound from './components/NotFound/index'
import './App.css'

// Replace your code here
class App extends Component {
  state = {isDarkTheme: false}

  onChangeTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  render() {
    const {isDarkTheme} = this.state
    return (
      <ThemeContext.Provider
        value={{isDarkTheme, onChangeTheme: this.onChangeTheme}}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/not-found" component={NotFound} />
        <Redirect to="/not-found" /> */}
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
