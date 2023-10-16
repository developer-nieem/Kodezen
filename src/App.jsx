import { useState } from 'react'
import './App.css'
import {  FaPlus, FaUndoAlt, } from "react-icons/fa";
import RangeNumberInput from './components/RangeNumberInput';




function App() {
  
  const [text, setText] = useState('Customize me');
  const [fontFamily, setFontFamily] = useState('Default');
  const [fontSize, setFontSize] = useState(16); 
  const [fontWeight, setFontWeight] = useState('Default');
  const [textTransform, setTextTransform] = useState('Default');
  const [fontStyle, setFontStyle] = useState('Default');
  const [textDecoration, setTextDecoration] = useState('Default');
  const [lineHeight, setLineHeight] = useState(1); 
  const [letterSpacing, setLetterSpacing] = useState(0); 
  const [wordSpacing, setWordSpacing] = useState(0);

 console.log(fontSize);

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
                
                <select className='p-2 rounded-sm' value={fontFamily}  onChange={(e)=> setFontFamily(e.target.value)}>
                  <option value >Default</option>
                  <option value="Roboto">Roboto</option>
                  <option value="Arial">Arial</option>
                  
                </select>
              </div>
            </div>
            {/* Font family part end*/}

              {/* Size part */}

              <div>
                <h2>Size</h2>
                
                <RangeNumberInput min={0} max={200} onChange={(newValue)=>setFontSize(newValue)} ></RangeNumberInput>
                  
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
                 <RangeNumberInput min={1} max={100} ></RangeNumberInput>
              </div>
              
              {/* Line-Height End */}



        {/* Letter Spacing part */}
           <div className='my-2'>
                <h2>Letter Spacing</h2>
                <RangeNumberInput min={-5} max={10} steps={1} ></RangeNumberInput>
              </div>
              {/* Letter Spacing End */}

              
        {/* Word Spacing part */}
           <div className='my-2'>
                <h2>Word Spacing</h2>
                <RangeNumberInput min={-5} max={10} steps={1} ></RangeNumberInput>
              </div>
              {/* Word Spacing End */}


      </div>

      {/* Output part */}
      <div className='md:col-6'>

          <div>
             <h2 className='text-xl font-semibold my-5'>Customize Your text:-</h2>

             <textarea className='w-full h-44 bg-slate-100 border border-1 shadow-md outline-none p-3'  cols="30" rows="10" value={text} onChange={(e)=> setText(e.target.value)}
             
             style={{
              fontFamily: fontFamily !== 'Default' ? fontFamily: 'inherit',
              fontSize:`${fontSize}px`


             }}
             
             
             ></textarea>
          </div>

      </div>
     </div>
    </>
  )
}

export default App
