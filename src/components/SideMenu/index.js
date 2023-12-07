import {AiFillHome} from 'react-icons/ai'
import {FaGamepad} from 'react-icons/fa'
import {HiFire} from 'react-icons/hi'
import {RiPlayListAddLine} from 'react-icons/ri'
import {
  SideMenuContainer,
  NavContainer,
  NavList,
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
      const {isDarkTheme, changeTab, activeTab} = value

      const activeBg = isDarkTheme ? '#475569' : '#cbd5e1'
      const activeColor = isDarkTheme ? '#f8fafc' : '#000000'
      const bgColor = isDarkTheme ? ' #231f20' : '#f8fafc'

      const onClickHomeTab = () => {
        changeTab('Home')
      }
      const onClickTrendingTab = () => {
        changeTab('Trending')
      }
      const onClickGamingTab = () => {
        changeTab('Gaming')
      }
      const onClickSavedTab = () => {
        changeTab('Saved')
      }

      return (
        <SideMenuContainer bgColor={bgColor}>
          <NavContainer>
            <NavList>
              <NavLink
                to="/"
                onClick={onClickHomeTab}
                active={activeTab === 'Home' ? activeBg : ''}
              >
                <AiFillHome
                  color={activeTab === 'Home' ? ' #ff0000' : '#475569'}
                />
                <NavTitle color={activeColor}> Home</NavTitle>
              </NavLink>
            </NavList>
            <NavList>
              <NavLink
                to="/trending"
                onClick={onClickTrendingTab}
                active={activeTab === 'Trending' ? activeBg : ''}
              >
                <FaGamepad
                  color={activeTab === 'Trending' ? ' #ff0000' : '#475569'}
                />
                <NavTitle color={activeColor}>Trending</NavTitle>
              </NavLink>
            </NavList>
            <NavList>
              <NavLink
                to="/gaming"
                onClick={onClickGamingTab}
                active={activeTab === 'Gaming' ? activeBg : ''}
              >
                <HiFire
                  color={activeTab === 'Gaming' ? ' #ff0000' : '#475569'}
                />
                <NavTitle color={activeColor}>Gaming</NavTitle>
              </NavLink>
            </NavList>
            <NavList>
              <NavLink
                to="/saved-videos"
                onClick={onClickSavedTab}
                active={activeTab === 'Saved' ? activeBg : ''}
              >
                <RiPlayListAddLine
                  color={activeTab === 'Saved' ? ' #ff0000' : '#475569'}
                />
                <NavTitle color={activeColor}> Saved Videos</NavTitle>
              </NavLink>
            </NavList>
          </NavContainer>
          <BottomContainer>
            <BottomHeading isdark={isDarkTheme}>CONTACT US</BottomHeading>
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
            <BottomDescription isdark={isDarkTheme}>
              Enjoy! Now to see your channels and recommendations!
            </BottomDescription>
          </BottomContainer>
        </SideMenuContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default SideNavMenu
