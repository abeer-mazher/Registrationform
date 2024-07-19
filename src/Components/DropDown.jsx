import React from 'react'

function DropDown({label,options,classes,value,setValue}) {
  return (
    <div className={`w-full ${classes}`}>
        <label className='uppercase'>{label}</label><br />
        <select name="" id="" className='w-full border-2 px-2 py-1' required value={value} onChange={(e)=>setValue(e.target.value)}>
            <option value="">--select--</option>
            {
                options.map((e,i)=>{
                    return(
                        <option key={i} className='capitalize' value={e}>{e}</option>

                    )
                })
            }
        </select>
    </div>
  )
}

export default DropDown