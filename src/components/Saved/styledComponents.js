import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SavedContainer = styled.div`
  background-color: ${props => (props.isdark ? '#0f0f0f' : '#f9f9f9')};
`
export const MainContainer = styled.div`
  display: flex;
  min-height: 80vh;

  @media screen and (min-width: 768px) {
    display: flex;
    width: 100%;
  }
`
export const SavedCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const NoVideosContainer = styled.div`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const NoVideosImage = styled.img`
  width: 600px;
`
export const NoVideosHeading = styled.h1`
  font-family: 'Roboto';
  margin-bottom: 5px;
  color: ${props => (props.isdark ? '#ffffff' : '#000000')};
`
export const NoVideosDescription = styled.p`
  font-family: 'Roboto';
  margin-bottom: 0;
  color: ${props => (props.isdark ? '#ffffff' : '#000000')};
`
export const HeadingContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f1f1f1;
  padding: 10px;
`
export const CustomLink = styled(Link)``
