import React, { Component } from 'react';

export default class SearchBar extends Component{
  render (){
    return (
      <div className="col-xs-12">
        <div className="jumbotron">
          <h1>{this.props.message || 'CLDR Delimiter Filters'}</h1>
        </div>
      </div>
    );
  }
}
