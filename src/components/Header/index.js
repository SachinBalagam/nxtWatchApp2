import {FaMoon, FaUserCircle, FaSun} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'
import ThemeContext from '../../ThemeContext/index'
import {
  HeaderContainer,
  MainContainer,
  DesktopContainer,
  WebsiteLogo,
  IconsContainer,
  LogoutButton,
  Button,
  MobileContainer,
} from './styledComponents'

const Header = () => (
  <ThemeContext.Consumer>
    {value => {
      const {onChangeTheme, isDarkTheme} = value
      const onThemeChange = () => {
        onChangeTheme()
      }
      const websiteLogoUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
      const ThemeLogo = isDarkTheme ? <FaSun /> : <FaMoon />
      return (
        <HeaderContainer isDarkTheme={isDarkTheme}>
          <MainContainer>
            <DesktopContainer>
              <WebsiteLogo src={websiteLogoUrl} alt="website logo" />
              <IconsContainer>
                <Button
                  type="button"
                  onClick={onThemeChange}
                  data-testid="theme"
                  isDarkTheme={isDarkTheme}
                >
                  {ThemeLogo}
                </Button>
                <Button type="button" isDarkTheme={isDarkTheme}>
                  <FaUserCircle />
                </Button>
                <LogoutButton type="button" isDarkTheme={isDarkTheme}>
                  Logout
                </LogoutButton>
              </IconsContainer>
            </DesktopContainer>
            <MobileContainer>
              <WebsiteLogo src={websiteLogoUrl} alt="website logo" />
              <IconsContainer>
                <Button
                  type="button"
                  onClick={onThemeChange}
                  data-testid="theme"
                >
                  <FaMoon />
                </Button>
                <Button type="button">
                  <GiHamburgerMenu />
                </Button>
                <Button type="button">
                  <FiLogOut />
                </Button>
              </IconsContainer>
            </MobileContainer>
          </MainContainer>
        </HeaderContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default Header
