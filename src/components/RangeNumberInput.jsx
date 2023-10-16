import { useState } from "react";

const RangeNumberInput = ({min, max, steps}) => {

    const [value, setValue] = useState('');

    const handleRange= (e) => {
        const newValue =  parseInt(e.target.value)
        setValue(newValue)
    }
    const handleNumber= (e) => {
        const newValue =  parseInt(e.target.value)
        setValue(newValue)
    }


    return (
         <div className='flex justify-between'>
                  <input className='w-72' type="range" id="vol" name="vol" min={min} max={max} value={value} onChange={handleRange}/>

                  <input className='p-1 rounded-sm ' type="number" min={min} max={max} value={value} step={steps} placeholder="" data-setting="line" onChange={handleNumber}></input>
        </div>
    );
};

export default RangeNumberInput;