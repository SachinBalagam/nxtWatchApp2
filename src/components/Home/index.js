import {Component} from 'react'

import Cookies from 'js-cookie'
import {RiCloseLine} from 'react-icons/ri'
import {BsSearch, BsDot} from 'react-icons/bs'
import {formatDistanceToNow} from 'date-fns'

import Loader from 'react-loader-spinner'
import {
  HomeContainer,
  MainContainer,
  LoadingViewContainer,
  BannerContainer,
  BannerDescription,
  BannerButton,
  BannerLogo,
  BannerCloseButton,
  BannerCard,
  BannerAndListContainer,
  SearchAndListContainer,
  FailureViewContainer,
  FailureViewImage,
  FailureViewHeading,
  FailureViewDescription,
  FailureViewButton,
  SearchBarContainer,
  SearchInput,
  SearchButton,
  SuccessViewContainer,
  EachVideoContainer,
  CustomLink,
  ImageContainer,
  ImageAndDescriptionContainer,
  DescriptionContainer,
  VideoThumbnail,
  ChannelThumbnailContainer,
  ChannelThumbnail,
  VideoTitle,
  ChannelName,
  Views,
  PublishedAt,
  ViewCountAndPublishContainer,
  NoVideosViewContainer,
  NoVideosViewImage,
  NoVideosViewHeading,
  NoVideosViewDescription,
  NoVideosViewButton,
} from './styledComponents'
import Header from '../Header/index'
import ThemeContext from '../../ThemeContext/index'
import SideNavMenu from '../SideMenu'

const apiStatusConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
  initial: 'INITIAL',
}

class Home extends Component {
  state = {
    videosList: [],
    apiStatus: apiStatusConstants.initial,
    showBanner: true,
    searchInput: '',
  }

  componentDidMount() {
    this.getVideosList()
  }

  onChangeShowBanner = () => {
    this.setState({showBanner: false})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSearchInputButton = () => {
    const {searchInput} = this.state
    this.setState({searchInput}, this.getVideosList)
  }

  onClickRetry = () => {
    this.setState({searchInput: ''}, this.getVideosList)
  }

  getVideosList = async () => {
    const {searchInput} = this.state
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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
        videosList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderSuccessView = () => {
    const {videosList} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return videosList.length > 0 ? (
            <SuccessViewContainer>
              {videosList.map(each => (
                <EachVideoContainer key={each.id}>
                  <CustomLink to={`/videos/${each.id}`}>
                    <ImageContainer>
                      <VideoThumbnail
                        src={each.thumbnailUrl}
                        alt="video thumbnail"
                      />
                    </ImageContainer>
                    <ImageAndDescriptionContainer>
                      <ChannelThumbnailContainer>
                        <ChannelThumbnail
                          src={each.channel.profileImageUrl}
                          alt="channel logo"
                        />
                      </ChannelThumbnailContainer>
                      <DescriptionContainer>
                        <VideoTitle isDarkTheme={isDarkTheme}>
                          {each.title}
                        </VideoTitle>
                        <ChannelName>{each.channel.name}</ChannelName>
                        <ViewCountAndPublishContainer>
                          <Views>{each.viewCount} views</Views>
                          <BsDot />
                          <PublishedAt>
                            {formatDistanceToNow(
                              new Date(each.publishedAt),
                            ).slice(-7)}
                            {' ago'}
                          </PublishedAt>
                        </ViewCountAndPublishContainer>
                      </DescriptionContainer>
                    </ImageAndDescriptionContainer>
                  </CustomLink>
                </EachVideoContainer>
              ))}
            </SuccessViewContainer>
          ) : (
            <NoVideosViewContainer>
              <NoVideosViewImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                alt="no videos"
              />
              <NoVideosViewHeading>No Search Results Found</NoVideosViewHeading>
              <NoVideosViewDescription>
                Try different key words or remove search filter
              </NoVideosViewDescription>
              <NoVideosViewButton type="button" onClick={this.onClickRetry}>
                Retry
              </NoVideosViewButton>
            </NoVideosViewContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
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
      <FailureViewButton type="button" onClick={() => this.getVideosList()}>
        Retry
      </FailureViewButton>
    </FailureViewContainer>
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
    const {showBanner, searchInput} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <HomeContainer isDarkTheme={isDarkTheme} data-testid="home">
              <Header />
              <MainContainer>
                <SideNavMenu />
                <BannerAndListContainer>
                  {showBanner && (
                    <BannerContainer data-testid="banner">
                      <BannerCard>
                        <BannerLogo
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="nxt watch logo"
                        />
                        <BannerDescription>
                          Buy Nxt Watch Premium Prepaid plans with UPI
                        </BannerDescription>
                        <BannerButton type="button">GET IT NOW</BannerButton>
                      </BannerCard>
                      <BannerCloseButton
                        onClick={this.onChangeShowBanner}
                        data-testid="close"
                      >
                        <RiCloseLine />
                      </BannerCloseButton>
                    </BannerContainer>
                  )}
                  <SearchAndListContainer>
                    <SearchBarContainer>
                      <SearchInput
                        type="search"
                        placeholder="Search"
                        onChange={this.onChangeSearchInput}
                        value={searchInput}
                      />
                      <SearchButton
                        onClick={this.onClickSearchInputButton}
                        data-testid="searchButton"
                        type="button"
                      >
                        <BsSearch />
                      </SearchButton>
                    </SearchBarContainer>
                    {this.renderListView()}
                  </SearchAndListContainer>
                </BannerAndListContainer>
              </MainContainer>
            </HomeContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
