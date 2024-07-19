import React from 'react'

function UserData({users}) {
  return (
    <div className='w-full px-5'>
        <table className='w-full'>
            <thead>
                <tr>
                    <th className='border'>First Name</th>
                    <th className='border'>Last Name</th>
                    <th className='border'>Email</th>
                    <th className='border'>Passowrd</th>
                    <th className='border'>Organization</th>
                    <th className='border'>Field</th>
                    <th className='border'>Course</th>
                </tr>
                </thead>
                <tbody>
                    {
                        users.map((e,i)=>{
                            return(
                                <tr className='text-center'>
                                 <td className='border'>{e.fName}</td>
                                 <td className='border'>{e.lName}</td>
                                 <td className='border'>{e.email}</td>
                                 <td className='border'>{e.passowrd}</td>
                                 <td className='border'>{e.Org}</td>
                                 <td className='border'>{e.Field}</td>
                                 <td className='border'>{e.Course}</td>
                                 </tr>
                            )
                        })
                    

                }
                </tbody>
        </table>
    </div>
  )
}

export default UserData