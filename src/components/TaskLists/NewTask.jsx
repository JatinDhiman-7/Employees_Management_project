import React from 'react'

const NewTask = ({data}) => {
  return (
         <div className={`p-5 rounded-xl`}>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded'>
                    {data.category}
                </h3>
                <h4 className='text-xs sm:text-sm'>{data.taskDate}</h4>
            </div>

            <h2 className='mt-4 text-lg sm:text-xl lg:text-2xl font-semibold'>
                {data.taskTitle}
            </h2>

            <p className='text-xs sm:text-sm mt-2'>
               {data.taskDescription}
            </p>

        <div className="mt-4">
            <button className='bg-green-500 py-1 px-2 text-sm'>Accept Task</button>
        </div>
        </div>
  )
}

export default NewTask