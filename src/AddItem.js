import React from 'react'
import AddIcon from '@mui/icons-material/Add';
const AddItem = ({newItem,setNewItem,handleSubmit}) => {
  return (
   <form className='addForm d-flex justify-content-center align-items-center mb-1' onSubmit ={handleSubmit}>
   <div className="input-group ">
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
   
   className="bi bi-plus-lg bg-primary"
   type="submit"
   aria-label ="Add Item"
   >
   </button>
   </div>
   </form>
  )
}

export default AddItem
