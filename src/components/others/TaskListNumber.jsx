import React from 'react'

const TaskListNumber = () => {
    const data = [
        { color: 'bg-red-400', title: 'New Task' },
        { color: 'bg-blue-400', title: 'Completed Task' },
        { color: 'bg-green-400', title: 'Accepted Task' },
        { color: 'bg-yellow-400', title: 'Failed Task' },
    ]

    return (
        <div
            className="
                grid gap-5 mt-10
                grid-cols-1 
                sm:grid-cols-2 
                lg:grid-cols-4
            "
        >
            {data.map((item, i) => (
                <div
                    key={i}
                    className={`rounded-xl py-6 px-6 sm:px-8 ${item.color}`}
                >
                    <h1 className='text-2xl sm:text-3xl font-semibold'>0</h1>
                    <h3 className='text-lg sm:text-xl font-medium'>
                        {item.title}
                    </h3>
                </div>
            ))}
        </div>
    )
}

export default TaskListNumber