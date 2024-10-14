import React from 'react'

import LineItem from './LineItem';

function ItemList({values,handleCheck,handleDelete,handleEdit}) {
  return (
    <ul>
     {values.map ((item) => (
       <LineItem 
        item ={item}
        key ={item.id}
        handleCheck ={handleCheck}
        handleDelete ={handleDelete}
        handleEdit ={handleEdit}
       />
     ))}
    
  </ul>
  )
}

export default ItemList
