import React from 'react'

const ThemeContext = React.createContext({
  isDarkTheme: false,
  onChangeTheme: () => {},
  activeTab: 'Home',
  changeTab: () => {},
  savedVideos: [],
  addVideo: () => {},
})

export default ThemeContext
