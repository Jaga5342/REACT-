import React from 'react'

const Footer = ({length}) => {
  
  return (
    <footer className="bg-primary text-white py-2">
    
    <div className="container">
        <div className="row">
          <div className="col-12  ">
            <p className="mb-0">
       List  {length ===1 ? "item" : "items"} = {length}
      </p>
      
       </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer

