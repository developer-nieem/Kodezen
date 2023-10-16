import { useState } from 'react'
import './App.css'
import {  FaPlus, FaUndoAlt, } from "react-icons/fa";




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='row w-9/12 mx-auto mt-28 items-center'>

      {/* Text customize part */}
      <div className='md:col-6 bg-slate-200 p-6 '>

        {/* Editor Heading */}
        <div className='flex justify-between items-center shadow-md p-3'>
          <div><span className='font-semibold'>Typography</span> </div>

          <div className='flex gap-4'>
            <FaUndoAlt></FaUndoAlt>
            <FaPlus></FaPlus>
          </div>
           
        </div>
 {/* Editor Heading  End*/}

         {/* Font family part */}
         <div className='flex justify-between items-center my-6'>
              <div>
                <span>Family</span>
              </div>
              <div>
                
                <select className='p-2 rounded-sm' name="" id="">
                  <option value >Default</option>
                  <option value="roboto">Roboto</option>
                  <option value="arial">Arial</option>
                  
                </select>
              </div>
            </div>
            {/* Font family part end*/}



      </div>

      {/* Output part */}
      <div className='md:col-6'>
d
      </div>
     </div>
    </>
  )
}

export default App
