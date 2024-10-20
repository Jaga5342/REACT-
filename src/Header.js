import React from 'react';

// Define the header style


const Header = (props) => {
  return (
    <header className="bg-primary text-white " >
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8 offset-md-2">
            <h1 className="text-center py-3">{props.name}</h1>
          </div>
        </div>
      </div>
    </header>
  );
};

// Default props for the component
Header.defaultProps = {
  name: 'TODO-LIST',
};

export default Header;



