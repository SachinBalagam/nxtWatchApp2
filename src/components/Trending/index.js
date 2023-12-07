import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {HiFire} from 'react-icons/hi'
import {BsDot} from 'react-icons/bs'

import ThemeContext from '../../ThemeContext'
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
  ChannelName,
  CountAndDateContainer,
  ViewCount,
  PublishDate,
  CustomLink,
  ChannelThumbnail,
  DescriptionCard,
} from './styledComponents'

const apiStatusConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
  initial: 'INITIAL',
}

class Trending extends Component {
  state = {trendingVideos: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getTrendingVideosList()
  }

  getTrendingVideosList = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/trending`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = data.videos.map(each => ({
        id: each.id,
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
        channel: {
          name: each.channel.name,
          profileImageUrl: each.channel.profile_image_url,
        },
      }))
      this.setState({
        trendingVideos: updatedData,
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
        onClick={() => this.getTrendingVideosList()}
      >
        Retry
      </FailureViewButton>
    </FailureViewContainer>
  )

  renderSuccessView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const {trendingVideos} = this.state
        return (
          <SuccessListViewContainer>
            {trendingVideos.map(each => (
              <EachVideoCard key={each.id}>
                <CustomLink to={`/videos/${each.id}`}>
                  <Image src={each.thumbnailUrl} alt="video thumbnail" />
                  <DescriptionContainer>
                    <ChannelThumbnail
                      src={each.channel.profileImageUrl}
                      alt="thumbnail"
                    />
                    <DescriptionCard>
                      <Title isdark={isDarkTheme}>{each.title}</Title>
                      <ChannelName>{each.channel.name}</ChannelName>
                      <CountAndDateContainer>
                        <ViewCount>{each.viewCount} Views</ViewCount>
                        <BsDot />
                        <PublishDate>{each.publishedAt}</PublishDate>
                      </CountAndDateContainer>
                    </DescriptionCard>
                  </DescriptionContainer>
                </CustomLink>
              </EachVideoCard>
            ))}
          </SuccessListViewContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

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
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <TrendingContainer isdark={isDarkTheme} data-testid="trending">
              <Header />
              <MainContainer>
                <SideNavMenu />
                <TrendingCard>
                  <HeadingContainer>
                    <HiFire
                      style={{
                        color: '#ff0b37',
                        backgroundColor: ' #cbd5e1',
                        height: '50px',
                        width: '50px',
                        borderRadius: '25px',
                        marginRight: '10px',
                      }}
                    />
                    <h1>Trending</h1>
                  </HeadingContainer>
                  {this.renderListView()}
                </TrendingCard>
              </MainContainer>
            </TrendingContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Trending
