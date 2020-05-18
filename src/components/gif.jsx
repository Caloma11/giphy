import React, { Component } from 'react';


class Gif extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.id !== this.props.id;
    }


    render() {

        let src = ""

        if (this.props.id) {
            src = `https://i.giphy.com/media/${this.props.id}/200w.gif`;
        } else {
            src = "";
        }


        if (this.props.select) {
            return(
                <img src={src} alt="" id={this.props.id} className="gif" onClick={this.props.select} />
            )
        }

        return(
            <img src={src} alt="" id={this.props.id} className="gif" />
        )
    }
}

export default Gif
