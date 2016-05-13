import React, {Component} from 'react';
import TableHead from './table-head';

const Table = (props) => {
  const delimiterData = props.delimiterData;
  const searchTerm = props.searchTerm;
  const tableList = (searchTerm)? generateFilteredList(delimiterData, searchTerm) : generateFullList(delimiterData);
  
  return (
    <table className="table table-striped table-condensed">
      <tbody>
      <TableHead searchTerm={searchTerm}/>
      { tableList }
      </tbody>
    </table>
  );
};

function generateFullList(delimiterData){
  return delimiterData.map((delimiterObj, index)=>{
    return(
      <tr key={index}>
        <td>{delimiterObj.localeId}</td>
        <td>{delimiterObj.delimiter.alternateQuotationEnd}</td>
        <td>{delimiterObj.delimiter.alternateQuotationStart}</td>
        <td>{delimiterObj.delimiter.quotationEnd}</td>
        <td>{delimiterObj.delimiter.quotationEnd}</td>
      </tr>
    )
  });
}

function generateFilteredList(delimiterData, searchTerm){
  return delimiterData.map((delimiterObj, index)=>{
    return(
      <tr key={index}>
        <td>{delimiterObj.localeId}</td>
        <td>{delimiterObj.delimiter[searchTerm]}</td>
      </tr>
    )
  });
}

export default Table;
