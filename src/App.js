import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import Login from './components/Login/index'
import Home from './components/Home/index'
import Trending from './components/Trending/index'
import Gaming from './components/Gaming/index'
import VideoItemDetails from './components/VideoItemDetails/index'
import ThemeContext from './ThemeContext/index'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound/index'
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
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
