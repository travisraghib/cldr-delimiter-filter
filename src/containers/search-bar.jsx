import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {searchDelimiter} from '../actions';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {term: ''};
    this.validDelimiters = [
      '',
      'alternateQuotationEnd',
      'alternateQuotationStart',
      'quotationEnd',
      'quotationStart'
    ];

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({term: event.target.value});
  }

  handleFormSubmit(event) {
    event.preventDefault();
    if(this.validDelimiters.indexOf(this.state.term) !== -1) {
      this.props.searchDelimiter(this.state.term);
    } else {
      alert(`"${this.state.term}" is not a valid search term`);
    }

    // return this.setState({term: ''});
  }

  render() {
    return (
      <div className="col-xs-6">
        <form onSubmit={this.handleFormSubmit.bind(this)} className="input-group">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search delimters"
              value={this.state.term}
              onChange={this.handleInputChange}
            />
            <span className="input-group-btn">
              <button className="btn btn-primary" type="submit">Go!</button>
            </span>
          </div>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({searchDelimiter}, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)