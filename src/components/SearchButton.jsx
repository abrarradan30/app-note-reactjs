import React from "react";

class SearchButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
        }

        this.onSearchChangeHandler = this.onSearchChangeHandler.bind(this);
    }

    onSearchChangeHandler(event) {
        this.setState({ title: event.target.value });
        this.props.searchNote(event.target.value);
    }

    render() {
        return (
            <div className="note-search">
                <label>🔎</label> &nbsp;
                <input type="text" placeholder="Search note ..." 
                    value={this.state.title} onChange={this.onSearchChangeHandler}/>
            </div>
        )
    }
}

export default SearchButton;