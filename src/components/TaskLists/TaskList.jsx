import React from 'react'

const TaskList = () => {
    return (
        <div
            id="tasklist"
            className="
                w-full mt-10
                grid gap-5
                grid-cols-1 
                sm:grid-cols-2 
                lg:grid-cols-3 
                xl:grid-cols-4
            "
        >
            {[
                'bg-yellow-400',
                'bg-green-400',
                'bg-red-400',
                'bg-blue-400',
                'bg-purple-400'
            ].map((bg, i) => (
                <div key={i} className={`p-5 ${bg} rounded-xl`}>
                    <div className='flex justify-between items-center'>
                        <h3 className='bg-red-600 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded'>
                            High
                        </h3>
                        <h4 className='text-xs sm:text-sm'>20 Feb 2024</h4>
                    </div>

                    <h2 className='mt-4 text-lg sm:text-xl lg:text-2xl font-semibold'>
                        Make a youtube video
                    </h2>

                    <p className='text-xs sm:text-sm mt-2'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Asperiores minima possimus reprehenderit.
                    </p>
                </div>
            ))}
        </div>
    )
}

export default TaskList