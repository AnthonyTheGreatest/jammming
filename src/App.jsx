import { useState } from 'react'
import './App.css'
import PlaylistContainer from './containers/PlaylistContainer'
import SearchBarContainer from './containers/SearchBarContainer'
import SearchResultsContainer from './containers/SearchResultsContainer'
import TracklistContainer from './containers/TracklistContainer'
import TrackContainer from './containers/TrackContainer'


// "Make sure that your interface has a
//  Save To Spotify button and a Search button."

function App() {
  return (
    <>
      <SearchBarContainer />
      <SearchResultsContainer />
      <PlaylistContainer />
      <TracklistContainer />
      <TrackContainer />
    </>
  )
}

export default App
