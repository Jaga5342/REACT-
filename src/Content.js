
import React from 'react'
import ItemList from './ItemList';

const Content = ({values,handleCheck,handleDelete,handleEdit,handleSave}) => {

  return (
  <main>
     {(values.length) ? (
       <ItemList 
          values ={values}
         handleCheck ={handleCheck}
         handleDelete ={handleDelete}
         handleEdit ={handleEdit}
         handleSave ={handleSave}
       />
      ) :
     (
     <p style={{ marginTop:'10rem'}}>The List is EMPTY</p>
     )
     }
  </main>
  )
}
export default Content




  return (
    <div>
    <p >Stone vs {values}</p>
      <button onClick={handlename}>Magic</button>
      </div>
  )
