import React from 'react'
import AddIcon from '@mui/icons-material/Add';
const AddItem = ({newItem,setNewItem,handleSubmit}) => {
  return (
   <form className='addForm' onSubmit ={handleSubmit}>
   <label htmlFor="addItem">Add Item</label>
   <input 
   autoFocus
   id ='addItem'
   type="text"
    placeholder ="Add Item"
    required
    value ={newItem}
    onChange ={(e) => setNewItem(e.target.value)}
   />
   <button
   type="submit"
   aria-label ="Add Item"
   >
   <AddIcon
    />
    <label htmlFor="searchItem">Search Item</label>
   </button>
   </form>
  )
}

export default AddItem
