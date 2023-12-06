import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const TrendingContainer = styled.div`
  background-color: #f9f9f9;
`
export const MainContainer = styled.div`
  display: flex;
  min-height: 80vh;

  @media screen and (min-width: 768px) {
    display: flex;
    width: 100%;
  }
`
export const TrendingCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const HeadingContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f1f1f1;
  padding: 10px;
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
  min-height: 80vh;
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
export const SuccessListViewContainer = styled.ul`
  list-style-type: none;
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
`
export const EachVideoCard = styled.li`
  display: flex;
`
export const Image = styled.img`
  width: 200px;
  margin-right: 10px;
`
export const DescriptionContainer = styled.div``

export const Title = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: #000000;
  margin-bottom: 5px;
`

export const ViewCount = styled.p`
  font-family: 'Roboto';
  color: #94a3b8;
  margin-top: 0;
`

export const CustomLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  margin: 20px;
`

export const DescriptionCard = styled.div``