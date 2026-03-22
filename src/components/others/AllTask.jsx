import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
    const authData = useContext(AuthContext)

    return (
        <div className="bg-[#111] p-4 sm:p-6 rounded-2xl mt-5 shadow-lg border border-gray-800">

            {/* Header */}
            <div className="hidden md:grid grid-cols-5 bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-semibold py-3 px-4 rounded-xl mb-4">
                <h2>Employee</h2>
                <h3>New Task</h3>
                <h5>Active</h5>
                <h5>Completed</h5>
                <h5>Failed</h5>
            </div>

            {/* List */}
            <div className="space-y-3 max-h-[400px] overflow-y-auto pr-1">
                {authData?.employees?.map((task, index) => (
                    <div
                        key={index}
                        className="bg-[#1c1c1c] hover:bg-[#262626] transition-all duration-200 border border-gray-800 rounded-xl p-4"
                    >

                        {/* Mobile Layout */}
                        <div className="md:hidden space-y-2">
                            <h2 className="text-white font-semibold text-lg">
                                {task.firstname}
                            </h2>

                            <div className="flex justify-between text-sm">
                                <span className="text-blue-400">New:</span>
                                <span className="text-white">{task.taskNumber.newTask}</span>
                            </div>

                            <div className="flex justify-between text-sm">
                                <span className="text-yellow-400">Active:</span>
                                <span className="text-white">{task.taskNumber.active}</span>
                            </div>

                            <div className="flex justify-between text-sm">
                                <span className="text-green-400">Completed:</span>
                                <span className="text-white">{task.taskNumber.completed}</span>
                            </div>

                            <div className="flex justify-between text-sm">
                                <span className="text-red-400">Failed:</span>
                                <span className="text-white">{task.taskNumber.failed}</span>
                            </div>
                        </div>

                        {/* Desktop Layout */}
                        <div className="hidden md:grid grid-cols-5 items-center text-sm text-white">
                            <h2 className="font-medium">{task.firstname}</h2>
                            <h3 className="text-blue-400">{task.taskNumber.newTask}</h3>
                            <h5 className="text-yellow-400">{task.taskNumber.active}</h5>
                            <h5 className="text-green-400">{task.taskNumber.completed}</h5>
                            <h5 className="text-red-400">{task.taskNumber.failed}</h5>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default AllTask