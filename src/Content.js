

import React from 'react'

const content = () => {
    function handlename()
{
    const name=["Stone","Paper","Scissor"];
    const a=Math.floor(Math.random()*3);
    return name[a];
}
  return (
    <div>
      Stone vs {handlename()}
    </div>
  )
}

export default content


