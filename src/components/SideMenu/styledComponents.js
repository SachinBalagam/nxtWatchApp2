import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SideMenuContainer = styled.div`
  padding: 20px;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  min-height: 100vh;
  background-color: ${props => (props.isDarkTheme ? '#1e293b' : '#f8fafc')};

  @media screen and (min-width: 768px) {
    display: flex;
  }
`
export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const NavLink = styled(Link)`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#64748b')};
  text-decoration: none;
  display: flex;
  align-items: center;
  font-size: 20px;
`
export const NavTitle = styled.p`
  font-family: 'Roboto';
  margin-left: 20px;
  font-size: 16px;
`
export const BottomContainer = styled.div``
export const BottomHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  margin-bottom: 20px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
`
export const BottomDescription = styled.p`
  font-family: 'Roboto';
  width: 200px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
`
export const SocialIconsContainer = styled.div``
export const BottomImage = styled.img`
  width: 25px;
  margin-right: 20px;
`
