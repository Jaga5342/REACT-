import React from 'react'

const Footer = ({length}) => {
  
  return (
    <footer>
       List {length ===1 ? "item" : "items"} -> {length}
    </footer>
  );
}

export default Footer

