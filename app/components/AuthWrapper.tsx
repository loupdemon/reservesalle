type Wrapperprops = {
    children : React.ReactNode
}

import React from 'react'
import { CalendarCheck } from 'lucide-react'

const AuthWrapper = ({children} : Wrapperprops) => {
  return (
    <div className='h-screen flex justify-center items-center flex-col '>
    <div className='flex items-center mb-6'>

        <div className='bg-secondary p-1 mr-1 rounded-md text-white'>
          <CalendarCheck className='w-6 h-6' />
        </div>
        <span className='ml-3 font-bold text-3xl'>
            H.A.S<span className='text-secondary'>ALLE</span>
        </span>

    </div>

    <div>
        {children}
    </div>
</div>
)
}

export default AuthWrapper