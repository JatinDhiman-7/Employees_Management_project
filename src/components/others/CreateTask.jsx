import React from 'react'

const CreateTask = () => {
    return (
        <div>
            <div className='mt-6'>
                {/* Use grid for larger screens, flex-col for mobile */}
                <form className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto'>

                    <div className='flex flex-col'>
                        <h3 className='mb-2'>Task Title</h3>
                        <input
                            className='border-2 border-emerald-500 bg-transparent rounded-md p-3 outline-none w-full'
                            type="text"
                            placeholder='Make a UI Design'
                        />
                    </div>

                    <div className='flex flex-col md:col-span-2 lg:col-span-3'>
                        <h3 className='mb-2'>Description</h3>
                        <textarea
                            className='border-2 border-emerald-500 bg-transparent rounded-md p-3 outline-none w-full'
                            rows="5"
                            placeholder='Enter task description'
                        ></textarea>
                    </div>

                    <div className='flex flex-col'>
                        <h3 className='mb-2'>Date</h3>
                        <input
                            className='border-2 border-emerald-500 bg-transparent rounded-md p-3 outline-none w-full'
                            type="date"
                        />
                    </div>

                    <div className='flex flex-col'>
                        <h3 className='mb-2'>Assign to</h3>
                        <input
                            className='border-2 border-emerald-500 bg-transparent rounded-md p-3 outline-none w-full'
                            type="text"
                            placeholder='Enter employee name'
                        />
                    </div>

                    <div className='flex flex-col'>
                        <h3 className='mb-2'>Category</h3>
                        <input
                            className='border-2 border-emerald-500 bg-transparent rounded-md p-3 outline-none w-full'
                            type="text"
                            placeholder='Design, Dev, etc'
                        />
                    </div>

                    <div className='md:col-span-2 lg:col-span-3'>
                        <button
                            className='bg-emerald-600 hover:bg-emerald-700 rounded-md py-3 w-full transition'
                        >
                            Create Task
                        </button>
                    </div>

                </form>
            </div>
        </div>


    )
}

export default CreateTask