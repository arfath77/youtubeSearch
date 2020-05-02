import React from 'react';
import SearchBox from './SearchBox';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';

const KEY = 'AIzaSyDIFvmxHlpGVWKW6aVf_mPoUiRBfOU0kK8'

class App extends React.Component {
    
    state = {videos : [], selectedVideo: null};
    componentDidMount(){
        this.onEnter('bike top speed')
    };
    onEnter = async (term) => {
        const response = await youtube.get("/search", {
            params: {
                q: term,
                part: "snippet",
                maxResults: 5,
                type: 'video',
                key: `${KEY}`
            }
        })
        this.setState({videos:response.data.items, 
            selectedVideo: response.data.items[0]})
    } 
    onVideoSelect = video => {
        this.setState({selectedVideo : video})
    }
    render() {
        return (
            <div className="ui container">
                <SearchBox onEnter = {this.onEnter}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetails video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList videos={this.state.videos} videoSelected={this.onVideoSelect}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;