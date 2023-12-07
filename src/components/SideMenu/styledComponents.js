import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SideMenuContainer = styled.div`
  padding: 20px;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  min-height: 100vh;
  background-color: ${props => props.bgColor};

  @media screen and (min-width: 768px) {
    display: flex;
  }
`
export const NavContainer = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0;
  list-style-type: none;
`
export const NavList = styled.li``

export const NavLink = styled(Link)`
  color: ${props => props.navcolor};
  background-color: ${props => props.active};
  padding-left: 20px;
  text-decoration: none;
  display: flex;
  align-items: center;
  font-size: 20px;
`
export const NavTitle = styled.p`
  font-family: 'Roboto';
  margin-left: 20px;
  font-size: 16px;
  color: ${props => props.color};
`
export const BottomContainer = styled.div``
export const BottomHeading = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  margin-bottom: 20px;
  color: ${props => (props.isdark ? '#ffffff' : '#000000')};
`
export const BottomDescription = styled.p`
  font-family: 'Roboto';
  width: 200px;
  color: ${props => (props.isdark ? '#ffffff' : '#000000')};
`
export const SocialIconsContainer = styled.div``
export const BottomImage = styled.img`
  width: 25px;
  margin-right: 20px;
`
