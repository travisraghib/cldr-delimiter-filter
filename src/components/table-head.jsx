import React from 'react';

const TableHead = (props) => {
  const searchTerm = props.searchTerm;
  
  if(!searchTerm){
    return (
      <tr>
        <th className="small">Locale Id</th>
        <th className="small">alternateQuotationEnd</th>
        <th className="small">alternateQuotationStart</th>
        <th className="small">quotationEnd</th>
        <th className="small">quotationStart</th>
      </tr>
    );
  }
  return (
    <tr>
      <th className="small">Locale Id</th>
      <th className="small">{searchTerm}</th>
    </tr>
  )

};

export default TableHead;
