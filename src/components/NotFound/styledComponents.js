import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  background-color: #f9f9f9;
`

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;

  @media screen and (min-width: 768px) {
    display: flex;
    width: 100%;
  }
`
export const NotFoundViewCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`
export const NotFoundImage = styled.img`
  width: 300px;

  @media screen and (min-width: 768px) {
    width: 500px;
  }
`
export const NotFoundHeading = styled.h1`
  font-family: 'Roboto';
`
export const NotFoundDescription = styled.p`
  margin-top: 0;
  font-family: 'Roboto';
`
