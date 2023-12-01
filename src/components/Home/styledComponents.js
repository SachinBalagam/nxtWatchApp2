import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const HomeContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
`

export const MainContainer = styled.div`
  display: flex;
  width: 100%;
`
export const BannerAndListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  height: 300px;
  display: flex;
  justify-content: space-between;
  padding: 20px;
`
export const BannerCard = styled.div``

export const BannerLogo = styled.img`
  width: 150px;
`
export const BannerDescription = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  width: 400px;
`
export const BannerButton = styled.button`
  border: 2px solid black;
  background-color: transparent;
  font-family: 'Roboto';
  font-weight: 500;
  height: 40px;
  width: 150px;
`
export const BannerCloseButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 25px;
  align-self: flex-start;
  cursor: pointer;
`
export const SearchAndListContainer = styled.div`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-top: 10px;
`

export const LoadingViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`
export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const FailureViewImage = styled.img`
  width: 200px;

  @media screen and (min-width: 768px) {
    width: 400px;
  }
`
export const FailureViewHeading = styled.h1`
  font-family: 'Roboto';
`
export const FailureViewDescription = styled.p`
  font-family: 'Roboto';
  text-align: center;
`
export const FailureViewButton = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  height: 30px;
  width: 100px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
`

export const SearchBarContainer = styled.div`
  margin: 20px;
  background-color: #ffffff;
  height: 35px;
  width: 300px;
  display: flex;
  align-items: center;
  border: 1px solid #e2e8f0;
`
export const SearchInput = styled.input`
  border: none;
  width: 275px;
  height: 100%;
  outline: none;
  padding: 5px;
`
export const SearchButton = styled.button`
  height: 100%;
  background-color: #e2e8f0;
  border: #e2e8f0;
  cursor: pointer;
`

export const SuccessViewContainer = styled.ul`
  list-style-type: none;
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
`

export const EachVideoContainer = styled.li`
  width: 300px;
  margin: 20px;
`
export const CustomLink = styled(Link)`
  text-decoration: none;
`
export const ImageContainer = styled.div``
export const VideoThumbnail = styled.img`
  width: 300px;
`
export const ImageAndDescriptionContainer = styled.div`
  display: flex;
  align-items: flex-start;
`
export const DescriptionContainer = styled.div``
export const VideoTitle = styled.p`
  margin-top: 0;
  font-family: 'Roboto';
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
`
export const ChannelThumbnailContainer = styled.div``
export const ChannelThumbnail = styled.img`
  width: 30px;
  margin-right: 10px;
  margin-left: 10px;
`
export const ChannelName = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  font-family: 'Roboto';
  color: #475569;
`
export const Views = styled.p`
  font-family: 'Roboto';
  color: #475569;
`
export const PublishedAt = styled.p`
  font-family: 'Roboto';
  color: #475569;
`
export const ViewCountAndPublishContainer = styled.div`
  margin-top: 0;
  display: flex;
  align-items: center;
`
export const NoVideosViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const NoVideosViewImage = styled.img`
  width: 300px;
`
export const NoVideosViewHeading = styled.h1``
export const NoVideosViewDescription = styled.p``
export const NoVideosViewButton = styled.button`
  border: none;
  background-color: #4f46e5;
  color: #ffffff;
  cursor: pointer;
  height: 35px;
  width: 100px;
  border-radius: 5px;
`
