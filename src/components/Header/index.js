import {Link} from 'react-router-dom'
import {FaMoon, FaSun} from 'react-icons/fa'
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
  ProfileImage,
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
      const bgColor = isDarkTheme ? '#231f20' : '#f8fafc'
      const color = isDarkTheme ? '#f8fafc' : ''
      const border = isDarkTheme ? '#f8fafc' : '#3b82f6'
      return (
        <HeaderContainer bgColor={bgColor}>
          <MainContainer>
            <DesktopContainer>
              <Link to="/">
                <WebsiteLogo src={websiteLogoUrl} alt="website logo" />
              </Link>
              <IconsContainer>
                <Button
                  type="button"
                  onClick={onThemeChange}
                  data-testid="theme"
                  color={color}
                >
                  {ThemeLogo}
                </Button>
                <Button type="button" color={color}>
                  <ProfileImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />
                </Button>
                <LogoutButton type="button" border={border}>
                  Logout
                </LogoutButton>
              </IconsContainer>
            </DesktopContainer>
            <MobileContainer>
              <Link to="/">
                <WebsiteLogo src={websiteLogoUrl} alt="website logo" />
              </Link>
              <IconsContainer>
                <Button
                  type="button"
                  onClick={onThemeChange}
                  data-testid="theme"
                  color={color}
                >
                  {ThemeLogo}
                </Button>
                <Button type="button" color={color}>
                  <GiHamburgerMenu />
                </Button>
                <Button type="button" color={color}>
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
