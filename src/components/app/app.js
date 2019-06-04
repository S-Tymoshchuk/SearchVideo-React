import React from "react";
import SearchBar from "../search-bar/search-bar";
import youtube from "../apis/youtube";
import VideoList from "../videolist/video-list";
import VideoDetail from "../video-details/video-details";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyAKjEK7bPOJ5uGuK5OEUTLo2e6ZEP-Uo4E"
      }
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  onVideoSelect = video => {
    this.setState({
      selectedVideo: video
    });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
