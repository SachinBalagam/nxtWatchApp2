import styled from 'styled-components'

export const VideoItemDetailsContainer = styled.div``
export const MainContainer = styled.div`
  display: flex;
  min-height: 80vh;

  @media screen and (min-width: 768px) {
    display: flex;
    width: 100%;
  }
`
export const VideoItemDetailsCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const LoadingViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
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

export const SuccessViewContainer = styled.div`
  padding: 10px;
`
export const SuccessViewHeading = styled.p`
  font-family: 'Roboto';
  margin-bottom: 5px;
`
export const SubContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
export const CountAndDateContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0;
`
export const ViewCount = styled.p`
  font-family: 'Roboto';
`
export const PublishDate = styled.p`
  font-family: 'Roboto';
`
export const LikeDislikeContainer = styled.div`
  display: flex;
`
export const LikeContainer = styled.button`
  display: flex;
  align-items: center;
  margin-right: 20px;
  background-color: transparent;
  border: none;
  font-family: 'Roboto';
  cursor: pointer;
`

export const Like = styled.p`
  font-family: 'Roboto';
  margin-left: 5px;
`
export const DislikeContainer = styled.button`
  display: flex;
  align-items: center;
  margin-right: 20px;
  background-color: transparent;
  border: none;
  font-family: 'Roboto';
  cursor: pointer;
`
export const Dislike = styled.p`
  font-family: 'Roboto';
  margin-left: 5px;
`
export const SavedContainer = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  font-family: 'Roboto';
  cursor: pointer;
`
export const Saved = styled.p`
  font-family: 'Roboto';
  margin-left: 5px;
`

export const VideoPlayer = styled.div`
  display: flex;
  justify-content: center;
`
export const ChannelDetailsContainer = styled.div`
  display: flex;
`
export const ChannelImage = styled.img`
  width: 50px;
  align-self: flex-start;
  margin-right: 20px;
`
export const ChannelDescriptionCard = styled.div``

export const ChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 0;
`
export const ChannelSubCount = styled.p`
  font-family: 'Roboto';
  color: #94a3b8;
  margin-top: 0;
  margin-bottom: 50px;
`
export const ChannelDescription = styled.p`
  font-family: 'Roboto';
`
