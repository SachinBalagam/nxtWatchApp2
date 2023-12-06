import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {BsDot} from 'react-icons/bs'
import {BiLike, BiDislike} from 'react-icons/bi'
import {RiPlayListAddLine} from 'react-icons/ri'
import ReactPlayer from 'react-player'
import Header from '../Header'
import SideNavMenu from '../SideMenu'
import {
  VideoItemDetailsContainer,
  MainContainer,
  FailureViewButton,
  FailureViewContainer,
  FailureViewDescription,
  FailureViewHeading,
  FailureViewImage,
  LoadingViewContainer,
  SuccessViewContainer,
  VideoPlayer,
  SuccessViewHeading,
  CountAndDateContainer,
  ViewCount,
  PublishDate,
  LikeDislikeContainer,
  LikeContainer,
  Like,
  DislikeContainer,
  Dislike,
  SavedContainer,
  Saved,
  SubContainer,
  ChannelDetailsContainer,
  ChannelImage,
  ChannelDescriptionCard,
  ChannelName,
  ChannelSubCount,
  ChannelDescription,
} from './styledComponents'

const apiStatusConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
  initial: 'INITIAL',
}

class VideoItemDetails extends Component {
  state = {videoItemDetails: {}, apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getSpecificVideoItemDetails()
  }

  getSpecificVideoItemDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = {
        id: data.video_details.id,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        publishedAt: data.video_details.published_at,
        thumbnailUrl: data.video_details.thumbnail_url,
        viewCount: data.video_details.view_count,
        description: data.video_details.description,
        channel: {
          name: data.video_details.channel.name,
          profileImageUrl: data.video_details.channel.profile_image_url,
          subscriberCount: data.video_details.channel.subscriber_count,
        },
      }
      this.setState({
        videoItemDetails: updatedData,
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
        We are having some trouble to complete your request. Please try again.
      </FailureViewDescription>
      <FailureViewButton
        type="button"
        onClick={() => this.getSpecificVideoItemDetails()}
      >
        Retry
      </FailureViewButton>
    </FailureViewContainer>
  )

  renderLoadingView = () => (
    <LoadingViewContainer className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#000000" height="50" width="50" />
    </LoadingViewContainer>
  )

  renderSuccessView = () => {
    const {videoItemDetails} = this.state
    const {
      title,
      viewCount,
      publishedAt,
      channel,
      description,
    } = videoItemDetails
    const {profileImageUrl, name, subscriberCount} = channel
    console.log(videoItemDetails)
    return (
      <SuccessViewContainer>
        <VideoPlayer>
          <ReactPlayer
            url={videoItemDetails.videoUrl}
            controls
            width="100%"
            height="70vh"
          />
        </VideoPlayer>
        <SuccessViewHeading>{title}</SuccessViewHeading>
        <SubContainer>
          <CountAndDateContainer>
            <ViewCount>{viewCount} views</ViewCount>
            <BsDot />
            <PublishDate>{publishedAt}</PublishDate>
          </CountAndDateContainer>
          <LikeDislikeContainer>
            <LikeContainer type="button">
              <BiLike />
              <Like>Like</Like>
            </LikeContainer>
            <DislikeContainer type="button">
              <BiDislike />
              <Dislike>Dislike</Dislike>
            </DislikeContainer>
            <SavedContainer type="button">
              <RiPlayListAddLine />
              <Saved>Save</Saved>
            </SavedContainer>
          </LikeDislikeContainer>
        </SubContainer>
        <hr />
        <ChannelDetailsContainer>
          <ChannelImage src={profileImageUrl} alt="channel logo" />
          <ChannelDescriptionCard>
            <ChannelName>{name}</ChannelName>
            <ChannelSubCount>{subscriberCount} subscribers</ChannelSubCount>
            <ChannelDescription>{description}</ChannelDescription>
          </ChannelDescriptionCard>
        </ChannelDetailsContainer>
      </SuccessViewContainer>
    )
  }

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
      <VideoItemDetailsContainer>
        <Header />
        <MainContainer>
          <SideNavMenu />
          {this.renderListView()}
        </MainContainer>
      </VideoItemDetailsContainer>
    )
  }
}

export default VideoItemDetails
