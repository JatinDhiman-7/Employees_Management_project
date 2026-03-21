import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'

const AdminDashboard = () => {
    return (
        <div className='h-screen w-full p-4 md:p-10 bg-gray-900 text-white overflow-auto'>
            <Header />
            <CreateTask />
            <AllTask />
        </div>
    )
}

export default AdminDashboard