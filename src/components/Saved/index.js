import {Component} from 'react'
import {HiFire} from 'react-icons/hi'
import Header from '../Header'
import SideNavMenu from '../SideMenu'
import {
  SavedContainer,
  MainContainer,
  SavedCard,
  NoVideosContainer,
  NoVideosImage,
  NoVideosHeading,
  NoVideosDescription,
  HeadingContainer,
  CustomLink,
} from './styledComponents'
import ThemeContext from '../../ThemeContext'

class Saved extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {savedVideos, isDarkTheme} = value
          return (
            <SavedContainer isdark={isDarkTheme} data-testid="savedVideos">
              <Header />
              <MainContainer>
                <SideNavMenu />
                <SavedCard>
                  {savedVideos.length > 0 ? (
                    <>
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
                        <h1>Saved Videos</h1>
                      </HeadingContainer>
                      <ul>
                        {savedVideos.map(each => (
                          <li key={each.id}>
                            <CustomLink to={`/videos/${each.id}`}>
                              <img src={each.thumbnailUrl} alt="thumbnail" />
                              <p>{each.title}</p>
                              <p>{each.channel.name}</p>
                              <p>
                                {each.viewCount} views &#183; {each.publishedAt}
                              </p>
                            </CustomLink>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <NoVideosContainer>
                      <NoVideosImage
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                        alt="no saved videos"
                      />
                      <NoVideosHeading isdark={isDarkTheme}>
                        Saved Videos Found
                      </NoVideosHeading>
                      <NoVideosDescription isdark={isDarkTheme}>
                        You can save your videos while watching them
                      </NoVideosDescription>
                    </NoVideosContainer>
                  )}
                </SavedCard>
              </MainContainer>
            </SavedContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Saved
