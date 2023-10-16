import { useState } from "react";

const RangeNumberInput = ({min, max, step,  onChange}) => {

    const [value, setValue] = useState();

    const handleRange= (e) => {
        const newValue =  e.target.value
        setValue(newValue)
        onChange(newValue)
    }
    const handleNumber= (e) => {
        const newValue =  e.target.value
        setValue(newValue)
        onChange(newValue)
    }


    return (
         <div className='flex justify-between'>
                  <input className='w-72' type="range" id="vol" name="vol" min={min} max={max} step={step} value={value} onChange={handleRange}/>

                  <input className='p-1 rounded-sm ' type="number" min={min} max={max}  step={step}  value={value} onChange={handleNumber}></input>
        </div>
    );
};

export default RangeNumberInput;