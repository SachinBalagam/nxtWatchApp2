import {
  NotFoundContainer,
  MainContainer,
  NotFoundViewCard,
  NotFoundImage,
  NotFoundHeading,
  NotFoundDescription,
} from './styledComponents'
import Header from '../Header'
import SideNavMenu from '../SideMenu'

const NotFound = () => (
  <NotFoundContainer>
    <Header />
    <MainContainer>
      <SideNavMenu />
      <NotFoundViewCard>
        <NotFoundImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
          alt="not found"
        />
        <NotFoundHeading>Page Not Found</NotFoundHeading>
        <NotFoundDescription>
          We are sorry, the page you requested could not be found.
        </NotFoundDescription>
      </NotFoundViewCard>
    </MainContainer>
  </NotFoundContainer>
)

export default NotFound
