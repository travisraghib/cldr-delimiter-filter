import React from 'react';

const Header = (props) => {
    return (
      <div className="col-xs-12">
        <div className="jumbotron">
          <h1>{props.message || 'CLDR Delimiter Filters'}</h1>
        </div>
      </div>
    );
}

export default Header;