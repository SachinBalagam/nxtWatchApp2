import {AiFillHome} from 'react-icons/ai'
import {FaGamepad} from 'react-icons/fa'
import {HiFire} from 'react-icons/hi'
import {RiPlayListAddLine} from 'react-icons/ri'
import {
  SideMenuContainer,
  NavContainer,
  NavLink,
  NavTitle,
  BottomContainer,
  BottomHeading,
  SocialIconsContainer,
  BottomImage,
  BottomDescription,
} from './styledComponents'
import ThemeContext from '../../ThemeContext/index'

const SideNavMenu = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <SideMenuContainer isDarkTheme={isDarkTheme}>
          <NavContainer>
            <NavLink to="/" isDarkTheme={isDarkTheme}>
              <AiFillHome />
              <NavTitle> Home</NavTitle>
            </NavLink>
            <NavLink to="/trending" isDarkTheme={isDarkTheme}>
              <FaGamepad />
              <NavTitle>Trending</NavTitle>
            </NavLink>
            <NavLink to="/gaming" isDarkTheme={isDarkTheme}>
              <HiFire />
              <NavTitle>Gaming</NavTitle>
            </NavLink>
            <NavLink to="/saved-videos" isDarkTheme={isDarkTheme}>
              <RiPlayListAddLine />
              <NavTitle> Saved Videos</NavTitle>
            </NavLink>
          </NavContainer>
          <BottomContainer>
            <BottomHeading isDarkTheme={isDarkTheme}>CONTACT US</BottomHeading>
            <SocialIconsContainer>
              <BottomImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <BottomImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <BottomImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </SocialIconsContainer>
            <BottomDescription isDarkTheme={isDarkTheme}>
              Enjoy! Now to see your channels and recommendations
            </BottomDescription>
          </BottomContainer>
        </SideMenuContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default SideNavMenu
