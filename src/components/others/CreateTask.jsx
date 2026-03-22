import React, { useState } from 'react'

const CreateTask = () => {
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDes, setTaskDesc] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [asignTo, setAsignTO] = useState('');
    const [category, setcategory] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    // 1️⃣ Validate fields
    if (!taskTitle || !taskDes || !taskDate || !asignTo || !category) {
        alert("All fields are required");
        return;
    }

    // 2️⃣ Create task object
    const taskObj = {
        taskTitle,
        taskDes,
        taskDate,
        category,
        active: false,
        newTask: true,
        failed: false,
        completed: false
    };

    // 3️⃣ Read employees from localStorage
    const data = JSON.parse(localStorage.getItem('employees')) || [];

    // 4️⃣ Find the employee and add the task
    let assigned = false;
    const updatedData = data.map(emp => {
        if (emp.firstname.toLowerCase() === asignTo.toLowerCase()) {
            assigned = true;
            return { ...emp, tasks: [...emp.tasks, taskObj] }; // immutable update
        }
        return emp;
    });

    if (!assigned) {
        alert("Employee not found");
        return;
    }

    // 5️⃣ Write updated data back to localStorage
    localStorage.setItem('employees', JSON.stringify(updatedData));

    // 6️⃣ Reset form fields
    setTaskTitle('');
    setTaskDesc('');
    setTaskDate('');
    setAsignTO('');
    setcategory('');

    console.log("Task added successfully!");
};


    return (
        <div>
            <div className='mt-6'>
                {/* Use grid for larger screens, flex-col for mobile */}
                <form onSubmit={submitHandler} className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto'>

                    <div className='flex flex-col'>
                        <h3 className='mb-2'>Task Title</h3>
                        <input
                            value={taskTitle}
                            onChange={(e) => { setTaskTitle(e.target.value) }}
                            className='border-2 border-emerald-500 bg-transparent rounded-md p-3 outline-none w-full'
                            type="text"
                            placeholder='Make a UI Design'
                        />
                    </div>

                    <div className='flex flex-col md:col-span-2 lg:col-span-3'>
                        <h3 className='mb-2'>Description</h3>
                        <textarea
                            value={taskDes}
                            onChange={(e) => { setTaskDesc(e.target.value) }}
                            className='border-2 border-emerald-500 bg-transparent rounded-md p-3 outline-none w-full'
                            rows="5"
                            placeholder='Enter task description'
                        ></textarea>
                    </div>

                    <div className='flex flex-col'>
                        <h3 className='mb-2'>Date</h3>
                        <input
                            value={taskDate}
                            onChange={(e) => { setTaskDate(e.target.value) }}
                            className='border-2 border-emerald-500 bg-transparent rounded-md p-3 outline-none w-full'
                            type="date"
                        />
                    </div>

                    <div className='flex flex-col'>
                        <h3 className='mb-2'>Assign to</h3>
                        <input
                            value={asignTo}
                            onChange={(e) => { setAsignTO(e.target.value) }}
                            className='border-2 border-emerald-500 bg-transparent rounded-md p-3 outline-none w-full'
                            type="text"
                            placeholder='Enter employee name'
                        />
                    </div>

                    <div className='flex flex-col'>
                        <h3 className='mb-2'>Category</h3>
                        <input
                            value={category}
                            onChange={(e) => { setcategory(e.target.value) }}
                            className='border-2 border-emerald-500 bg-transparent rounded-md p-3 outline-none w-full'
                            type="text"
                            placeholder='Design, Dev, etc'
                        />
                    </div>

                    <div className='md:col-span-2 lg:col-span-3'>
                        <button
                            type='submit'
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