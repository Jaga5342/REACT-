import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function LineItem ({item,handleCheck,handleDelete,handleEdit }){
  return (
    <li className="item" key={item.id}>
      <input
          type="checkbox"
          onChange ={() => handleCheck(item.id)}
          checked={item.checked}
      />

      <label 
      style = { (item.checked) ? {textDecoration:'line-through'} : null }
      onDoubleClick={() => handleCheck(item.id)}>{item.item}</label>
       <EditIcon
        onClick = {() => handleEdit(item.id)}
        role="button"
        tabIndex="0"
        aria-label ={`Delete ${item.item}`}
       />
       <DeleteIcon 
       onClick ={() => handleDelete(item.id)}
        role="button"
        tabIndex="0"
        aria-label ={`Edit ${item.item}`}
       />
      </li>
  )
}

export default LineItem
