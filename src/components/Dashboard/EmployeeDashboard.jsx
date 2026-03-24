import React, { useEffect } from 'react'
import Header from '../others/Header'
import TaskListNumber from '../others/TaskListNumber'
import TaskList from '../TaskLists/TaskList'
function EmployeeDashboard({ data, onLogout }) {
    console.log(data, "empliye")
    return (
        <div className='p-10 bg-[#1C1C1C] h-screen'>
            <Header data={data} onLogout={onLogout} />
            <TaskListNumber data={data} />
            <TaskList data={data} />
        </div>
    )
}

export default EmployeeDashboard