import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {FaGamepad} from 'react-icons/fa'
import Header from '../Header'
import SideNavMenu from '../SideMenu'
import {
  TrendingContainer,
  MainContainer,
  TrendingCard,
  HeadingContainer,
  LoadingViewContainer,
  FailureViewContainer,
  FailureViewImage,
  FailureViewHeading,
  FailureViewDescription,
  FailureViewButton,
  SuccessListViewContainer,
  EachVideoCard,
  Image,
  DescriptionContainer,
  Title,
  ViewCount,
  CustomLink,
} from './styledComponents'

const apiStatusConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
  initial: 'INITIAL',
}

class Gaming extends Component {
  state = {gamingVideos: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getGamingVideosList()
  }

  getGamingVideosList = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      console.log(data)
      const updatedData = data.videos.map(each => ({
        id: each.id,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }))
      this.setState({
        gamingVideos: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderFailureView = () => (
    <FailureViewContainer>
      <FailureViewImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
      <FailureViewHeading>Oops! Something Went Wrong</FailureViewHeading>
      <FailureViewDescription>
        We are having some trouble to complete your request. Please try again
      </FailureViewDescription>
      <FailureViewButton
        type="button"
        onClick={() => this.getGamingVideosList()}
      >
        Retry
      </FailureViewButton>
    </FailureViewContainer>
  )

  renderSuccessView = () => {
    const {gamingVideos} = this.state
    return (
      <SuccessListViewContainer>
        {gamingVideos.map(each => (
          <EachVideoCard key={each.id}>
            <CustomLink to={`/videos/${each.id}`}>
              <Image src={each.thumbnailUrl} alt="video thumbnail" />
              <DescriptionContainer>
                <Title>{each.title}</Title>
                <ViewCount>{each.viewCount} Watching Worldwide</ViewCount>
              </DescriptionContainer>
            </CustomLink>
          </EachVideoCard>
        ))}
      </SuccessListViewContainer>
    )
  }

  renderLoadingView = () => (
    <LoadingViewContainer className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#000000" height="50" width="50" />
    </LoadingViewContainer>
  )

  renderListView = () => {
    const {apiStatus} = this.state
    console.log(apiStatus)
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <TrendingContainer>
        <Header />
        <MainContainer>
          <SideNavMenu />
          <TrendingCard>
            <HeadingContainer>
              <FaGamepad
                style={{
                  color: '#ff0b37',
                  backgroundColor: ' #cbd5e1',
                  height: '50px',
                  width: '50px',
                  borderRadius: '25px',
                  marginRight: '10px',
                }}
              />
              <h1>Gaming</h1>
            </HeadingContainer>
            {this.renderListView()}
          </TrendingCard>
        </MainContainer>
      </TrendingContainer>
    )
  }
}

export default Gaming
