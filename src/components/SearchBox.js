import React from 'react';

class SearchBox extends React.Component {
    state = {term : ''}
    onSearch = (event) => {
        this.setState({term : event.target.value});
    }
    onSubmit = (event) => {
        event.preventDefault();

        this.props.onEnter(this.state.term);
    }
    render() {
        return (
            <div className="serch-box ui segment">
                <form className="ui form" onSubmit={this.onSubmit}>
                    <label>Video Search</label>
                    <input type="text" 
                        value={this.state.term} 
                        onChange = {this.onSearch}/>
                </form>
            </div>
        )
    }
}

export default SearchBox;