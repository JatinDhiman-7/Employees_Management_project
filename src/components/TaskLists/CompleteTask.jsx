import React from 'react'

const CompleteTask = ({ data }) => {
    return (
        <div className="p-5 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/10">
            
            {/* Top Row */}
            <div className='flex justify-between items-center'>
                <h3 className='bg-gradient-to-r from-rose-500 to-red-600 text-white text-xs sm:text-sm px-3 py-1 rounded-full shadow'>
                    {data.category}
                </h3>

                <h4 className='text-xs sm:text-sm text-gray-400'>
                    {data.taskDate}
                </h4>
            </div>

            {/* Title */}
            <h2 className='mt-4 text-lg sm:text-xl lg:text-2xl font-semibold text-white leading-snug'>
                {data.taskTitle}
            </h2>

            {/* Description */}
            <p className='text-xs sm:text-sm mt-2 text-gray-400 leading-relaxed'>
                {data.taskDescription}
            </p>

            {/* Completed Button */}
            <div className='mt-5'>
                <button className='w-full bg-gradient-to-r from-gray-500 to-gray-600 text-white text-sm px-4 py-2 rounded-lg shadow-inner cursor-not-allowed opacity-80'>
                    Completed
                </button>
            </div>
        </div>
    )
}

export default CompleteTask