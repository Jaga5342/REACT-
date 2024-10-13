import React from 'react'
const hdstyle={backgroundColor:"blue",color:"white"};

const Header = (props) => {
  return (
    <header style={hdstyle} >
    <h1>{props.name}</h1>
    </header>
  )
}

Header.defaultProps = {
  name:"TODO-LIST"
}
export default Header
