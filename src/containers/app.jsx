import React, {Component} from 'react';
import Header from '../components/header';
import SearchBar from './search-bar';
import SearchList from '../components/search-list';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchDelimeterData } from '../actions';

class App extends Component {
  componentDidMount(){
    this.props.fetchDelimeterData();
  }
  render() {
    if(!this.props.data.delimiterList){
      return(
        <Header message="Loading..."></Header>
      );
    }
    return (
      <div className="row" >
        <div className="col-xs-12">
          <div className="row">
            <Header/>
          </div>
          <div className="row">
            <SearchBar/>
          </div>
          <div className="row">
            <hr/>
            <SearchList
              delimiterData={ this.props.data.delimiterList }
              searchTerm={this.props.data.term}
            />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    data : state.data
  }
}

function mapDispatchToProps (dispatch){
  return bindActionCreators({ fetchDelimeterData }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)