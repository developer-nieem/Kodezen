import { useState } from 'react'
import './App.css'
import {  FaPlus, FaUndoAlt, } from "react-icons/fa";




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='row w-9/12 mx-auto mt-2 mb-28 items-center'>

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

              {/* Size part */}

              <div>
                <h2>Size</h2>
                
                  <div className='flex justify-between'>
                  <input className='w-72' type="range" id="vol" name="vol" min="0" max="200"/>

                  <input className='p-1 rounded-sm ' type="number" min="1" max="200" step="1" placeholder="" data-setting="size"></input>
                  </div>
              </div>
              {/* Size End */}

{/* Weight part  */}

      <div className='flex justify-between items-center my-6'>
              <div>
                <span>Weight</span>
              </div>
              <div>
                
                <select className='p-2 rounded-sm' name="" id="">
                  <option value >Default</option>
                  <option value="100">100</option>
                  <option value="200">200</option>
                  <option value="300">300</option>
                  <option value="400">400</option>
                  <option value="500">500</option>
                  <option value="600">600</option>
                  <option value="700">700</option>
                  <option value="800">800</option>    
                </select>
              </div>
            </div>

{/* Weight part End */}


{/* Transform part  */}

      <div className='flex justify-between items-center my-6'>
              <div>
                <span>Transform</span>
              </div>
              <div>
                
                <select className='p-2 rounded-sm' name="" id="">
                  <option value >Default</option>
                  <option value="uppercase">UpperCase</option>
                  <option value="lowercase">LowerCase</option>
                  <option value="capitalize">Capitalize</option>
                  <option value="normal">Normal</option>
                     
                </select>
              </div>
            </div>

{/* Transform part End */}

{/* Style part  */}

      <div className='flex justify-between items-center my-6'>
              <div>
                <span>Style</span>
              </div>
              <div>
                <select className='p-2 rounded-sm' name="" id="">
                  <option value >Default</option>
                  <option value="normal">Normal</option>
                  <option value="italic">Italic</option>
                  <option value="oblique">Oblique</option>
                </select>
              </div>
            </div>

{/* Style part End */}


{/* Decoration part  */}

      <div className='flex justify-between items-center my-6'>
              <div>
                <span>Decoration</span>
              </div>
              <div>
                <select className='p-2 rounded-sm' name="" id="">
                  <option value >Default</option>
                  <option value="underline">Underline</option>
                  <option value="overline">Overline</option>
                  <option value="through">Line Through</option>
                  <option value="normal">normal</option>
                </select>
              </div>
            </div>

{/* Decoration part End */}


        {/* Line-Height part */}

           <div className='my-2'>
                <h2>Line-Height</h2>
                
                  <div className='flex justify-between'>
                  <input className='w-72' type="range" id="vol" name="vol" min="0" max="200"/>

                  <input className='p-1 rounded-sm ' type="number" min="1" max="200" step="1" placeholder="" data-setting="line"></input>
                  </div>
              </div>
              
              {/* Line-Height End */}



        {/* Letter Spacing part */}
           <div className='my-2'>
                <h2>Letter Spacing</h2>
                
                  <div className='flex justify-between'>
                  <input className='w-72' type="range" id="vol" name="vol" min="0" max="200"/>

                  <input className='p-1 rounded-sm ' type="number" min="1" max="200" step="1" placeholder="" data-setting="line"></input>
                  </div>
              </div>
              {/* Letter Spacing End */}

              
        {/* Word Spacing part */}
           <div className='my-2'>
                <h2>Word Spacing</h2>
                
                  <div className='flex justify-between'>
                  <input className='w-72' type="range" id="vol" name="vol" min="0" max="200"/>

                  <input className='p-1 rounded-sm ' type="number" min="1" max="200" step="1" placeholder="" data-setting="line"></input>
                  </div>
              </div>
              {/* Word Spacing End */}


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
