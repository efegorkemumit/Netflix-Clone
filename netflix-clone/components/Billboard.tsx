import useBillboard from '@/hooks/useBillboard'
import React from 'react'

function Billboard() {
    const {data} = useBillboard();
  return (
    <div className='relative h-[32rem]'>

        {data?.title}




    </div>
  )
}

export default Billboard