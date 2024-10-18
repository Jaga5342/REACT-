
import React from 'react'
import ItemList from './ItemList';

const Content = ({values,handleCheck,handleDelete,handleEdit,handleSave}) => {

  return (
  <main>
  <div className="container justify-content-center align-items-center ">
     <div className="row">
     <div className ="col-12 ">
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
     <p className="text-center " style={{ marginTop:'7rem'}}>The List is EMPTY</p>
     )
     }
     </div>
     </div>
    </div>
  </main>
  )
}
export default Content

