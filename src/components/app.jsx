import React, { Component } from 'react';
import SearchBar from './search_bar.jsx'
import Gif from './gif.jsx'
import GifList from './gif_list.jsx'
import giphy from 'giphy-api'

class App extends Component {


    constructor(props)  {
        super(props);

        this.apiKey = "TsS6JrfVzFM0g4EwVV9CPxPOgAiTc8Aw";

        this.state = {
            gifs: [],
            selectedGifId: null
        };

    }

    search = (query) => {
        giphy(this.apiKey).search({
            q: query,
            rating: 'g',
            limit: 10
        }, (err, res) => {
            this.setState({gifs: res.data});
        });
    }


    select = (e) => {
        this.setState({gifs: this.state.gifs, selectedGifId: e.currentTarget.id})
    }

    render() {
        return(
            <div>
                <div className="left-scene">
                    <SearchBar handleSearch={this.search}/>
                    <div className="selected-gif">
                        <Gif id={this.state.selectedGifId} />
                    </div>
                </div>
                <div className="right-scene">
                    <GifList selectGif={this.select} gifs={this.state.gifs} />
                </div>
            </div>
        )
    }
}

export default App
