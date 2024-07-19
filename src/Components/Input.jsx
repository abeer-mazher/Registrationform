import React from 'react'

function Input({label,type,place,classes,value,setValue}) {
  return (
    <div className={`w-full ${classes}`}>
        <label className='uppercase'>{label}</label><br />
        <input value={value} onChange={(e)=>setValue(e.target.value)} required type={type} className='w-full border-2 px-2 py-1' placeholder={place}/>
    </div>
  )
}

export default Input