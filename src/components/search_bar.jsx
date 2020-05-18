import React, { Component } from 'react';



class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            term : ""
        }
    }

    handleUpdate = (e) => {
        this.setState({
            term: e.currentTarget.value
        })
        this.props.handleSearch(e.currentTarget.value);
    }

    render() {
        return(
            <input type="text" value={this.state.term} className="form-control form-search"
            onChange={this.handleUpdate}
            />
        )
    }
}

export default SearchBar
