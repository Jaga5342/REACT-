import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function LineItem ({item,handleCheck,handleDelete,handleEdit }){
  return (
    <li className="item justify-content-between align-items-center" key={item.id}>
    
     
      <input
          className="form-check-input"
          type="checkbox"
          onChange ={() => handleCheck(item.id)}
          checked={item.checked}
      />

      <label 
      style = { (item.checked) ? {textDecoration:'line-through'} : null }
      onDoubleClick={() => handleCheck(item.id)}>{item.item}</label>
       <i
       className= "bi bi-pencil-square me-3 text-primary"
        onClick = {() => handleEdit(item.id)}
        role="button"
        tabIndex="0"
        aria-label ={`Delete ${item.item}`}
        ></i>
       <i
       className="bi bi-trash me-3  text-primary"
       onClick ={() => handleDelete(item.id)}
        role="button"
        tabIndex="0"
        aria-label ={`Edit ${item.item}`}
       ></i>
       
      </li>
  )
}

export default LineItem
