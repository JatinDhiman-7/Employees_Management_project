import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
    const authData = useContext(AuthContext)

    return (
        <div className="bg-gradient-to-br from-[#0f172a] to-[#020617] p-5 sm:p-6 rounded-3xl mt-5 shadow-2xl border border-white/10 backdrop-blur-xl">
            
            {/* Header */}
            <div className="hidden md:grid grid-cols-5 sticky top-0 z-10 bg-white/5 backdrop-blur-md text-gray-300 text-sm font-semibold py-3 px-4 rounded-xl mb-4 border border-white/10">
                <div>Employee</div>
                <div className="text-center">New</div>
                <div className="text-center">Active</div>
                <div className="text-center">Completed</div>
                <div className="text-center">Failed</div>
            </div>

            {/* Empty State */}
            {!authData?.employees?.length && (
                <div className="text-center py-14 text-gray-500">
                    <div className="text-5xl mb-3">📂</div>
                    <p className="text-lg font-medium tracking-wide">No tasks available</p>
                </div>
            )}

            {/* List */}
            <div className="space-y-4 max-h-[420px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-gray-700/50 scrollbar-track-transparent">
                {authData?.employees?.map((task, index) => (
                    <div
                        key={task.id || index}
                        className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-4 transition-all duration-300 group hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:-translate-y-[2px]"
                    >
                        {/* Mobile */}
                        <div className="md:hidden space-y-3">
                            <div className="flex items-center justify-between">
                                <h2 className="text-white font-semibold text-lg truncate">
                                    {task.firstname} {task.lastname || ''}
                                </h2>
                                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-md">
                                    👤
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 pt-2 border-t border-white/10">
                                {[
                                    { label: "New", value: task.taskNumber.newTask, color: "blue" },
                                    { label: "Active", value: task.taskNumber.active, color: "yellow" },
                                    { label: "Completed", value: task.taskNumber.completed, color: "green" },
                                    { label: "Failed", value: task.taskNumber.failed, color: "red" }
                                ].map((item, i) => (
                                    <div key={i} className="text-xs text-gray-400 flex justify-between">
                                        <span>{item.label}:</span>
                                        <span className="font-mono text-white">{item.value}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Progress */}
                            <div className="space-y-2 pt-2">
                                {[
                                    { val: task.taskNumber.newTask, color: "bg-blue-400" },
                                    { val: task.taskNumber.active, color: "bg-yellow-400" }
                                ].map((bar, i) => (
                                    <div key={i} className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full ${bar.color} rounded-full transition-all duration-500`}
                                            style={{ width: `${Math.min((bar.val / 10) * 100, 100)}%` }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Desktop */}
                        <div className="hidden md:grid grid-cols-5 items-center text-sm gap-4">
                            <div className="text-white font-medium truncate">
                                {task.firstname} {task.lastname || ''}
                            </div>

                            <div className="text-center text-blue-400 font-semibold">
                                {task.taskNumber.newTask}
                            </div>

                            <div className="text-center text-yellow-400 font-semibold">
                                {task.taskNumber.active}
                            </div>

                            <div className="text-center text-green-400 font-semibold">
                                {task.taskNumber.completed}
                            </div>

                            <div className="text-center text-red-400 font-semibold">
                                {task.taskNumber.failed}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AllTask