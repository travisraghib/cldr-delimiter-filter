import React, {Component} from 'react';
import Table from './table';

const SearchList = (props) => {
  const delimiterData = props.delimiterData;
  const searchTerm = props.searchTerm;
  // console.log(props.searchTerm);
  if(!props.searchTerm) {
    return (
      <div className="col-xs-12">
        <p className="lead">Enter a search term to begin</p>
        <Table delimiterData={delimiterData} searchTerm={searchTerm}/>
      </div>
    )
  }
  return (
    <div className="col-xs-12">
      <Table delimiterData={delimiterData} searchTerm={searchTerm}/>
    </div>
  );
};


export default SearchList;
