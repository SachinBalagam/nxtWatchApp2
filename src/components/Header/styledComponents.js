import styled from 'styled-components'

export const HeaderContainer = styled.nav`
  display: flex;
  background-color: ${props => (props.isDarkTheme ? '#1e293b' : '#f8fafc')};
  margin: 0;
`
export const MainContainer = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100vw;
  padding: 0;
  list-style-type: none;
  margin: 0;
`
export const DesktopContainer = styled.li`
  display: none;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`
export const WebsiteLogo = styled.img`
  width: 100px;

  @media screen and (min-width: 768px) {
    width: 200px;
  }
`
export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
`
export const Button = styled.button`
  margin-left: 20px;
  font-size: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${props => (props.isDarkTheme ? '#f8fafc' : '')};

  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`
export const LogoutButton = styled.button`
  margin-left: 20px;
  background-color: transparent;
  font-family: 'Roboto';
  font-weight: 500;
  height: 35px;
  width: 120px;
  border: 2px solid ${props => (props.isDarkTheme ? '#f8fafc' : '#3b82f6')};
  color: ${props => (props.isDarkTheme ? '#f8fafc' : '#3b82f6')};
  cursor: pointer;
`
export const MobileContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  min-width: 100vw;

  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const ProfileImage = styled.img`
  width: 35px;
`
