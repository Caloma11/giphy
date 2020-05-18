import React, { Component } from 'react';
import Gif from './gif.jsx'

const GifList = ({selectGif, gifs}) => {
    const list = gifs.map(({id}) => {
        return <Gif id={id} key={id} select={selectGif}/>
    })
    return(
        <div className="gif-list">
            {list}
        </div>
    )
}

export default GifList
